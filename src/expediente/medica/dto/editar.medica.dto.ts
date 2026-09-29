import { PartialType } from '@nestjs/swagger';
import { AgregarMedicaDto } from './agregar.medica.dto.js';

export class EditarMedicaDto extends PartialType(AgregarMedicaDto) {}