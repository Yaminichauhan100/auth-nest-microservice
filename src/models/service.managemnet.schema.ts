import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

export class ServiceManagementDocument extends AbstractDocument {}
export const ServiceManagementSchema = SchemaFactory.createForClass(ServiceManagementDocument);
