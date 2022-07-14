import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormBuilderDto } from './dto/create-form-builder.dto';

@Injectable()
export class FormBuilderService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFormBuilder(userId: string, id: string) {
    const formBuilder = await this.prismaService.formBuilder.findUnique({
      where: {
        id,
      },
    });
    if (!formBuilder) throw new NotFoundException();
    if (formBuilder.userId !== userId) throw new UnauthorizedException();
    return formBuilder;
  }

  async createFormBuilder(userId: string, dto: CreateFormBuilderDto) {
    return await this.prismaService.formBuilder.create({
      data: {
        ...dto,
        formList: JSON.parse(dto.formList),
        userId: userId,
      },
    });
  }

  async deleteFormBuilder(userId: string, id: string) {
    const formBuilder = await this.prismaService.formBuilder.findUnique({
      where: {
        id,
      },
    });
    if (!formBuilder) throw new NotFoundException();
    if (formBuilder.userId !== userId) throw new UnauthorizedException();
    return await this.prismaService.formBuilder.delete({
      where: {
        id,
      },
    });
  }
}
