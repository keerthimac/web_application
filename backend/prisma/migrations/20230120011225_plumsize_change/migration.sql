/*
  Warnings:

  - You are about to drop the column `plumGrade` on the `plumsize` table. All the data in the column will be lost.
  - Added the required column `plumSizeImperial` to the `PlumSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plumSizeMetric` to the `PlumSize` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumsize` DROP COLUMN `plumGrade`,
    ADD COLUMN `plumSizeImperial` VARCHAR(191) NOT NULL,
    ADD COLUMN `plumSizeMetric` VARCHAR(191) NOT NULL;
