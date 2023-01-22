/*
  Warnings:

  - You are about to drop the column `description` on the `plumstandard` table. All the data in the column will be lost.
  - You are about to drop the column `standard` on the `plumstandard` table. All the data in the column will be lost.
  - Added the required column `plumDescription` to the `PlumStandard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plumStandard` to the `PlumStandard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumstandard` DROP COLUMN `description`,
    DROP COLUMN `standard`,
    ADD COLUMN `plumDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `plumStandard` VARCHAR(191) NOT NULL;
