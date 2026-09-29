/*
  Warnings:

  - You are about to drop the column `apellidoMaterno` on the `Alumno` table. All the data in the column will be lost.
  - You are about to drop the column `apellidoPaterno` on the `Alumno` table. All the data in the column will be lost.
  - You are about to alter the column `telefono` on the `Alumno` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `VarChar(10)`.
  - You are about to drop the column `alergias` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `antecedentes` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `diagnostico` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `motivo` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `tratamiento` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `diagnostico` on the `Nutricion` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Nutricion` table. All the data in the column will be lost.
  - You are about to drop the column `agudezaVisualDerecha` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `agudezaVisualIzquierda` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `cilindroDerecha` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `cilindroIzquierda` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `diagnostico` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `ejeDerecha` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `ejeIzquierda` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `esferaDerecha` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `esferaIzquierda` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `recomendaciones` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `usaLentes` on the `Optica` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idgrado]` on the table `Seccion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellidos` to the `Alumno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Medica` DROP FOREIGN KEY `Medica_idexpediente_fkey`;

-- DropForeignKey
ALTER TABLE `Nutricion` DROP FOREIGN KEY `Nutricion_idexpediente_fkey`;

-- DropForeignKey
ALTER TABLE `Optica` DROP FOREIGN KEY `Optica_idexpediente_fkey`;

-- DropIndex
DROP INDEX `Medica_idexpediente_fecha_idx` ON `Medica`;

-- DropIndex
DROP INDEX `Nutricion_idexpediente_fecha_idx` ON `Nutricion`;

-- DropIndex
DROP INDEX `Optica_idexpediente_fecha_idx` ON `Optica`;

-- DropIndex
DROP INDEX `Seccion_nombre_idgrado_key` ON `Seccion`;

-- AlterTable
ALTER TABLE `Alumno` DROP COLUMN `apellidoMaterno`,
    DROP COLUMN `apellidoPaterno`,
    ADD COLUMN `apellidos` VARCHAR(100) NOT NULL,
    ADD COLUMN `edad` INTEGER NULL,
    MODIFY `telefono` VARCHAR(10) NULL;

-- AlterTable
ALTER TABLE `Medica` DROP COLUMN `alergias`,
    DROP COLUMN `antecedentes`,
    DROP COLUMN `diagnostico`,
    DROP COLUMN `fecha`,
    DROP COLUMN `motivo`,
    DROP COLUMN `tratamiento`,
    ADD COLUMN `FC` VARCHAR(20) NULL,
    ADD COLUMN `Fr` VARCHAR(20) NULL,
    ADD COLUMN `Po2` VARCHAR(20) NULL,
    ADD COLUMN `TA` VARCHAR(20) NULL,
    ADD COLUMN `TC` VARCHAR(20) NULL,
    ADD COLUMN `oidoColoracion` BOOLEAN NULL,
    ADD COLUMN `oidoSimetrico` BOOLEAN NULL,
    ADD COLUMN `recomendaciones` TEXT NULL;

-- AlterTable
ALTER TABLE `Nutricion` DROP COLUMN `diagnostico`,
    DROP COLUMN `fecha`;

-- AlterTable
ALTER TABLE `Optica` DROP COLUMN `agudezaVisualDerecha`,
    DROP COLUMN `agudezaVisualIzquierda`,
    DROP COLUMN `cilindroDerecha`,
    DROP COLUMN `cilindroIzquierda`,
    DROP COLUMN `diagnostico`,
    DROP COLUMN `ejeDerecha`,
    DROP COLUMN `ejeIzquierda`,
    DROP COLUMN `esferaDerecha`,
    DROP COLUMN `esferaIzquierda`,
    DROP COLUMN `fecha`,
    DROP COLUMN `recomendaciones`,
    DROP COLUMN `usaLentes`,
    ADD COLUMN `AO` VARCHAR(100) NULL,
    ADD COLUMN `OD` VARCHAR(100) NULL,
    ADD COLUMN `OI` VARCHAR(100) NULL,
    ADD COLUMN `optometrista` VARCHAR(150) NULL;

-- CreateIndex
CREATE INDEX `Medica_idexpediente_creadoEn_idx` ON `Medica`(`idexpediente`, `creadoEn`);

-- CreateIndex
CREATE INDEX `Nutricion_idexpediente_creadoEn_idx` ON `Nutricion`(`idexpediente`, `creadoEn`);

-- CreateIndex
CREATE INDEX `Optica_idexpediente_creadoEn_idx` ON `Optica`(`idexpediente`, `creadoEn`);

-- CreateIndex
CREATE UNIQUE INDEX `Seccion_idgrado_key` ON `Seccion`(`idgrado`);
