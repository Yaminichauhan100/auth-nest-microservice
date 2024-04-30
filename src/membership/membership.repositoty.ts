import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AbstractRepository } from 'src/database/abstract.repository';
import { MembershipDocument } from 'src/models/membership.schema';

@Injectable()
export class AuthRepository extends AbstractRepository<MembershipDocument> {
  protected readonly logger = new Logger(AuthRepository.name);

  constructor(@InjectModel(MembershipDocument.name) MembershipModel: Model<MembershipDocument>) {
    super(MembershipModel);
  }
}