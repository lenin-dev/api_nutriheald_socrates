import { PartialType } from '@nestjs/swagger';
import { AgregarSeccionDto } from './agregar.seccion.dto.js';

export class EditarSeccionDto extends PartialType(AgregarSeccionDto) {}