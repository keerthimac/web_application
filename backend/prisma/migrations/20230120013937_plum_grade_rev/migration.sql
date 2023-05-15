/*
  Warnings:

  - Added the required column `plumStandard` to the `PlumGrade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumgrade` ADD COLUMN `plumStandard` VARCHAR(191) NOT NULL;
