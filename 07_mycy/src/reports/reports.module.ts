import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';

@Module({
  controllers: [ReportsController],
  imports: [Report],
  providers: [ReportsService]
})
export class ReportsModule {}
