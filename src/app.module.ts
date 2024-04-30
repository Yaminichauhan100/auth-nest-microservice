import { Module } from '@nestjs/common';
import { ServiceManagementModule } from './service-management/service.management.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [ServiceManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
