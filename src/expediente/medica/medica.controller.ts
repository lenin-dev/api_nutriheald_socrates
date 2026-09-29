import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgregarMedicaDto } from './dto/agregar.medica.dto.js';
import { EditarMedicaDto } from './dto/editar.medica.dto.js';
import { MedicaService } from './medica.service.js';

@Controller('alumnos/expediente/medica')
@ApiTags('Alumnos')
export class MedicaController {
	constructor(private readonly medicaService: MedicaService) {}

	@Get()
	findAll() {
		return this.medicaService.findAll();
	}

	@Get(':idmedica')
	findOne(@Param('idmedica', ParseIntPipe) idmedica: number) {
		return this.medicaService.findOne(idmedica);
	}

	@Post()
	create(@Body() data: AgregarMedicaDto) {
		return this.medicaService.create(data);
	}

	@Put(':idmedica')
	update(
		@Param('idmedica', ParseIntPipe) idmedica: number,
		@Body() data: EditarMedicaDto,
	) {
		return this.medicaService.update(idmedica, data);
	}

	@Delete(':idmedica')
	remove(@Param('idmedica', ParseIntPipe) idmedica: number) {
		return this.medicaService.remove(idmedica);
	}
}
