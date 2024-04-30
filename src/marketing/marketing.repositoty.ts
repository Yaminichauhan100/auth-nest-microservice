import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AbstractRepository } from 'src/database/abstract.repository';
import { MarketingDocument } from 'src/models/marketing.schema';

@Injectable()
export class AuthRepository extends AbstractRepository<MarketingDocument> {
  protected readonly logger = new Logger(AuthRepository.name);

  constructor(@InjectModel(MarketingDocument.name) MarketingModel: Model<MarketingDocument>) {
    super(MarketingModel);
  }
}