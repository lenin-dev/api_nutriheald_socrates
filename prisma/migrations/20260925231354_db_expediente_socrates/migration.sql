-- CreateTable
CREATE TABLE `Grado` (
    `idgrado` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(255) NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Grado_nombre_key`(`nombre`),
    PRIMARY KEY (`idgrado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seccion` (
    `idseccion` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `idgrado` INTEGER NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,

    INDEX `Seccion_idgrado_idx`(`idgrado`),
    UNIQUE INDEX `Seccion_nombre_idgrado_key`(`nombre`, `idgrado`),
    PRIMARY KEY (`idseccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alumno` (
    `idalumno` INTEGER NOT NULL AUTO_INCREMENT,
    `matricula` VARCHAR(30) NOT NULL,
    `nombres` VARCHAR(100) NOT NULL,
    `apellidoPaterno` VARCHAR(100) NOT NULL,
    `apellidoMaterno` VARCHAR(100) NULL,
    `fechaNacimiento` DATE NULL,
    `sexo` VARCHAR(20) NULL,
    `telefono` VARCHAR(20) NULL,
    `idseccion` INTEGER NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Alumno_matricula_key`(`matricula`),
    INDEX `Alumno_idseccion_idx`(`idseccion`),
    PRIMARY KEY (`idalumno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Expediente` (
    `idexpediente` INTEGER NOT NULL AUTO_INCREMENT,
    `idalumno` INTEGER NOT NULL,
    `observaciones` TEXT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Expediente_idalumno_key`(`idalumno`),
    PRIMARY KEY (`idexpediente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medica` (
    `idmedica` INTEGER NOT NULL AUTO_INCREMENT,
    `idexpediente` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `motivo` VARCHAR(255) NULL,
    `diagnostico` TEXT NULL,
    `tratamiento` TEXT NULL,
    `alergias` TEXT NULL,
    `antecedentes` TEXT NULL,
    `observaciones` TEXT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,

    INDEX `Medica_idexpediente_fecha_idx`(`idexpediente`, `fecha`),
    PRIMARY KEY (`idmedica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nutricion` (
    `idnutricion` INTEGER NOT NULL AUTO_INCREMENT,
    `idexpediente` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `peso` DECIMAL(5, 2) NULL,
    `talla` DECIMAL(5, 2) NULL,
    `imc` DECIMAL(5, 2) NULL,
    `diagnostico` TEXT NULL,
    `recomendaciones` TEXT NULL,
    `observaciones` TEXT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,

    INDEX `Nutricion_idexpediente_fecha_idx`(`idexpediente`, `fecha`),
    PRIMARY KEY (`idnutricion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Optica` (
    `idoptica` INTEGER NOT NULL AUTO_INCREMENT,
    `idexpediente` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `agudezaVisualDerecha` VARCHAR(50) NULL,
    `agudezaVisualIzquierda` VARCHAR(50) NULL,
    `esferaDerecha` DECIMAL(5, 2) NULL,
    `cilindroDerecha` DECIMAL(5, 2) NULL,
    `ejeDerecha` INTEGER NULL,
    `esferaIzquierda` DECIMAL(5, 2) NULL,
    `cilindroIzquierda` DECIMAL(5, 2) NULL,
    `ejeIzquierda` INTEGER NULL,
    `usaLentes` BOOLEAN NULL,
    `diagnostico` TEXT NULL,
    `recomendaciones` TEXT NULL,
    `observaciones` TEXT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,

    INDEX `Optica_idexpediente_fecha_idx`(`idexpediente`, `fecha`),
    PRIMARY KEY (`idoptica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Seccion` ADD CONSTRAINT `Seccion_idgrado_fkey` FOREIGN KEY (`idgrado`) REFERENCES `Grado`(`idgrado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alumno` ADD CONSTRAINT `Alumno_idseccion_fkey` FOREIGN KEY (`idseccion`) REFERENCES `Seccion`(`idseccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expediente` ADD CONSTRAINT `Expediente_idalumno_fkey` FOREIGN KEY (`idalumno`) REFERENCES `Alumno`(`idalumno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medica` ADD CONSTRAINT `Medica_idexpediente_fkey` FOREIGN KEY (`idexpediente`) REFERENCES `Expediente`(`idexpediente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nutricion` ADD CONSTRAINT `Nutricion_idexpediente_fkey` FOREIGN KEY (`idexpediente`) REFERENCES `Expediente`(`idexpediente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Optica` ADD CONSTRAINT `Optica_idexpediente_fkey` FOREIGN KEY (`idexpediente`) REFERENCES `Expediente`(`idexpediente`) ON DELETE RESTRICT ON UPDATE CASCADE;
