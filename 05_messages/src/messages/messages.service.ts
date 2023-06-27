import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
	//service is creating its own dependency
	//MessagesService cannot created unless MessagesRepository has been created first
	//We do not in Nest
	//We nedd depen- injection
//	messagesRepo : MessagesRepository;
//  constructor() {
//	  this.messagesRepo = new MessagesRepository();
//  }
	constructor(public messagesRepo : MessagesRepository){
	}

  //what is the point of this funtion? be cause it does exactly same what Repository does
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
