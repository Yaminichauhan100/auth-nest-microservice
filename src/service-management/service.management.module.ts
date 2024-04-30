import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { ServiceManagementController } from './service.management.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { LocalStategy } from 'src/strategies/local.strategy';
import { AuthRepository } from './service.management.repositoty';
import { LoggerModule } from 'src/logger/logger.module';
import { ServiceManagementService } from './service.management.service';
import { ServiceManagementDocument, ServiceManagementSchema } from 'src/models/service.managemnet.schema';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ServiceManagementDocument.name, schema: ServiceManagementSchema },
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
  controllers: [ServiceManagementController],
  providers: [ServiceManagementService, LocalStategy, AuthRepository],
})
export class ServiceManagementModule {}
