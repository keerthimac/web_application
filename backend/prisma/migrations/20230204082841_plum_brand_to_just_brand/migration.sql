/*
  Warnings:

  - You are about to drop the column `plum_brand_id` on the `plum_fitting_price` table. All the data in the column will be lost.
  - You are about to drop the column `plum_brand_id` on the `plum_pipe_price` table. All the data in the column will be lost.
  - You are about to drop the `plum_brand` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brand_id` to the `plum_fitting_price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand_id` to the `plum_pipe_price` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plum_fitting_price` DROP FOREIGN KEY `plum_fitting_price_plum_brand_id_fkey`;

-- DropForeignKey
ALTER TABLE `plum_pipe_price` DROP FOREIGN KEY `plum_pipe_price_plum_brand_id_fkey`;

-- AlterTable
ALTER TABLE `plum_fitting_price` DROP COLUMN `plum_brand_id`,
    ADD COLUMN `brand_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plum_pipe_price` DROP COLUMN `plum_brand_id`,
    ADD COLUMN `brand_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `plum_brand`;

-- CreateTable
CREATE TABLE `brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plum_fitting_price` ADD CONSTRAINT `plum_fitting_price_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_price` ADD CONSTRAINT `plum_pipe_price_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
