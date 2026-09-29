import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { AllExceptionsFilter } from './common/filters/catch.error.filtro.js';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cors from 'cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const corsOrigins = process.env.CORS_ORIGINS?.split(',').map((origin) => origin.trim()).filter(Boolean);
    app.use(cors({ origin: corsOrigins?.length ? corsOrigins : '*' }));
    app.setGlobalPrefix('api/v1');

    app.use(morgan('combined')); // <-- LOGS DE PETICIONES HTTP
    app.useGlobalFilters(new AllExceptionsFilter()); // <-- CAPTURA ERRORES GLOBALES
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // <-- CAMPOS OBLIGATORIOS DEFINOS EN LOS DTOs
    })); // <-- VALIDADOR DE DATOS DE LOS DTOs

    // swagger
    const config = new DocumentBuilder()
        .setTitle('Documentación api Nutri Healdth Socrates')
        // .setDescription('The cats API description')
        .setVersion('1.0')
        // .addBearerAuth() // importante si usas JWT/JWE, agrega el botón "Authorize"
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentacion', app, documentFactory);

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
