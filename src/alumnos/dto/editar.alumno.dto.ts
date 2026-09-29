import { PartialType } from '@nestjs/swagger';
import { AgregarAlumnoDto } from './agregar.alumno.dto.js';

export class EditarAlumnoDto extends PartialType(AgregarAlumnoDto) {}