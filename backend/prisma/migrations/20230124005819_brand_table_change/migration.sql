/*
  Warnings:

  - You are about to drop the column `plumBrandId` on the `plumfittinginfo` table. All the data in the column will be lost.
  - You are about to drop the column `plumBrandId` on the `plumpipeinfo` table. All the data in the column will be lost.
  - Added the required column `plumBrandId` to the `PlumFittingPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plumBrandId` to the `PlumPipePrice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plumfittinginfo` DROP FOREIGN KEY `PlumFittingInfo_plumBrandId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeinfo` DROP FOREIGN KEY `PlumPipeInfo_plumBrandId_fkey`;

-- AlterTable
ALTER TABLE `plumfittinginfo` DROP COLUMN `plumBrandId`;

-- AlterTable
ALTER TABLE `plumfittingprice` ADD COLUMN `plumBrandId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plumpipeinfo` DROP COLUMN `plumBrandId`;

-- AlterTable
ALTER TABLE `plumpipeprice` ADD COLUMN `plumBrandId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `PlumFittingPrice` ADD CONSTRAINT `PlumFittingPrice_plumBrandId_fkey` FOREIGN KEY (`plumBrandId`) REFERENCES `PlumBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipePrice` ADD CONSTRAINT `PlumPipePrice_plumBrandId_fkey` FOREIGN KEY (`plumBrandId`) REFERENCES `PlumBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
