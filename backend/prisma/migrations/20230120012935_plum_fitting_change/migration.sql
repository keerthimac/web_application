/*
  Warnings:

  - You are about to drop the column `fittingName` on the `plumfitting` table. All the data in the column will be lost.
  - Added the required column `fittingFitting` to the `PlumFitting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumfitting` DROP COLUMN `fittingName`,
    ADD COLUMN `fittingFitting` VARCHAR(191) NOT NULL;
