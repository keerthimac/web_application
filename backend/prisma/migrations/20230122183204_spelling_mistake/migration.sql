/*
  Warnings:

  - You are about to drop the column `discription` on the `plumstandard` table. All the data in the column will be lost.
  - Added the required column `description` to the `PlumStandard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumstandard` DROP COLUMN `discription`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
