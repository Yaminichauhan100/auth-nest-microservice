import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AbstractRepository } from 'src/database/abstract.repository';
import {ReportingAnalysisDocument } from 'src/models/reporting-analysis.schema';

@Injectable()
export class AuthRepository extends AbstractRepository<ReportingAnalysisDocument> {
  protected readonly logger = new Logger(AuthRepository.name);

  constructor(@InjectModel(ReportingAnalysisDocument.name) ReportingAnalysisModel: Model<ReportingAnalysisDocument>) {
    super(ReportingAnalysisModel);
  }
}