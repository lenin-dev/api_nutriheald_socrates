import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { NutricionController } from './nutricion.controller.js';
import { NutricionService } from './nutricion.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [NutricionController],
  providers: [NutricionService]
})
export class NutricionModule {}
