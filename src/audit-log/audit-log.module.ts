import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { AuditLogController} from './audit-log.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { LocalStategy } from 'src/strategies/local.strategy';
import { AuthRepository } from './audit-log.repositoty';
import { LoggerModule } from 'src/logger/logger.module';
import { AuditLogDocument, AuditLogSchema } from 'src/models/audit.log.schema';
import { AuditLogService } from './audit-log.service';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: AuditLogDocument.name, schema: AuditLogSchema },
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
  controllers: [AuditLogController],
  providers: [AuditLogService, LocalStategy, AuthRepository],
})
export class AuditLogModule {}
