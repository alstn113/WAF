import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormBuilderDto } from './dto/create-form-builder.dto';
import { UpdateFormBuilderDto } from './dto/update-form-builder.dto';

@Injectable()
export class FormBuilderService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFormBuilders(userId: string) {
    return await this.prismaService.formBuilder.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

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

  async updateFormBuilder(
    userId: string,
    id: string,
    dto: UpdateFormBuilderDto,
  ) {
    const formBuilder = await this.prismaService.formBuilder.findUnique({
      where: { id },
    });
    if (!formBuilder) throw new NotFoundException();
    if (formBuilder.userId !== userId) throw new UnauthorizedException();

    return await this.prismaService.formBuilder.update({
      where: { id },
      data: {
        title: dto.title,
        description: dto.description,
        formList: JSON.parse(dto.formList),
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
