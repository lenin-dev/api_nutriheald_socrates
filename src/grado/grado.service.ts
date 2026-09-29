import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AgregarGradoDto } from './dto/agregar.grado.dto.js';
import { EditarGradoDto } from './dto/editar.grado.dto.js';

@Injectable()
export class GradoService {
	constructor(private readonly prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.grado.findMany({
			include: { secciones: false },
		});
	}

	findOne(idgrado: number) {
		return this.prismaService.grado.findUnique({
			where: { idgrado },
			include: { secciones: false },
		});
	}

	create(data: AgregarGradoDto) {
		return this.prismaService.grado.create({
			data: {
				nombre: data.nombre,
				descripcion: data.descripcion,
			},
			include: { secciones: true },
		});
	}

	update(idgrado: number, data: EditarGradoDto) {
		return this.prismaService.grado.update({
			where: { idgrado },
			data,
			include: { secciones: true },
		});
	}

	remove(idgrado: number) {
		return this.prismaService.grado.delete({
			where: { idgrado },
		});
	}
}
