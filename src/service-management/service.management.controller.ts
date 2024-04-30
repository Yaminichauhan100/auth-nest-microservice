import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateServiceDto } from 'src/dto/create.service.dto';
import { ServiceManagementService } from './service.management.service';


@Controller('services')
export class ServiceManagementController {
  constructor(private readonly serviceManagementService: ServiceManagementService) {}
}