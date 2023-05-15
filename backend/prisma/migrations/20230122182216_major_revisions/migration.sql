/*
  Warnings:

  - You are about to drop the column `plumStandard` on the `plumgrade` table. All the data in the column will be lost.
  - Added the required column `plumStandardId` to the `PlumGrade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumgrade` DROP COLUMN `plumStandard`,
    ADD COLUMN `plumStandardId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `PlumStandard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `standard` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlumGrade` ADD CONSTRAINT `PlumGrade_plumStandardId_fkey` FOREIGN KEY (`plumStandardId`) REFERENCES `PlumStandard`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
