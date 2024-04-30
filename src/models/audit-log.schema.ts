import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

export class AuditLogDocument extends AbstractDocument {}
export const AuditLogSchema = SchemaFactory.createForClass(AuditLogDocument);
