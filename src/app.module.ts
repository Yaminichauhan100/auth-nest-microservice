import { Module } from '@nestjs/common';
import { ReportingAnalysisModule } from './reporting-analysis/reporting-analysis.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [ReportingAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
