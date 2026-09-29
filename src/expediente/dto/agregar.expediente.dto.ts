import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class AgregarExpedienteDto {
    @ApiProperty({
        description: 'Identificador único del alumno al que pertenece el expediente',
        example: 1,
        minimum: 1,
    })
    @IsInt({ message: 'idalumno tiene que ser un número entero' })
    @Min(1, { message: 'idalumno tiene que ser mayor a cero' })
    idalumno!: number;

    @ApiPropertyOptional({
        description: 'Observaciones generales del expediente',
        example: 'Sin observaciones adicionales',
        nullable: true,
    })
    @IsOptional()
    @IsString({ message: 'observaciones tiene que ser de tipo texto' })
    observaciones?: string | null;
}