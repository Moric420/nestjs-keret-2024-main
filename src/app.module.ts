import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacationModule } from './vacationn/vacation.module';

@Module({
  imports: [VacationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}






