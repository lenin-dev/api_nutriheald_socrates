import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { AgregarNutricionDto } from './dto/agregar.nutricion.dto.js';
import { EditarNutricionDto } from './dto/editar.nutricion.dto.js';

@Injectable()
export class NutricionService {
	constructor(private readonly prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.nutricion.findMany({
			include: { expediente: true },
		});
	}

	create(data: AgregarNutricionDto) {
		return this.prismaService.nutricion.create({
			data,
			include: { expediente: true },
		});
	}

	update(idnutricion: number, data: EditarNutricionDto) {
		return this.prismaService.nutricion.update({
			where: { idnutricion },
			data,
			include: { expediente: true },
		});
	}

	remove(idnutricion: number) {
		return this.prismaService.nutricion.delete({
			where: { idnutricion },
		});
	}
}
