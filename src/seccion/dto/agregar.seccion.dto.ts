import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class AgregarSeccionDto {
    @ApiProperty({
        description: 'Nombre de la sección',
        example: 'A',
        maxLength: 50,
    })
    @IsString({ message: 'nombre tiene que ser de tipo texto' })
    @MinLength(1, { message: 'nombre no puede estar vacío' })
    @MaxLength(50, { message: 'nombre no puede exceder 50 caracteres' })
    nombre!: string;

    @ApiProperty({
        description: 'Identificador del grado al que pertenece la sección',
        example: 1,
        minimum: 1,
    })
    @IsInt({ message: 'idgrado tiene que ser un número entero' })
    @Min(1, { message: 'idgrado tiene que ser mayor a cero' })
    idgrado!: number;
}