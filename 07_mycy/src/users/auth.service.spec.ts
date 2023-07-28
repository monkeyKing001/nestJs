import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  //() =>
  //is a function that take no arguments
  //=> means 'define function'
  //Promise.resolve([]) - This is the body of the function. In this case, the function returns a resolved promise with an empty array ([]). The Promise.resolve() method is used to create a promise that resolves to the provided value ([] in this case).


  beforeEach(async () => {
    // Create a fake copy of the users service
	  // in user controller, we defined the signup function as returning excetion throwing(find()) or usersService.create();
    fakeUsersService = {
		//instead of finding a random one that real exist, we will make an emtpy findOne
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };

    const module = await Test.createTestingModule({
      providers: [
		  //if anyone who in provide, give them the value useValue
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup('asdf@asdf.com', 'asdf');

    expect(user.password).not.toEqual('asdf');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async (done) => {
    fakeUsersService.find = () =>
      Promise.resolve([{ id: 1, email: 'a', password: '1' } as User]);
    try {
      await service.signup('asdf@asdf.com', 'asdf');
    } catch (err) {
      done();
    }
  });
});
