import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
import { Logger } from 'nestjs-pino';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const a = app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      // package: AUTH_PACKAGE_NAME,
      // protoPath: join('/home/sky/Desktop/SONNY-CRM-PROJECT/auth/auth.proto'),
      // url: 'localhost:5007', // Replace with a known working URL
    },
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  const port = configService.get('HTTP_PORT') 
  console.log(port)
  await app.listen(port);
}
bootstrap();
