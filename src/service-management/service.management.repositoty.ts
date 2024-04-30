import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AbstractRepository } from 'src/database/abstract.repository';
import { ServiceManagementDocument } from 'src/models/service.managemnet.schema';

@Injectable()
export class AuthRepository extends AbstractRepository<ServiceManagementDocument> {
  protected readonly logger = new Logger(AuthRepository.name);

  constructor(@InjectModel(ServiceManagementDocument.name) ServiceManagementModel: Model<ServiceManagementDocument>) {
    super(ServiceManagementModel);
  }
}