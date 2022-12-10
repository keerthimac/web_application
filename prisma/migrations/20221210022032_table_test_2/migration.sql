/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `sub_company` (
    `sub_company_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_company_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sub_company_sub_company_name_key`(`sub_company_name`),
    PRIMARY KEY (`sub_company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
