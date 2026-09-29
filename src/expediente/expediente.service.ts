import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AgregarExpedienteDto } from './dto/agregar.expediente.dto.js';
import { EditarExpedienteDto } from './dto/editar.expediente.dto.js';

@Injectable()
export class ExpedienteService {
	constructor(private readonly prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.expediente.findMany({
			include: {
				alumno: {
					include: {
						seccion: {
							include: { grado: true },
						},
					},
				},
				medicas: true,
				nutriciones: true,
				opticas: true,
			},
		});
	}

	findOne(idexpediente: number) {
		return this.prismaService.expediente.findUnique({
			where: { idexpediente },
			include: {
				alumno: {
					include: {
						seccion: {
							include: { grado: true },
						},
					},
				},
				medicas: true,
				nutriciones: true,
				opticas: true,
			},
		});
	}

	create(data: AgregarExpedienteDto) {
		return this.prismaService.expediente.create({
			data,
			include: {
				alumno: true,
			},
		});
	}

	update(idexpediente: number, data: EditarExpedienteDto) {
		return this.prismaService.expediente.update({
			where: { idexpediente },
			data,
			include: {
				alumno: true,
				medicas: true,
				nutriciones: true,
				opticas: true,
			},
		});
	}

	remove(idexpediente: number) {
		return this.prismaService.expediente.delete({
			where: { idexpediente },
		});
	}
}
