import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports : [PowerService] //accessablie to other class
})
export class PowerModule {}
