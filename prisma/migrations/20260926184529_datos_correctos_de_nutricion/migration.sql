-- AlterTable
ALTER TABLE `Nutricion` ADD COLUMN `calificacion` TEXT NULL,
    ADD COLUMN `imcParaEdad` TEXT NULL,
    ADD COLUMN `perimetroCefalico` DECIMAL(5, 2) NULL,
    ADD COLUMN `perimetroParaEdad` TEXT NULL,
    ADD COLUMN `pesoParaEdad` TEXT NULL,
    ADD COLUMN `pesoParaTalla` TEXT NULL,
    ADD COLUMN `tallaParaEdad` TEXT NULL;

-- AddForeignKey
ALTER TABLE `Seccion` ADD CONSTRAINT `Seccion_idgrado_fkey` FOREIGN KEY (`idgrado`) REFERENCES `Grado`(`idgrado`) ON DELETE RESTRICT ON UPDATE CASCADE;
