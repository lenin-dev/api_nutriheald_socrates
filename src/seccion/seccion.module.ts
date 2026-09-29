import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { SeccionController } from './seccion.controller.js';
import { SeccionService } from './seccion.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [SeccionController],
  providers: [SeccionService]
})
export class SeccionModule {}
