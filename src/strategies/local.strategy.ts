import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ServiceManagementService } from 'src/service-management/service.management.service';


@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private readonly serviceManagementService: ServiceManagementService) {
    super({ usernameField: 'email' });
  }

  // async validate(email: string, password: string) {
  //   try {
  //     return await this.authService.verifyUser(email, password);
  //   } catch (err) {
  //     throw new UnauthorizedException(err);
  //   }
  // }
}
