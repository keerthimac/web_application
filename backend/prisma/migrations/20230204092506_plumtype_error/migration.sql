/*
  Warnings:

  - You are about to drop the column `plumType` on the `plum_type` table. All the data in the column will be lost.
  - Added the required column `plum_type` to the `plum_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plum_type` DROP COLUMN `plumType`,
    ADD COLUMN `plum_type` VARCHAR(191) NOT NULL;
