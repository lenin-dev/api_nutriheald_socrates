import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class AgregarGradoDto {
    @ApiProperty({
        description: 'Nombre del grado',
        example: 'Primero',
        maxLength: 50,
    })
    @IsString({ message: 'nombre tiene que ser de tipo texto' })
    @MinLength(1, { message: 'nombre no puede estar vacío' })
    @MaxLength(50, { message: 'nombre no puede exceder 50 caracteres' })
    nombre!: string;

    @ApiPropertyOptional({
        description: 'Descripción del grado',
        example: 'Primer grado de primaria',
        maxLength: 255,
        nullable: true,
    })
    @IsOptional()
    @IsString({ message: 'descripcion tiene que ser de tipo texto' })
    @MaxLength(255, { message: 'descripcion no puede exceder 255 caracteres' })
    descripcion?: string | null;
}