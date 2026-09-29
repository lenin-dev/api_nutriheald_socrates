import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class AgregarOpticaDto {
    @ApiProperty({ description: 'Identificador del expediente', example: 1, minimum: 1 })
    @IsInt({ message: 'idexpediente tiene que ser un número entero' })
    @Min(1, { message: 'idexpediente tiene que ser mayor a cero' })
    idexpediente!: number;

    @ApiPropertyOptional({ example: '20/20', maxLength: 100, nullable: true })
    @IsOptional()
    @IsString({ message: 'OD tiene que ser de tipo texto' })
    @MaxLength(100, { message: 'OD no puede exceder 100 caracteres' })
    OD?: string | null;

    @ApiPropertyOptional({ example: '20/20', maxLength: 100, nullable: true })
    @IsOptional()
    @IsString({ message: 'OI tiene que ser de tipo texto' })
    @MaxLength(100, { message: 'OI no puede exceder 100 caracteres' })
    OI?: string | null;

    @ApiPropertyOptional({ example: '20/20', maxLength: 100, nullable: true })
    @IsOptional()
    @IsString({ message: 'AO tiene que ser de tipo texto' })
    @MaxLength(100, { message: 'AO no puede exceder 100 caracteres' })
    AO?: string | null;

    @ApiPropertyOptional({ description: 'Observaciones ópticas', nullable: true })
    @IsOptional()
    @IsString({ message: 'observaciones tiene que ser de tipo texto' })
    observaciones?: string | null;

    @ApiPropertyOptional({ example: 'Dra. Ana López', maxLength: 150, nullable: true })
    @IsOptional()
    @IsString({ message: 'optometrista tiene que ser de tipo texto' })
    @MaxLength(150, { message: 'optometrista no puede exceder 150 caracteres' })
    optometrista?: string | null;
}