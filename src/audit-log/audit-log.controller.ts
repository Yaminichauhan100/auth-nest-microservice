import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuditLogService} from './audit-log.service';


@Controller('audit-log')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}
}