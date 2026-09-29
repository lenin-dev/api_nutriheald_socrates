import { PartialType } from '@nestjs/swagger';
import { AgregarNutricionDto } from './agregar.nutricion.dto.js';

export class EditarNutricionDto extends PartialType(AgregarNutricionDto) {}