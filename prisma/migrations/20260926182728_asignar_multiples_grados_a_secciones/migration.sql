-- DropForeignKey
ALTER TABLE `Seccion` DROP FOREIGN KEY `Seccion_idgrado_fkey`;

-- DropIndex
DROP INDEX `Seccion_idgrado_key` ON `Seccion`;

-- AddForeignKey
ALTER TABLE `Medica` ADD CONSTRAINT `Medica_idexpediente_fkey` FOREIGN KEY (`idexpediente`) REFERENCES `Expediente`(`idexpediente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nutricion` ADD CONSTRAINT `Nutricion_idexpediente_fkey` FOREIGN KEY (`idexpediente`) REFERENCES `Expediente`(`idexpediente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Optica` ADD CONSTRAINT `Optica_idexpediente_fkey` FOREIGN KEY (`idexpediente`) REFERENCES `Expediente`(`idexpediente`) ON DELETE RESTRICT ON UPDATE CASCADE;
