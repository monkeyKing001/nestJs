import {
	createParamDecorator,
	ExecutionContext 
} from '@nestjs/common';

//use interceptor
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
	  //data is the arguments in decorator in use 
	  // ex: (@CurrentUser(arg : string) -> data === arg)
	  // never -> the deco- will not take any arguments
    const request = context.switchToHttp().getRequest();
	request.session.id;
    return request.currentUser;
  },
);
