import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Exclude, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsDate, IsBoolean } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber()
  @IsOptional()
  @Exclude()
  @Type(() => Number)
  id: number;
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Exclude()
  createdAt: Date;
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Exclude()
  updatedAt: Date;
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Exclude()
  deletedAt: Date;
  @IsBoolean()
  @Exclude()
  @IsOptional()
  @Type(() => Boolean)
  deleted: boolean;
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  active: boolean;
}
