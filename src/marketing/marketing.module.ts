import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { MarketingController} from './marketing.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { LocalStategy } from 'src/strategies/local.strategy';
import { AuthRepository } from './marketing.repositoty';
import { LoggerModule } from 'src/logger/logger.module';
import { MarketingService,  } from './marketing.service';
import { MarketingDocument, MarketingSchema } from 'src/models/marketing.schema';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: MarketingDocument.name, schema: MarketingSchema },
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
  controllers: [MarketingController],
  providers: [MarketingService, LocalStategy, AuthRepository],
})
export class MarketingModule {}
