import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgregarGradoDto } from './dto/agregar.grado.dto.js';
import { EditarGradoDto } from './dto/editar.grado.dto.js';
import { GradoService } from './grado.service.js';

@Controller('grado')
@ApiTags('Grados')
export class GradoController {
	constructor(private readonly gradoService: GradoService) {}

	@Get()
	findAll() {
		return this.gradoService.findAll();
	}

	@Get(':idgrado')
	findOne(@Param('idgrado', ParseIntPipe) idgrado: number) {
		return this.gradoService.findOne(idgrado);
	}

	@Post()
	create(@Body() data: AgregarGradoDto) {
		return this.gradoService.create(data);
	}

	@Put(':idgrado')
	update(
		@Param('idgrado', ParseIntPipe) idgrado: number,
		@Body() data: EditarGradoDto,
	) {
		return this.gradoService.update(idgrado, data);
	}

	@Delete(':idgrado')
	remove(@Param('idgrado', ParseIntPipe) idgrado: number) {
		return this.gradoService.remove(idgrado);
	}
}
