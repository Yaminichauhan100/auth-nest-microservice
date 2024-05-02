// export interface AuthDto {
//   _id: string;
//   email: string;
//   password: string;
// }
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UserRegisterDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  // @IsOptional()
  // @IsArray()
  // @IsString({ each: true })
  // @IsNotEmpty({ each: true })
  // roles?: string[];
}

export class GetUserDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}