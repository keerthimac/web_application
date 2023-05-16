/*
  Warnings:

  - You are about to drop the column `plumFittingTypeId` on the `plumfittinginfo` table. All the data in the column will be lost.
  - You are about to drop the column `plumPipeTypeId` on the `plumpipeinfo` table. All the data in the column will be lost.
  - You are about to drop the `plumfittingtype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumpipetype` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `plumTypeId` to the `PlumFittingInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plumTypeId` to the `PlumPipeInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plumfittinginfo` DROP FOREIGN KEY `PlumFittingInfo_plumFittingTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeinfo` DROP FOREIGN KEY `PlumPipeInfo_plumPipeTypeId_fkey`;

-- AlterTable
ALTER TABLE `plumfittinginfo` DROP COLUMN `plumFittingTypeId`,
    ADD COLUMN `plumTypeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plumpipeinfo` DROP COLUMN `plumPipeTypeId`,
    ADD COLUMN `plumTypeId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `plumfittingtype`;

-- DropTable
DROP TABLE `plumpipetype`;

-- CreateTable
CREATE TABLE `PlumType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumFittingType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlumFittingInfo` ADD CONSTRAINT `PlumFittingInfo_plumTypeId_fkey` FOREIGN KEY (`plumTypeId`) REFERENCES `PlumType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipeInfo` ADD CONSTRAINT `PlumPipeInfo_plumTypeId_fkey` FOREIGN KEY (`plumTypeId`) REFERENCES `PlumType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
