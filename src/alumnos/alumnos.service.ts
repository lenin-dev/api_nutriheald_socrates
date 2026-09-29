import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AgregarAlumnoDto } from './dto/agregar.alumno.dto.js';
import { EditarAlumnoDto } from './dto/editar.alumno.dto.js';

interface FiltrosAlumnos {
    nombreGrado?: string;
    nombreSeccion?: string;
}

@Injectable()
export class AlumnosService {

    constructor(private readonly prismaService: PrismaService) {}

    async getAllAlumnos(filtros: FiltrosAlumnos = {}) {
        const nombreGrado = filtros.nombreGrado?.trim();
        const nombreSeccion = filtros.nombreSeccion?.trim();

        const result = await this.prismaService.alumno.findMany({
            where: {
                ...((nombreGrado || nombreSeccion) && {
                    seccion: {
                        ...(nombreSeccion && { nombre: { contains: nombreSeccion } }),
                        ...(nombreGrado && {
                            grado: {
                                nombre: { contains: nombreGrado },
                            },
                        }),
                    },
                }),
            },
            include: {
                seccion: {
                    include: {
                        grado: true,
                    },
                },
                expediente: true
            },
        });

        return result;
    }

    async addAlumnos(data: AgregarAlumnoDto) {
        const { fechaNacimiento, ...alumnoData } = data;

        return this.prismaService.alumno.create({
            data: {
                ...alumnoData,
                ...(fechaNacimiento !== undefined && {
                    fechaNacimiento:
                        fechaNacimiento === null ? null : new Date(fechaNacimiento),
                }),
            },
            include: {
                seccion: {
                    include: {
                        grado: true,
                    },
                },
            },
        });
    }

    async editAlumnos(idalumno: number, data: EditarAlumnoDto) {
        const { fechaNacimiento, ...alumnoData } = data;

        return this.prismaService.alumno.update({
            where: { idalumno },
            data: {
                ...alumnoData,
                ...(fechaNacimiento !== undefined && {
                    fechaNacimiento:
                        fechaNacimiento === null ? null : new Date(fechaNacimiento),
                }),
            },
            include: {
                seccion: {
                    include: {
                        grado: true,
                    },
                },
            },
        });
    }

    async deleteAlumnos(idalumno: number) {
        return this.prismaService.alumno.delete({
            where: { idalumno },
        });
    }

}
