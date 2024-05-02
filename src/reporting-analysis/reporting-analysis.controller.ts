import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {ReportingAnalysisService } from './reporting-analysis.service';

@Controller('reporting-ananlysis')
export class ReportingAnalysisController {
  constructor(private readonly reportingAnalysisService: ReportingAnalysisService) {}
}
