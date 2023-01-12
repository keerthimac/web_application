-- CreateTable
CREATE TABLE `User` (
    `sub_company_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_company_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_sub_company_name_key`(`sub_company_name`),
    PRIMARY KEY (`sub_company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
