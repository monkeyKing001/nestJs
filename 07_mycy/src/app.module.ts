import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/report.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
	  ConfigModule.forRoot({
		isGlobal:true,
        envFilePath: `.env.${process.env.NODE_ENV}`,
	  }),
	  UsersModule, 
	  ReportsModule, 
//	  TypeOrmModule.forRoot({
//      type: 'sqlite',//orm type notification
//      database: 'db.sqlite',//db.sqlite is file base database
//      entities: [User, Report],//entities will be users, reports
//      synchronize: true,
//	  })
	  //refactoring
      TypeOrmModule.forRootAsync({
       inject: [ConfigService],
       useFactory: (config: ConfigService) => {
         return {
           type: 'sqlite',
           database: config.get<string>('DB_NAME'),
           synchronize: true,
           entities: [User, Report],
         };
       },
    }),
  	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
