/*
  Warnings:

  - The primary key for the `device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `device` table. All the data in the column will be lost.
  - You are about to drop the column `deviceId` on the `readings` table. All the data in the column will be lost.
  - Added the required column `reference` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `Readings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `readings` DROP FOREIGN KEY `Readings_deviceId_fkey`;

-- DropIndex
DROP INDEX `Readings_deviceId_fkey` ON `readings`;

-- AlterTable
ALTER TABLE `device` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `reference` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`reference`);

-- AlterTable
ALTER TABLE `readings` DROP COLUMN `deviceId`,
    ADD COLUMN `reference` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Readings` ADD CONSTRAINT `Readings_reference_fkey` FOREIGN KEY (`reference`) REFERENCES `Device`(`reference`) ON DELETE RESTRICT ON UPDATE CASCADE;
