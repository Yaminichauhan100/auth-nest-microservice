import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ReportingAnalysisDocument } from 'src/models/reporting-analysis.schema';


const getCurrentUserByContext = (context: ExecutionContext): ReportingAnalysisDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
