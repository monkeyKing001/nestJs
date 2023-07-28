import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerService } from 'src/power/power.service';

@Controller('computer')
export class ComputerController {
	constructor(
		private cpuService: CpuService,
		private diskService: DiskService,
		private powerService: PowerService
	){}

	@Get()
	  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
