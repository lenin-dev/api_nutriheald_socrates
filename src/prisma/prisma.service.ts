import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';
import { alumnos } from './pre_alumnos.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    static PrismaClientKnownRequestError: unknown;

    constructor() {
        const adapter = new PrismaMariaDb({
            host: process.env.HOSTDB,
            user: process.env.USERDB,
            password: process.env.PASSWORDDB,
            database: process.env.DATABASEDB,
            port: Number(process.env.PORTDB),
        });

        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
        await this.seedInitialData();
    }

    private async seedInitialData() {
        const gradosBase = [
            { nombre: '1', descripcion: 'Primer grado' },
            { nombre: '2', descripcion: 'Segundo grado' },
            { nombre: '3', descripcion: 'Tercer grado' },
        ];
        const grados = new Map<string, number>();

        for (const datosGrado of gradosBase) {
            const grado = await this.grado.upsert({
                where: { nombre: datosGrado.nombre },
                update: {},
                create: datosGrado,
            });
            grados.set(grado.nombre, grado.idgrado);
        }

        const seccionesBase = [
            { nombre: 'Preescolar 1', grado: '1' },
            { nombre: 'Preescolar 2', grado: '2' },
            { nombre: 'Preescolar 3', grado: '3' },
            { nombre: 'Primaria 1', grado: '1' },
            { nombre: 'Primaria 2', grado: '2' },
            { nombre: 'Primaria 3', grado: '3' },
            { nombre: 'Secundaria 1', grado: '1' },
            { nombre: 'Secundaria 2', grado: '2' },
            { nombre: 'Secundaria 3', grado: '3' },
            { nombre: 'Preparatoria 1', grado: '1' },
            { nombre: 'Preparatoria 2', grado: '2' },
            { nombre: 'Preparatoria 3', grado: '3' },
        ];

        for (const datosSeccion of seccionesBase) {
            const idgrado = grados.get(datosSeccion.grado);
            if (idgrado === undefined) continue;

            const seccionExistente = await this.seccion.findFirst({
                where: { nombre: datosSeccion.nombre, idgrado },
                select: { idseccion: true },
            });

            if (!seccionExistente) {
                await this.seccion.create({
                    data: { nombre: datosSeccion.nombre, idgrado },
                });
            }
        }
    }

}
