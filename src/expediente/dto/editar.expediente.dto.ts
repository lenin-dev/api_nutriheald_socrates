import { PartialType } from '@nestjs/swagger';
import { AgregarExpedienteDto } from './agregar.expediente.dto.js';

export class EditarExpedienteDto extends PartialType(AgregarExpedienteDto) {}