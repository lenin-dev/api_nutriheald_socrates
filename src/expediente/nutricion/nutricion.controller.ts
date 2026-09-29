import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgregarNutricionDto } from './dto/agregar.nutricion.dto.js';
import { EditarNutricionDto } from './dto/editar.nutricion.dto.js';
import { NutricionService } from './nutricion.service.js';

@Controller('alumnos/expediente/nutricion')
@ApiTags('Alumnos')
export class NutricionController {
	constructor(private readonly nutricionService: NutricionService) {}

	@Get()
	findAll() {
		return this.nutricionService.findAll();
	}

	@Post()
	create(@Body() data: AgregarNutricionDto) {
		return this.nutricionService.create(data);
	}

	@Put(':idnutricion')
	update(
		@Param('idnutricion', ParseIntPipe) idnutricion: number,
		@Body() data: EditarNutricionDto,
	) {
		return this.nutricionService.update(idnutricion, data);
	}

	@Delete(':idnutricion')
	remove(@Param('idnutricion', ParseIntPipe) idnutricion: number) {
		return this.nutricionService.remove(idnutricion);
	}
}
