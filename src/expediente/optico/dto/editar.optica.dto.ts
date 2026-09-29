import { PartialType } from '@nestjs/swagger';
import { AgregarOpticaDto } from './agregar.optica.dto.js';

export class EditarOpticaDto extends PartialType(AgregarOpticaDto) {}