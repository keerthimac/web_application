/*
  Warnings:

  - You are about to drop the column `plum_fitting_typeId` on the `plum_fitting_info` table. All the data in the column will be lost.
  - You are about to drop the column `plum_pipe_typeId` on the `plum_pipe_info` table. All the data in the column will be lost.
  - Added the required column `plum_fitting_type_Id` to the `plum_fitting_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plum_pipe_type_Id` to the `plum_pipe_info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plum_fitting_info` DROP FOREIGN KEY `plum_fitting_info_plum_fitting_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `plum_pipe_info` DROP FOREIGN KEY `plum_pipe_info_plum_pipe_typeId_fkey`;

-- AlterTable
ALTER TABLE `plum_fitting_info` DROP COLUMN `plum_fitting_typeId`,
    ADD COLUMN `plum_fitting_type_Id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plum_pipe_info` DROP COLUMN `plum_pipe_typeId`,
    ADD COLUMN `plum_pipe_type_Id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `plum_fitting_info` ADD CONSTRAINT `plum_fitting_info_plum_fitting_type_Id_fkey` FOREIGN KEY (`plum_fitting_type_Id`) REFERENCES `plum_fitting_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_info` ADD CONSTRAINT `plum_pipe_info_plum_pipe_type_Id_fkey` FOREIGN KEY (`plum_pipe_type_Id`) REFERENCES `plum_pipe_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
