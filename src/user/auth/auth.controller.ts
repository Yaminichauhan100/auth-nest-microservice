// import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { Response } from 'express';
// import { AuthService } from './auth.service';
// import { UserRegisterDto } from 'src/dto/auth.dto';
// import { LocalAuthGuard } from 'src/guards/local-auth.guard';
// import { CurrentUser } from 'src/decorators/current-user.decorator';
// import { UserDocument } from 'src/models/user.schema';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('register')
//   async registerUser(@Body() userDto: UserRegisterDto) {
//     return this.authService.create(userDto);
//   }

//   @UseGuards(LocalAuthGuard)
//   @Post('login')
//   async login(
//     @CurrentUser() auth: UserDocument,
//     @Res({ passthrough: true }) response: Response,
//   ) {
//     console.log("inside login")
//     const jwt = await this.authService.login(auth, response);
//     response.send(jwt);
//   }
// }
import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { Response } from 'express';
import { AuthServiceController, AuthServiceControllerMethods } from 'src/types/auth';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { UserDocument } from 'src/models/user.schema';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/user.dto';

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
  return this.authService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument) {
  return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(user, response);
    response.send(jwt);
  }

  @UseGuards(JwtAuthGuard)
  async authenticate(@Payload() data: any) {
    console.log("0000000000000000000")
    return {
      ...data.user,
      id: data.user._id,
    };
  }
}
