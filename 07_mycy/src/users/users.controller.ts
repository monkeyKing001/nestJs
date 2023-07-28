import { Body, 
	Controller, 
	Post, 
	Get, 
	Patch, 
	Param, 
	Query, 
	Delete, 
	UseInterceptors,
	Session,
	UseGuards,

} from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthGuard } from './guards/auth.guard';
//import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';//change to globally scoped


//Normal User
//becuase of serialize we can get the return user
//@UseInterceptors(CurrentUserInterceptor) let's cahnge dec's scope globally!
@Controller('auth')
@Serialize(UserDto)
export class UsersController {
	
	constructor(private usersService: UsersService,
				private authService: AuthService,
			   ){}

	//to make session, we have to wait signup, signin return. so change to async, await
	
	
	//user can be null -> need guard

	//if not in session(can check with guard), don't execute
	@Get('/whoami')
	@UseGuards(AuthGuard)
	whoAmI(@CurrentUser() user: User) {
		return user;
	}

	@Post('/signout')
	signOut(@Session() session: any) {
		session.userId = null;
	}

	@Post('/signup')
	async createUser(@Body() body: CreateUserDto, @Session() session : any) {
		const user = await this.authService.signup(body.email, body.password);
		session.userId = user.id;
		return user;
	}

	@Post('/signin')
	async signin(@Body() body : CreateUserDto, @Session() session : any){
		const user = await this.authService.signin(body.email, body.password);
		session.userId = user.id;
		return user;
	}

//	@UseInterceptors(new SerializeInterceptor(UserDto))//too long code
	//	Abundant
	@Serialize(UserDto)
	@Get('/:id')
	async findUser(@Param('id') id: string){
//		console.log("GET PARAM called");
		console.log("Handler is running");
		const user : User = await this.usersService.findOne(parseInt(id));
		if (!user) {
		  throw new NotFoundException('user not found');
		}
		return user;
	}

	@Delete('/:id')
	removeUser(@Param('id') id: string) {
		return this.usersService.remove(parseInt(id));
	}

	@Patch('/:id')
	updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
		return this.usersService.update(parseInt(id), body);
	}
}

//ADMIN
@Controller('admin/auth')
export class AdminController{
	constructor(private usersService: UsersService,
			   ){}

	@Get('/:id')
	async findUser(@Param('id') id: string){
//		console.log("GET PARAM called");
//		console.log("Admin Handler is running");
		const user : User = await this.usersService.findOne(parseInt(id));
		if (!user) {
		  throw new NotFoundException('user not found');
		}
		return user;
	}
}

