import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

export class MembershipDocument extends AbstractDocument {}
export const MembershipSchema = SchemaFactory.createForClass(MembershipDocument);
