import { PartialType } from '@nestjs/swagger';
import { AgregarGradoDto } from './agregar.grado.dto.js';

export class EditarGradoDto extends PartialType(AgregarGradoDto) {}