import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgregarOpticaDto } from './dto/agregar.optica.dto.js';
import { EditarOpticaDto } from './dto/editar.optica.dto.js';
import { OpticoService } from './optico.service.js';

@Controller('alumnos/expediente/optico')
@ApiTags('Alumnos')
export class OpticoController {
	constructor(private readonly opticoService: OpticoService) {}

	@Get()
	findAll() {
		return this.opticoService.findAll();
	}

	@Get(':idoptica')
	findOne(@Param('idoptica', ParseIntPipe) idoptica: number) {
		return this.opticoService.findOne(idoptica);
	}

	@Post()
	create(@Body() data: AgregarOpticaDto) {
		return this.opticoService.create(data);
	}

	@Put(':idoptica')
	update(
		@Param('idoptica', ParseIntPipe) idoptica: number,
		@Body() data: EditarOpticaDto,
	) {
		return this.opticoService.update(idoptica, data);
	}

	@Delete(':idoptica')
	remove(@Param('idoptica', ParseIntPipe) idoptica: number) {
		return this.opticoService.remove(idoptica);
	}
}
