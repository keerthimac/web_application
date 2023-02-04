/*
  Warnings:

  - You are about to drop the column `plumFittingPrice` on the `plum_fitting_price` table. All the data in the column will be lost.
  - You are about to drop the column `plumPipeInfoId` on the `plum_pipe_price` table. All the data in the column will be lost.
  - You are about to drop the column `plumPipePrices` on the `plum_pipe_price` table. All the data in the column will be lost.
  - Added the required column `plum_fitting_price` to the `plum_fitting_price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plum_pipe_info_id` to the `plum_pipe_price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plum_pipe_price` to the `plum_pipe_price` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plum_pipe_price` DROP FOREIGN KEY `plum_pipe_price_plumPipeInfoId_fkey`;

-- AlterTable
ALTER TABLE `plum_fitting_price` DROP COLUMN `plumFittingPrice`,
    ADD COLUMN `plum_fitting_price` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `plum_pipe_price` DROP COLUMN `plumPipeInfoId`,
    DROP COLUMN `plumPipePrices`,
    ADD COLUMN `plum_pipe_info_id` INTEGER NOT NULL,
    ADD COLUMN `plum_pipe_price` DECIMAL(10, 2) NOT NULL;

-- AddForeignKey
ALTER TABLE `plum_pipe_price` ADD CONSTRAINT `plum_pipe_price_plum_pipe_info_id_fkey` FOREIGN KEY (`plum_pipe_info_id`) REFERENCES `plum_pipe_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
