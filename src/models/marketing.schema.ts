import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

export class MarketingDocument extends AbstractDocument {}
export const MarketingSchema = SchemaFactory.createForClass(MarketingDocument);
