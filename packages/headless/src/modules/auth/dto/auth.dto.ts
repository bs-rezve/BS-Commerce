import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from 'class-validator';
import type { SignInRequest, CreateUserRequest, ForgotPasswordRequest } from 'models'

export class SignInDataDto implements SignInRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(6, {
    message: 'Invalid Credentials',
  })
  password: string;
}

export class CreateUserDto implements CreateUserRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  displayName?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'Password is too short. Minimal length is $constraint1 characters',
  })
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  provider?: string;
}

export class ForgotPasswordDto implements ForgotPasswordRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}


