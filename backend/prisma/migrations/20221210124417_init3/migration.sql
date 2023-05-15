/*
  Warnings:

  - You are about to drop the `sub_company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `sub_company`;

-- CreateTable
CREATE TABLE `SubCompany` (
    `subCompanyId` INTEGER NOT NULL AUTO_INCREMENT,
    `subCompanyName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`subCompanyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `projectId` INTEGER NOT NULL AUTO_INCREMENT,
    `projectName` VARCHAR(191) NOT NULL,
    `clientName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectStage` (
    `projectStageId` INTEGER NOT NULL AUTO_INCREMENT,
    `projectStage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`projectStageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubContract` (
    `subContractId` INTEGER NOT NULL AUTO_INCREMENT,
    `subCompanyId` INTEGER NOT NULL,
    `projectId` INTEGER NOT NULL,
    `projectStageId` INTEGER NOT NULL,

    PRIMARY KEY (`subContractId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StagesOnProjects` (
    `projectId` INTEGER NOT NULL,
    `projectStageId` INTEGER NOT NULL,
    `value` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`projectId`, `projectStageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubContract` ADD CONSTRAINT `SubContract_subCompanyId_fkey` FOREIGN KEY (`subCompanyId`) REFERENCES `SubCompany`(`subCompanyId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubContract` ADD CONSTRAINT `SubContract_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`projectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubContract` ADD CONSTRAINT `SubContract_projectStageId_fkey` FOREIGN KEY (`projectStageId`) REFERENCES `ProjectStage`(`projectStageId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StagesOnProjects` ADD CONSTRAINT `StagesOnProjects_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`projectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StagesOnProjects` ADD CONSTRAINT `StagesOnProjects_projectStageId_fkey` FOREIGN KEY (`projectStageId`) REFERENCES `ProjectStage`(`projectStageId`) ON DELETE RESTRICT ON UPDATE CASCADE;
