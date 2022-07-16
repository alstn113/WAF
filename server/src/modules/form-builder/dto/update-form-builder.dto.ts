import { ApiProperty } from '@nestjs/swagger';

export class UpdateFormBuilderDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  formList?: string;
}
