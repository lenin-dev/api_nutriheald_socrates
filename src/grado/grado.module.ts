import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { GradoController } from './grado.controller.js';
import { GradoService } from './grado.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [GradoController],
  providers: [GradoService]
})
export class GradoModule {}
