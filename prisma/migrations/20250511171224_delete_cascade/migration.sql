-- DropForeignKey
ALTER TABLE `readings` DROP FOREIGN KEY `Readings_reference_fkey`;

-- DropIndex
DROP INDEX `Readings_reference_fkey` ON `readings`;

-- AddForeignKey
ALTER TABLE `Readings` ADD CONSTRAINT `Readings_reference_fkey` FOREIGN KEY (`reference`) REFERENCES `Device`(`reference`) ON DELETE CASCADE ON UPDATE CASCADE;
