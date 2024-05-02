import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { MarketingService } from 'src/reporting-analysis/reporting-analysis.service';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private readonly marketingService: MarketingService) {
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
