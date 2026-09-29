import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class AgregarNutricionDto {
    @ApiProperty({
        description: 'Identificador del expediente al que pertenece la valoración',
        example: 1,
        minimum: 1,
    })
    @IsInt({ message: 'idexpediente tiene que ser un número entero' })
    @Min(1, { message: 'idexpediente tiene que ser mayor a cero' })
    idexpediente!: number;

    @ApiPropertyOptional({ example: 32.5, minimum: 0, maximum: 999.99, nullable: true })
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'peso tiene que ser un número con máximo 2 decimales' })
    @Min(0, { message: 'peso no puede ser negativo' })
    @Max(999.99, { message: 'peso no puede exceder 999.99' })
    peso?: number | null;

    @ApiPropertyOptional({ example: 1.42, minimum: 0, maximum: 999.99, nullable: true })
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'talla tiene que ser un número con máximo 2 decimales' })
    @Min(0, { message: 'talla no puede ser negativa' })
    @Max(999.99, { message: 'talla no puede exceder 999.99' })
    talla?: number | null;

    @ApiPropertyOptional({ example: 16.12, minimum: 0, maximum: 999.99, nullable: true })
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'imc tiene que ser un número con máximo 2 decimales' })
    @Min(0, { message: 'imc no puede ser negativo' })
    @Max(999.99, { message: 'imc no puede exceder 999.99' })
    imc?: number | null;

    @ApiPropertyOptional({ example: 52.4, minimum: 0, maximum: 999.99, nullable: true })
    @IsOptional()
    @IsNumber(
        { maxDecimalPlaces: 2 },
        { message: 'perimetroCefalico tiene que ser un número con máximo 2 decimales' },
    )
    @Min(0, { message: 'perimetroCefalico no puede ser negativo' })
    @Max(999.99, { message: 'perimetroCefalico no puede exceder 999.99' })
    perimetroCefalico?: number | null;

    @ApiPropertyOptional({ description: 'Evaluación de IMC para la edad', nullable: true })
    @IsOptional()
    @IsString({ message: 'imcParaEdad tiene que ser de tipo texto' })
    imcParaEdad?: string | null;

    @ApiPropertyOptional({ description: 'Evaluación de peso para la edad', nullable: true })
    @IsOptional()
    @IsString({ message: 'pesoParaEdad tiene que ser de tipo texto' })
    pesoParaEdad?: string | null;

    @ApiPropertyOptional({ description: 'Evaluación de talla para la edad', nullable: true })
    @IsOptional()
    @IsString({ message: 'tallaParaEdad tiene que ser de tipo texto' })
    tallaParaEdad?: string | null;

    @ApiPropertyOptional({ description: 'Evaluación de peso para la talla', nullable: true })
    @IsOptional()
    @IsString({ message: 'pesoParaTalla tiene que ser de tipo texto' })
    pesoParaTalla?: string | null;

    @ApiPropertyOptional({ description: 'Evaluación de perímetro para la edad', nullable: true })
    @IsOptional()
    @IsString({ message: 'perimetroParaEdad tiene que ser de tipo texto' })
    perimetroParaEdad?: string | null;

    @ApiPropertyOptional({ description: 'Calificación nutricional', nullable: true })
    @IsOptional()
    @IsString({ message: 'calificacion tiene que ser de tipo texto' })
    calificacion?: string | null;

    @ApiPropertyOptional({ description: 'Recomendaciones nutricionales', nullable: true })
    @IsOptional()
    @IsString({ message: 'recomendaciones tiene que ser de tipo texto' })
    recomendaciones?: string | null;

    @ApiPropertyOptional({ description: 'Observaciones de la valoración', nullable: true })
    @IsOptional()
    @IsString({ message: 'observaciones tiene que ser de tipo texto' })
    observaciones?: string | null;
}