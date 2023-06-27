import { Module} from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  //dependency injection list
  //that can be used other classes for dep- injection
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {

}
