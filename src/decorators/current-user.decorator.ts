import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ServiceManagementDocument } from 'src/models/service.managemnet.schema';

const getCurrentUserByContext = (context: ExecutionContext): ServiceManagementDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
