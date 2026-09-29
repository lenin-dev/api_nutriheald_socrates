# API Nutri Health Socrates

API REST para administrar alumnos, grados, secciones y expedientes de salud escolar. Está construida con NestJS, TypeScript, Prisma ORM 7 y MySQL/MariaDB.

## Requisitos

- Node.js 20 o superior y npm.
- MySQL o MariaDB accesible desde la aplicación.

## Configuración

Instala dependencias:

```bash
npm install
```

Crea un archivo `.env` en la raíz del proyecto. Nest y Prisma CLI usan variables distintas: la conexión de runtime usa las variables `*DB`; Prisma CLI lee `DATABASE_URL` desde `prisma7.config.ts`.

```dotenv
HOSTDB=127.0.0.1
USERDB=usuario_mysql
PASSWORDDB=contrasena_mysql
DATABASEDB=api_nutriheald_socrates
PORTDB=3306

DATABASE_URL="mysql://usuario_mysql:contrasena_mysql@127.0.0.1:3306/api_nutriheald_socrates"
PORT=3000
CORS_ORIGINS=http://localhost:4200,https://mi-frontend.com
```

Usa los mismos datos de conexión en ambas configuraciones. Codifica los caracteres especiales de la contraseña para URL en `DATABASE_URL`.
`CORS_ORIGINS` acepta una lista de orígenes separados por comas. Si no se define, se permiten todos los orígenes.

## Base de datos

El esquema Prisma está en `prisma/schema.prisma` y las migraciones en `prisma/migrations/`. Genera el cliente y aplica migraciones de desarrollo:

```bash
npm run prisma:generate
npm run prisma:build
```

`prisma:build` ejecuta `prisma migrate dev`. Para desplegar migraciones existentes:

```bash
npm run prisma:prod
```

`prisma:prod` ejecuta `prisma migrate deploy`.

## Ejecutar

```bash
npm run start:dev  # Desarrollo con recarga
npm run start      # Inicio normal
npm run build      # Compilar
npm run start:prod # Producción después de compilar
```

La aplicación escucha en `PORT` o, si no está definido, en `3000`. Todas las rutas REST usan el prefijo `/api/v1`. Swagger está disponible en `/documentacion` (por defecto, `http://localhost:3000/documentacion`).

## Ejecutar con Docker

Copia `.env.example` a `.env` y cambia las contraseñas antes de desplegar. Usa un usuario de aplicación distinto de `root`. Compose construye la URL interna de Prisma con ese usuario y el hostname `db`; la variable `DATABASE_URL` del `.env` queda para ejecutar Prisma desde el equipo anfitrión. Si la contraseña contiene caracteres especiales, codifícala para URL en `DATABASE_URL`.

Construye e inicia la API y MariaDB:

```bash
docker compose up --build -d
```

Compose espera a que MariaDB esté disponible y la API aplica las migraciones con `prisma migrate deploy` antes de iniciar. La base persiste en el volumen `mariadb_data`. La documentación queda en `http://localhost:3000/documentacion` (o en el puerto definido en `PORT`). Para detener los servicios sin borrar los datos, ejecuta `docker compose down`.

MariaDB queda disponible desde el equipo anfitrión en `127.0.0.1:3307`; puedes cambiar ese puerto con `DB_HOST_PORT`. Entre los contenedores, la API sigue usando `db:3306`.

## Modelo de datos

- **Grado** tiene un nombre único, descripción opcional y varias secciones.
- **Sección** pertenece a un grado y puede tener varios alumnos.
- **Alumno** pertenece a una sección; su matrícula es única y puede tener un expediente.
- **Expediente** pertenece a un único alumno y puede contener observaciones y múltiples evaluaciones médicas, nutricionales y ópticas.
- **Médica**, **Nutrición** y **Óptica** pertenecen a un expediente.

Los IDs y `creadoEn` se generan en la base de datos. Flujo habitual: crear grado, sección (`idgrado`), alumno (`idseccion`), expediente (`idalumno`) y evaluaciones (`idexpediente`).

## Endpoints

Todos los endpoints llevan el prefijo `/api/v1`. Los parámetros `:id...` deben ser enteros.

