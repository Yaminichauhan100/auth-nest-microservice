import { Module } from '@nestjs/common';
import { MembershipModule} from './membership/membership.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [MembershipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
