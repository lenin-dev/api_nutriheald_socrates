import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { NutricionModule } from './nutricion/nutricion.module.js';
import { MedicaModule } from './medica/medica.module.js';
import { OpticoModule } from './optico/optico.module.js';
import { ExpedienteController } from './expediente.controller.js';
import { ExpedienteService } from './expediente.service.js';

@Module({
  imports: [PrismaModule, NutricionModule, MedicaModule, OpticoModule],
  controllers: [ExpedienteController],
  providers: [ExpedienteService]
})
export class ExpedienteModule {}
