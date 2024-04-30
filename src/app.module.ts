import { Module } from '@nestjs/common';
import { MarketingModule} from './marketing/marketing.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MarketingDocument } from './models/marketing.schema';

@Module({
  imports: [MarketingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
