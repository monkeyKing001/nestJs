import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
	//MessagesService cannot created unless MessagesRepository has been created first
	//We do not in Nest
	//We nedd depen- injection
	//instead of making 3 class instances like
	//const repo = new MessagesRepository();
	//const serv = new MessagesService();
	//const contr = new MessagesController();
	//what you goona do when you need n of controllers? gonna make n * 3 instances?
	//+ in the case of we want to test fakeRepo etc we can use 'interface'
	//
	//we will make one instance (Controller) using depen- injection
	//const contr = new MessagesController();
//	messagesService : MessagesService;
//  constructor() {
//	  this.messagesService = new MessagesService();
	constructor (public messagesService : MessagesService){
	}
  @Get()
  listMessages() {
      return this.messagesService.findAll();
	}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
	  return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
	  const msg = await this.messagesService.findOne(id);
	  if (!msg)
		  throw new NotFoundException('Message not found');
	  return (msg);
  }
}
