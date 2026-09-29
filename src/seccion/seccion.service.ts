import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AgregarSeccionDto } from './dto/agregar.seccion.dto.js';
import { EditarSeccionDto } from './dto/editar.seccion.dto.js';

@Injectable()
export class SeccionService {
	constructor(private readonly prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.seccion.findMany({
			include: { grado: true },
		});
	}

	findOne(idseccion: number) {
		return this.prismaService.seccion.findUnique({
			where: { idseccion },
			include: { grado: true },
		});
	}

	create(data: AgregarSeccionDto) {
		return this.prismaService.seccion.create({
			data: {
				nombre: data.nombre,
				idgrado: data.idgrado,
			},
			include: { grado: true },
		});
	}

	update(idseccion: number, data: EditarSeccionDto) {
		return this.prismaService.seccion.update({
			where: { idseccion },
			data,
			include: { grado: true },
		});
	}

	remove(idseccion: number) {
		return this.prismaService.seccion.delete({
			where: { idseccion },
		});
	}
}
