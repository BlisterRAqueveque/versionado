import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber } from 'class-validator';
import { Exclude, Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber()
  @Type(() => Number)
  @Exclude()
  id: number;
}
