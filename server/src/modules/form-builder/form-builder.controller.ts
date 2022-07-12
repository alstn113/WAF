import { Controller } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';

@Controller('form-builder')
export class FormBuilderController {
  constructor(private readonly formBuilderService: FormBuilderService) {}
}
