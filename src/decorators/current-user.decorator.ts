import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { MarketingDocument } from 'src/models/marketing.schema';

const getCurrentUserByContext = (context: ExecutionContext): MarketingDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
