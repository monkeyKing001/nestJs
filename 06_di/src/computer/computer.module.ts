import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';
import { PowerModule } from 'src/power/power.module';

@Module({
	imports: [ CpuModule, DiskModule, PowerModule ], 
	controllers: [ComputerController]
})
export class ComputerModule {}
