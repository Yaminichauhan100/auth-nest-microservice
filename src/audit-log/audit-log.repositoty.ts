import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AbstractRepository } from 'src/database/abstract.repository';import { AuditLogDocument } from 'src/models/audit.log.schema';

@Injectable()
export class AuthRepository extends AbstractRepository<AuditLogDocument> {
  protected readonly logger = new Logger(AuthRepository.name);

  constructor(@InjectModel(AuditLogDocument.name) AuditLogModel: Model<AuditLogDocument>) {
    super(AuditLogModel);
  }
}