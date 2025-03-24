import { ApiProperty } from '@nestjs/swagger';

export class User {
  constructor(username: string, name?: string) {
    this.username = username;
    this.name = name;
  }

  @ApiProperty()
  username: string;
  @ApiProperty({ type: String })
  name: string | undefined;
  @ApiProperty()
  uploadUserID: number;
  @ApiProperty()
  id: number;
  @ApiProperty({ type: Date })
  createdAt: Date = new Date();
  @ApiProperty({ type: Date })
  updatedAt: Date | null = null;
  @ApiProperty({ type: Date })
  deletedAt: Date | null = null;
  @ApiProperty()
  deleted: boolean = false;
  @ApiProperty()
  active: boolean = true;
}
