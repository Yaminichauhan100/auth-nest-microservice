import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../interfaces/token-payload.interface';
import { AuthService } from 'src/user/auth/auth.service';
import { request } from 'http';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) =>
          request?.cookies?.Authentication ||
          request?.Authentication ||
          request?.headers?.Authentication,
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
    console.log("JwtStrategy constructor initialized");
  }

  async validate(payload: TokenPayload) {
    try {
      console.log("JwtStrategy validate method called",payload);
      const user = await this.usersService.getUser({ _id: payload.userId });
      console.log("User from validate method:", user);
      return user;
    } catch (error) {
      console.error("Error in JwtStrategy validate method:", error);
      throw error; // Rethrow the error to be handled by NestJS
    }
  }
}
