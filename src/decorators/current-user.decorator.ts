import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuditLogDocument } from 'src/models/audit.log.schema';

const getCurrentUserByContext = (context: ExecutionContext): AuditLogDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
