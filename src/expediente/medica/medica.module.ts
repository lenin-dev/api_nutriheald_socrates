import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { MedicaController } from './medica.controller.js';
import { MedicaService } from './medica.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [MedicaController],
  providers: [MedicaService]
})
export class MedicaModule {}