| Recurso | Métodos y rutas |
| --- | --- |
| Alumnos | `GET /alumnos` (filtros opcionales `nombreGrado`, `nombreSeccion`), `POST /alumnos`, `PUT /alumnos/:idalumno`, `DELETE /alumnos/:idalumno` |
| Grados | `GET /grado`, `GET /grado/:idgrado`, `POST /grado`, `PUT /grado/:idgrado`, `DELETE /grado/:idgrado` |
| Secciones | `GET /seccion`, `GET /seccion/:idseccion`, `POST /seccion`, `PUT /seccion/:idseccion`, `DELETE /seccion/:idseccion` |
| Expedientes | `GET /alumnos/expediente`, `GET /alumnos/expediente/:idexpediente`, `POST /alumnos/expediente`, `PUT /alumnos/expediente/:idexpediente`, `DELETE /alumnos/expediente/:idexpediente` |
| Médica | `GET /alumnos/expediente/medica`, `GET /alumnos/expediente/medica/:idmedica`, `POST /alumnos/expediente/medica`, `PUT /alumnos/expediente/medica/:idmedica`, `DELETE /alumnos/expediente/medica/:idmedica` |
| Nutrición | `GET /alumnos/expediente/nutricion`, `POST /alumnos/expediente/nutricion`, `PUT /alumnos/expediente/nutricion/:idnutricion`, `DELETE /alumnos/expediente/nutricion/:idnutricion` |
| Óptica | `GET /alumnos/expediente/optico`, `GET /alumnos/expediente/optico/:idoptica`, `POST /alumnos/expediente/optico`, `PUT /alumnos/expediente/optico/:idoptica`, `DELETE /alumnos/expediente/optico/:idoptica` |

Los endpoints de edición usan DTOs parciales: envía solo los campos que quieras cambiar. Los endpoints GET de expediente incluyen sus relaciones; los registros asociados incluyen su expediente.

### Campos de creación

- **Alumno:** `matricula`, `nombres`, `apellidos`, `idseccion`; opcionales `fechaNacimiento` (ISO `YYYY-MM-DD`), `sexo`, `edad`, `telefono`, `activo`.
- **Grado:** `nombre`; opcional `descripcion`.
- **Sección:** `nombre`, `idgrado`.
- **Expediente:** `idalumno`; opcional `observaciones`.
- **Médica:** `idexpediente`; opcionales `TA`, `TC`, `Fr`, `FC`, `Po2`, `oidoSimetrico`, `oidoColoracion`, `recomendaciones`, `observaciones`.
- **Nutrición:** `idexpediente`; opcionales `peso`, `talla`, `imc`, `perimetroCefalico`, `imcParaEdad`, `pesoParaEdad`, `tallaParaEdad`, `pesoParaTalla`, `perimetroParaEdad`, `calificacion`, `recomendaciones`, `observaciones`.
- **Óptica:** `idexpediente`; opcionales `OD`, `OI`, `AO`, `observaciones`, `optometrista`.

Ejemplo de alta de alumno (el grado y la sección deben existir previamente):

```bash
curl -X POST http://localhost:3000/api/v1/alumnos \
  -H 'Content-Type: application/json' \
  -d '{
    "matricula": "ALU-2026-001",
    "nombres": "Juan Carlos",
    "apellidos": "Pérez López",
    "fechaNacimiento": "2015-06-20",
    "idseccion": 1
  }'
```

## Validación y errores

Los cuerpos se validan con DTOs mediante `ValidationPipe` y `whitelist`; los campos no declarados en el DTO se descartan. La respuesta de error incluye `statusCode`, `timestamp`, `path` y `message`.

- `400`: validación, consulta inválida, duplicado o relación inexistente.
- `404`: registro solicitado no encontrado.
- `503`: no se pudo inicializar la conexión a la base de datos.
- El borrado puede fallar cuando el registro tiene dependencias protegidas por claves foráneas.

## Pruebas y utilidades

```bash
npm run test       # Pruebas unitarias
npm run test:e2e   # Pruebas end-to-end
npm run test:cov   # Cobertura
npm run lint       # ESLint (incluye --fix)
npm run format     # Prettier sobre src y test
```