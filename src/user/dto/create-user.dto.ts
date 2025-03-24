import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  username: string;
  @IsOptional()
  @IsString()
  name: string;
}
