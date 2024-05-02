import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { ReportingAnalysisController } from './reporting-analysis.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { LocalStategy } from 'src/strategies/local.strategy';
import { AuthRepository } from './reporting-analysis.repositoty';
import { LoggerModule } from 'src/logger/logger.module';
import { ReportingAnalysisService } from './reporting-analysis.service';
import {
  ReportingAnalyisisSchema,
  ReportingAnalysisDocument,
} from 'src/models/reporting-analysis.schema';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: ReportingAnalysisDocument.name,
        schema: ReportingAnalyisisSchema,
      },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ReportingAnalysisController],
  providers: [ReportingAnalysisService, LocalStategy, AuthRepository],
})
export class ReportingAnalysisModule {}
