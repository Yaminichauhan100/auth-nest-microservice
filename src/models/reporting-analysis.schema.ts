import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

export class ReportingAnalysisDocument extends AbstractDocument {}
export const ReportingAnalyisisSchema = SchemaFactory.createForClass(ReportingAnalysisDocument);
