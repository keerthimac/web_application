/*
  Warnings:

  - You are about to drop the column `plumFittingType` on the `plumtype` table. All the data in the column will be lost.
  - Added the required column `plumType` to the `PlumType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumtype` DROP COLUMN `plumFittingType`,
    ADD COLUMN `plumType` VARCHAR(191) NOT NULL;
