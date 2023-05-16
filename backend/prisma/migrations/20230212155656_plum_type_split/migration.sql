/*
  Warnings:

  - You are about to drop the column `plum_type_id` on the `plum_fitting_info` table. All the data in the column will be lost.
  - You are about to drop the column `plum_type_id` on the `plum_pipe_info` table. All the data in the column will be lost.
  - You are about to drop the `plum_type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `plum_fitting_typeId` to the `plum_fitting_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plum_pipe_typeId` to the `plum_pipe_info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plum_fitting_info` DROP FOREIGN KEY `plum_fitting_info_plum_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `plum_pipe_info` DROP FOREIGN KEY `plum_pipe_info_plum_type_id_fkey`;

-- AlterTable
ALTER TABLE `plum_fitting_info` DROP COLUMN `plum_type_id`,
    ADD COLUMN `plum_fitting_typeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plum_pipe_info` DROP COLUMN `plum_type_id`,
    ADD COLUMN `plum_pipe_typeId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `plum_type`;

-- CreateTable
CREATE TABLE `plum_pipe_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_pipe_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_fitting_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_fitting_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plum_fitting_info` ADD CONSTRAINT `plum_fitting_info_plum_fitting_typeId_fkey` FOREIGN KEY (`plum_fitting_typeId`) REFERENCES `plum_fitting_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_info` ADD CONSTRAINT `plum_pipe_info_plum_pipe_typeId_fkey` FOREIGN KEY (`plum_pipe_typeId`) REFERENCES `plum_pipe_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
