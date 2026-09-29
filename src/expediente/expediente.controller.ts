import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgregarExpedienteDto } from './dto/agregar.expediente.dto.js';
import { EditarExpedienteDto } from './dto/editar.expediente.dto.js';
import { ExpedienteService } from './expediente.service.js';

@Controller('alumnos/expediente')
@ApiTags('Alumnos')
export class ExpedienteController {
	constructor(private readonly expedienteService: ExpedienteService) {}

	@Get()
	findAll() {
		return this.expedienteService.findAll();
	}

	@Get(':idexpediente')
	findOne(@Param('idexpediente', ParseIntPipe) idexpediente: number) {
		return this.expedienteService.findOne(idexpediente);
	}

	@Put(':idexpediente')
	update(
		@Param('idexpediente', ParseIntPipe) idexpediente: number,
		@Body() data: EditarExpedienteDto,
	) {
		return this.expedienteService.update(idexpediente, data);
	}

}
