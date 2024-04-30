import { Module } from '@nestjs/common';
import { AuditLogModule} from './audit-log/audit-log.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [AuditLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
