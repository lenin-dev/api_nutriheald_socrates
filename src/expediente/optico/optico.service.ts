import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { AgregarOpticaDto } from './dto/agregar.optica.dto.js';
import { EditarOpticaDto } from './dto/editar.optica.dto.js';

@Injectable()
export class OpticoService {
	constructor(private readonly prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.optica.findMany({
			include: { expediente: true },
		});
	}

	findOne(idoptica: number) {
		return this.prismaService.optica.findUnique({
			where: { idoptica },
			include: { expediente: true },
		});
	}

	create(data: AgregarOpticaDto) {
		return this.prismaService.optica.create({
			data,
			include: { expediente: true },
		});
	}

	update(idoptica: number, data: EditarOpticaDto) {
		return this.prismaService.optica.update({
			where: { idoptica },
			data,
			include: { expediente: true },
		});
	}

	remove(idoptica: number) {
		return this.prismaService.optica.delete({
			where: { idoptica },
		});
	}
}
