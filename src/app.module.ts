import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { AlumnosModule } from './alumnos/alumnos.module.js';
import { ExpedienteModule } from './expediente/expediente.module.js';
import { SeccionModule } from './seccion/seccion.module.js';
import { GradoModule } from './grado/grado.module.js';

@Module({
  imports: [PrismaModule, AlumnosModule, ExpedienteModule, SeccionModule, GradoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
