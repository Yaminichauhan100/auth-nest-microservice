import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuditLogService} from './audit-log.service';


@Controller('services')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}
}