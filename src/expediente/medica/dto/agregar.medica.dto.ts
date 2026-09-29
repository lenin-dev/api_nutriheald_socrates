import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class AgregarMedicaDto {
    @ApiProperty({ description: 'Identificador del expediente', example: 1, minimum: 1 })
    @IsInt({ message: 'idexpediente tiene que ser un número entero' })
    @Min(1, { message: 'idexpediente tiene que ser mayor a cero' })
    idexpediente!: number;

    @ApiPropertyOptional({ example: '110/70', maxLength: 20, nullable: true })
    @IsOptional()
    @IsString({ message: 'TA tiene que ser de tipo texto' })
    @MaxLength(20, { message: 'TA no puede exceder 20 caracteres' })
    TA?: string | null;

    @ApiPropertyOptional({ example: '36.5', maxLength: 20, nullable: true })
    @IsOptional()
    @IsString({ message: 'TC tiene que ser de tipo texto' })
    @MaxLength(20, { message: 'TC no puede exceder 20 caracteres' })
    TC?: string | null;

    @ApiPropertyOptional({ example: '18', maxLength: 20, nullable: true })
    @IsOptional()
    @IsString({ message: 'Fr tiene que ser de tipo texto' })
    @MaxLength(20, { message: 'Fr no puede exceder 20 caracteres' })
    Fr?: string | null;

    @ApiPropertyOptional({ example: '80', maxLength: 20, nullable: true })
    @IsOptional()
    @IsString({ message: 'FC tiene que ser de tipo texto' })
    @MaxLength(20, { message: 'FC no puede exceder 20 caracteres' })
    FC?: string | null;

    @ApiPropertyOptional({ example: '98%', maxLength: 20, nullable: true })
    @IsOptional()
    @IsString({ message: 'Po2 tiene que ser de tipo texto' })
    @MaxLength(20, { message: 'Po2 no puede exceder 20 caracteres' })
    Po2?: string | null;

    @ApiPropertyOptional({ example: true, nullable: true })
    @IsOptional()
    @IsBoolean({ message: 'oidoSimetrico tiene que ser de tipo booleano' })
    oidoSimetrico?: boolean | null;

    @ApiPropertyOptional({ example: true, nullable: true })
    @IsOptional()
    @IsBoolean({ message: 'oidoColoracion tiene que ser de tipo booleano' })
    oidoColoracion?: boolean | null;

    @ApiPropertyOptional({ description: 'Recomendaciones médicas', nullable: true })
    @IsOptional()
    @IsString({ message: 'recomendaciones tiene que ser de tipo texto' })
    recomendaciones?: string | null;

    @ApiPropertyOptional({ description: 'Observaciones médicas', nullable: true })
    @IsOptional()
    @IsString({ message: 'observaciones tiene que ser de tipo texto' })
    observaciones?: string | null;
}