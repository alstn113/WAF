import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateFormBuilderDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  formList: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
}
