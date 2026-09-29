import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Res } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AlumnosService } from './alumnos.service.js';
import type { Response } from 'express';
import { AgregarAlumnoDto } from './dto/agregar.alumno.dto.js';
import { EditarAlumnoDto } from './dto/editar.alumno.dto.js';

@Controller('alumnos')
@ApiTags('Alumnos')
export class AlumnosController {

    constructor(private readonly alumnosService: AlumnosService, ) {}

    @Get()
    @ApiQuery({ name: 'nombreGrado', required: false, type: String })
    @ApiQuery({ name: 'nombreSeccion', required: false, type: String })
    async getAllUsuarios(@Query('nombreGrado') nombreGrado: string | undefined, @Query('nombreSeccion') nombreSeccion: string | undefined, @Res() res: Response) {
        const usuarios = await this.alumnosService.getAllAlumnos(
            {
                nombreGrado,
                nombreSeccion,
            },
        );
        res.json(usuarios);
    }

    @Post()
    async createUsuario(@Body() body: AgregarAlumnoDto, @Res() res: Response) {
        const usuario = await this.alumnosService.addAlumnos(body);
        res.json({
            message: "Usuario creado correctamente",
            data: usuario
        });
    }

    @Put(':idalumno')
    async editAlumno(@Param('idalumno', ParseIntPipe) idalumno: number, @Body() body: EditarAlumnoDto, @Res() res: Response) {
        const alumno = await this.alumnosService.editAlumnos(idalumno, body);
        res.json({
            message: 'Alumno actualizado correctamente',
            data: alumno,
        });
    }

    @Delete(':idalumno')
    async deleteAlumno(@Param('idalumno', ParseIntPipe) idalumno: number, @Res() res: Response) {
        const alumno = await this.alumnosService.deleteAlumnos(idalumno);
        res.json({
            message: 'Alumno eliminado correctamente',
            data: alumno,
        });
    }

}
