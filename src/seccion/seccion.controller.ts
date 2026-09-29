import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgregarSeccionDto } from './dto/agregar.seccion.dto.js';
import { EditarSeccionDto } from './dto/editar.seccion.dto.js';
import { SeccionService } from './seccion.service.js';

@Controller('seccion')
@ApiTags('Secciones')
export class SeccionController {
	constructor(private readonly seccionService: SeccionService) {}

	@Get()
	findAll() {
		return this.seccionService.findAll();
	}

	@Get(':idseccion')
	findOne(@Param('idseccion', ParseIntPipe) idseccion: number) {
		return this.seccionService.findOne(idseccion);
	}

	@Post()
	create(@Body() data: AgregarSeccionDto) {
		return this.seccionService.create(data);
	}

	@Put(':idseccion')
	update(
		@Param('idseccion', ParseIntPipe) idseccion: number,
		@Body() data: EditarSeccionDto,
	) {
		return this.seccionService.update(idseccion, data);
	}

	@Delete(':idseccion')
	remove(@Param('idseccion', ParseIntPipe) idseccion: number) {
		return this.seccionService.remove(idseccion);
	}
}
