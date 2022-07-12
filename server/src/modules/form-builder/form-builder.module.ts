import { Module } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { FormBuilderController } from './form-builder.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FormBuilderController],
  providers: [FormBuilderService],
})
export class FormBuilderModule {}
