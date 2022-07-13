import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { CreateFormBuilderDto } from './dto/create-form-builder.dto';
import { FormBuilderService } from './form-builder.service';

@Controller('form-builder')
@ApiTags('form-builder')
export class FormBuilderController {
  constructor(private readonly formBuilderService: FormBuilderService) {}

  @Get('/:id')
  async getFormBuilder(
    @GetCurrentUserId() userId: string,
    @Param('id') id: string,
  ) {
    return await this.formBuilderService.findFormBuilder(userId, id);
  }

  @Post()
  async createFormBuilder(
    @GetCurrentUserId() userId: string,
    @Body() dto: CreateFormBuilderDto,
  ) {
    return await this.formBuilderService.createFormBuilder(userId, dto);
  }
}
