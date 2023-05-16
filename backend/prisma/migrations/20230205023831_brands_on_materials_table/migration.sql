/*
  Warnings:

  - The primary key for the `brands_on_materials` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brandId` on the `brands_on_materials` table. All the data in the column will be lost.
  - You are about to drop the column `material_Id` on the `brands_on_materials` table. All the data in the column will be lost.
  - Added the required column `brand_id` to the `brands_on_materials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `material_id` to the `brands_on_materials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `brands_on_materials` DROP FOREIGN KEY `brands_on_materials_brandId_fkey`;

-- DropForeignKey
ALTER TABLE `brands_on_materials` DROP FOREIGN KEY `brands_on_materials_material_Id_fkey`;

-- AlterTable
ALTER TABLE `brands_on_materials` DROP PRIMARY KEY,
    DROP COLUMN `brandId`,
    DROP COLUMN `material_Id`,
    ADD COLUMN `brand_id` INTEGER NOT NULL,
    ADD COLUMN `material_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`brand_id`, `material_id`);

-- AddForeignKey
ALTER TABLE `brands_on_materials` ADD CONSTRAINT `brands_on_materials_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `brands_on_materials` ADD CONSTRAINT `brands_on_materials_material_id_fkey` FOREIGN KEY (`material_id`) REFERENCES `material`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
