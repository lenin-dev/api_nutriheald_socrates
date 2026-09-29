import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { OpticoController } from './optico.controller.js';
import { OpticoService } from './optico.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [OpticoController],
  providers: [OpticoService]
})
export class OpticoModule {}
