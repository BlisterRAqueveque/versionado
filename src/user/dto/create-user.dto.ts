import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Username, only EMAIL format',
    nullable: false,
    example: 'user@user.com',
  })
  @IsEmail()
  username: string;
  @ApiProperty({
    type: String,
    description: "User's name",
    nullable: true,
    required: false,
  })
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  @Exclude()
  @Type(() => Number)
  uploadUserID: number;
}
