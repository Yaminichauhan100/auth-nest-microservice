import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { MembershipController} from './membership.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { LocalStategy } from 'src/strategies/local.strategy';
import { AuthRepository } from './membership.repositoty';
import { LoggerModule } from 'src/logger/logger.module';
import { MembershipDocument, MembershipSchema } from 'src/models/membership.schema';
import { MembershipService } from './membership.service';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: MembershipDocument.name, schema: MembershipSchema },
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
  controllers: [MembershipController],
  providers: [MembershipService, LocalStategy, AuthRepository],
})
export class MembershipModule {}
