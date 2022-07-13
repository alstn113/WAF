import { ApiProperty } from '@nestjs/swagger';

export class CreateFormBuilderDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  formList: string;
}
