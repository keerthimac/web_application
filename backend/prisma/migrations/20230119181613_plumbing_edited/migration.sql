/*
  Warnings:

  - You are about to drop the `plumfittingprices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumpipeprices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `plumfittingprices` DROP FOREIGN KEY `PlumFittingPrices_plumPriceVersionId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeprices` DROP FOREIGN KEY `PlumPipePrices_plumPriceVersionId_fkey`;

-- DropTable
DROP TABLE `plumfittingprices`;

-- DropTable
DROP TABLE `plumpipeprices`;

-- CreateTable
CREATE TABLE `PlumFittingPrice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumFittingPrice` DECIMAL(10, 2) NOT NULL,
    `plumPriceVersionId` INTEGER NOT NULL,
    `plumFittingInfoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumPipePrice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumPipePrices` DECIMAL(10, 2) NOT NULL,
    `plumPriceVersionId` INTEGER NOT NULL,
    `plumPipeInfoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlumFittingPrice` ADD CONSTRAINT `PlumFittingPrice_plumPriceVersionId_fkey` FOREIGN KEY (`plumPriceVersionId`) REFERENCES `PlumPriceVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumFittingPrice` ADD CONSTRAINT `PlumFittingPrice_plumFittingInfoId_fkey` FOREIGN KEY (`plumFittingInfoId`) REFERENCES `PlumFittingInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipePrice` ADD CONSTRAINT `PlumPipePrice_plumPriceVersionId_fkey` FOREIGN KEY (`plumPriceVersionId`) REFERENCES `PlumPriceVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipePrice` ADD CONSTRAINT `PlumPipePrice_plumPipeInfoId_fkey` FOREIGN KEY (`plumPipeInfoId`) REFERENCES `PlumPipeInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
