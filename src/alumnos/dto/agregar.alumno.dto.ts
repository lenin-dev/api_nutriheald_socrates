import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class AgregarAlumnoDto {
	@ApiProperty({
		description: 'Matrícula única del alumno',
		example: 'ALU-2026-001',
		maxLength: 30,
	})
	@IsString({ message: 'matricula tiene que ser de tipo texto' })
	@MinLength(1, { message: 'matricula no puede estar vacía' })
	@MaxLength(30, { message: 'matricula no puede exceder 30 caracteres' })
	matricula!: string;

	@ApiProperty({
		description: 'Nombres del alumno',
		example: 'Juan Carlos',
		maxLength: 100,
	})
	@IsString({ message: 'nombres tiene que ser de tipo texto' })
	@MinLength(1, { message: 'nombres no puede estar vacío' })
	@MaxLength(100, { message: 'nombres no puede exceder 100 caracteres' })
	nombres!: string;

	@ApiProperty({
		description: 'Apellidos del alumno',
		example: 'Pérez López',
		maxLength: 100,
	})
	@IsString({ message: 'apellidos tiene que ser de tipo texto' })
	@MinLength(1, { message: 'apellidos no puede estar vacío' })
	@MaxLength(100, { message: 'apellidos no puede exceder 100 caracteres' })
	apellidos!: string;

	@ApiPropertyOptional({
		description: 'Fecha de nacimiento en formato ISO 8601',
		example: '2015-06-20',
		type: String,
		format: 'date',
		nullable: true,
	})
	@IsOptional()
	@IsDateString({}, { message: 'fechaNacimiento tiene que ser una fecha válida' })
	fechaNacimiento?: string | null;

	@ApiPropertyOptional({
		description: 'Sexo del alumno',
		example: 'Femenino',
		maxLength: 20,
		nullable: true,
	})
	@IsOptional()
	@IsString({ message: 'sexo tiene que ser de tipo texto' })
	@MaxLength(20, { message: 'sexo no puede exceder 20 caracteres' })
	sexo?: string | null;

	@ApiPropertyOptional({
		description: 'Edad del alumno',
		example: 11,
		minimum: 0,
		nullable: true,
	})
	@IsOptional()
	@IsInt({ message: 'edad tiene que ser un número entero' })
	@Min(0, { message: 'edad no puede ser negativa' })
	edad?: number | null;

	@ApiPropertyOptional({
		description: 'Teléfono del alumno',
		example: '5551234567',
		maxLength: 10,
		nullable: true,
	})
	@IsOptional()
	@IsString({ message: 'telefono tiene que ser de tipo texto' })
	@MaxLength(10, { message: 'telefono no puede exceder 10 caracteres' })
	telefono?: string | null;

	@ApiProperty({
		description: 'Identificador de la sección a la que pertenece el alumno',
		example: 1,
		minimum: 1,
	})
	@IsInt({ message: 'idseccion tiene que ser un número entero' })
	@Min(1, { message: 'idseccion tiene que ser mayor a cero' })
	idseccion!: number;

	@ApiPropertyOptional({
		description: 'Indica si el alumno está activo; por defecto es true',
		example: true,
		default: true,
	})
	@IsOptional()
	@IsBoolean({ message: 'activo tiene que ser de tipo booleano' })
	activo?: boolean;
}
