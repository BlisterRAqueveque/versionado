import { Exclude, Type } from 'class-transformer';
import { IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  username: string;
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  @Exclude()
  @Type(() => Number)
  uploadUserID: string;
}
