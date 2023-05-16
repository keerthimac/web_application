/*
  Warnings:

  - You are about to drop the column `fittingFitting` on the `plumfitting` table. All the data in the column will be lost.
  - Added the required column `plumFitting` to the `PlumFitting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumfitting` DROP COLUMN `fittingFitting`,
    ADD COLUMN `plumFitting` VARCHAR(191) NOT NULL;
