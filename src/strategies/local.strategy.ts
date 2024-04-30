import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuditLogService } from 'src/audit-log/audit-log.service';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private readonly auditLogService: AuditLogService) {
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
