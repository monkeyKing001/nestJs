import { Controller, Get } from '@nestjs/common';

//we call @Con~ as decorator
//@Controller()
@Controller("/app")
export class AppController {
	//@Get()
	@Get("/hello")
	getRootRoute(){
		return "hello there!";
	}

	@Get('/bye')
	getByeThere() {
	return 'bye there!';
	}

}
