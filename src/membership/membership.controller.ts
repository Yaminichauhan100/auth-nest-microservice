import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MembershipService} from './membership.service';


@Controller('services')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}
}