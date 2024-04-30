import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { MembershipDocument } from 'src/models/membership.schema';

const getCurrentUserByContext = (context: ExecutionContext): MembershipDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
