/*
  Warnings:

  - Added the required column `plumPipeLengthImperial` to the `PlumPipeInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plumPipeLengthMetric` to the `PlumPipeInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plumpipeinfo` ADD COLUMN `plumPipeLengthImperial` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `plumPipeLengthMetric` DECIMAL(10, 2) NOT NULL;
