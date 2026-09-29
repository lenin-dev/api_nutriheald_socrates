import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { AgregarMedicaDto } from './dto/agregar.medica.dto.js';
import { EditarMedicaDto } from './dto/editar.medica.dto.js';

@Injectable()
export class MedicaService {
	constructor(private readonly prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.medica.findMany({
			include: { expediente: true },
		});
	}

	findOne(idmedica: number) {
		return this.prismaService.medica.findUnique({
			where: { idmedica },
			include: { expediente: true },
		});
	}

	create(data: AgregarMedicaDto) {
		return this.prismaService.medica.create({
			data,
			include: { expediente: true },
		});
	}

	update(idmedica: number, data: EditarMedicaDto) {
		return this.prismaService.medica.update({
			where: { idmedica },
			data,
			include: { expediente: true },
		});
	}

	remove(idmedica: number) {
		return this.prismaService.medica.delete({
			where: { idmedica },
		});
	}
}
