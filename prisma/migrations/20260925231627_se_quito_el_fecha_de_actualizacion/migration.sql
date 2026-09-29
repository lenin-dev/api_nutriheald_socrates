/*
  Warnings:

  - You are about to drop the column `actualizadoEn` on the `Expediente` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `Grado` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `Medica` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `Nutricion` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `Optica` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `Seccion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Alumno` ADD COLUMN `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Expediente` DROP COLUMN `actualizadoEn`;

-- AlterTable
ALTER TABLE `Grado` DROP COLUMN `actualizadoEn`;

-- AlterTable
ALTER TABLE `Medica` DROP COLUMN `actualizadoEn`;

-- AlterTable
ALTER TABLE `Nutricion` DROP COLUMN `actualizadoEn`;

-- AlterTable
ALTER TABLE `Optica` DROP COLUMN `actualizadoEn`;

-- AlterTable
ALTER TABLE `Seccion` DROP COLUMN `actualizadoEn`;
