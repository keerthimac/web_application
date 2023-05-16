/*
  Warnings:

  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientName` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `projectName` on the `project` table. All the data in the column will be lost.
  - You are about to drop the `plumbrand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumfitting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumfittinginfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumfittingprice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumgrade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumpipeendtype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumpipeinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumpipeprice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumpriceversion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumsize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumstandard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plumtype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projectstage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stagesonprojects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcontract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcontractpayments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `client_name` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_name` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `plumfittinginfo` DROP FOREIGN KEY `PlumFittingInfo_plumFittingId_fkey`;

-- DropForeignKey
ALTER TABLE `plumfittinginfo` DROP FOREIGN KEY `PlumFittingInfo_plumGradeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumfittinginfo` DROP FOREIGN KEY `PlumFittingInfo_plumSizeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumfittinginfo` DROP FOREIGN KEY `PlumFittingInfo_plumTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumfittingprice` DROP FOREIGN KEY `PlumFittingPrice_plumBrandId_fkey`;

-- DropForeignKey
ALTER TABLE `plumfittingprice` DROP FOREIGN KEY `PlumFittingPrice_plumFittingInfoId_fkey`;

-- DropForeignKey
ALTER TABLE `plumfittingprice` DROP FOREIGN KEY `PlumFittingPrice_plumPriceVersionId_fkey`;

-- DropForeignKey
ALTER TABLE `plumgrade` DROP FOREIGN KEY `PlumGrade_plumStandardId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeinfo` DROP FOREIGN KEY `PlumPipeInfo_plumGradeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeinfo` DROP FOREIGN KEY `PlumPipeInfo_plumPipeEndTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeinfo` DROP FOREIGN KEY `PlumPipeInfo_plumSizeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeinfo` DROP FOREIGN KEY `PlumPipeInfo_plumTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeprice` DROP FOREIGN KEY `PlumPipePrice_plumBrandId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeprice` DROP FOREIGN KEY `PlumPipePrice_plumPipeInfoId_fkey`;

-- DropForeignKey
ALTER TABLE `plumpipeprice` DROP FOREIGN KEY `PlumPipePrice_plumPriceVersionId_fkey`;

-- DropForeignKey
ALTER TABLE `stagesonprojects` DROP FOREIGN KEY `StagesOnProjects_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `stagesonprojects` DROP FOREIGN KEY `StagesOnProjects_projectStageId_fkey`;

-- DropForeignKey
ALTER TABLE `subcontract` DROP FOREIGN KEY `SubContract_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `subcontract` DROP FOREIGN KEY `SubContract_projectStageId_fkey`;

-- DropForeignKey
ALTER TABLE `subcontract` DROP FOREIGN KEY `SubContract_subCompanyId_fkey`;

-- DropForeignKey
ALTER TABLE `subcontractpayments` DROP FOREIGN KEY `SubContractPayments_subContractId_fkey`;

-- AlterTable
ALTER TABLE `project` DROP PRIMARY KEY,
    DROP COLUMN `clientName`,
    DROP COLUMN `projectId`,
    DROP COLUMN `projectName`,
    ADD COLUMN `client_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `project_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `project_name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`project_id`);

-- DropTable
DROP TABLE `plumbrand`;

-- DropTable
DROP TABLE `plumfitting`;

-- DropTable
DROP TABLE `plumfittinginfo`;

-- DropTable
DROP TABLE `plumfittingprice`;

-- DropTable
DROP TABLE `plumgrade`;

-- DropTable
DROP TABLE `plumpipeendtype`;

-- DropTable
DROP TABLE `plumpipeinfo`;

-- DropTable
DROP TABLE `plumpipeprice`;

-- DropTable
DROP TABLE `plumpriceversion`;

-- DropTable
DROP TABLE `plumsize`;

-- DropTable
DROP TABLE `plumstandard`;

-- DropTable
DROP TABLE `plumtype`;

-- DropTable
DROP TABLE `projectstage`;

-- DropTable
DROP TABLE `stagesonprojects`;

-- DropTable
DROP TABLE `subcompany`;

-- DropTable
DROP TABLE `subcontract`;

-- DropTable
DROP TABLE `subcontractpayments`;

-- CreateTable
CREATE TABLE `sub_company` (
    `sub_company_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_company_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`sub_company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_stage` (
    `project_stage_id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_stage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`project_stage_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_contract` (
    `sub_contract_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_company_id` INTEGER NOT NULL,
    `project_id` INTEGER NOT NULL,
    `project_stage_id` INTEGER NOT NULL,
    `sub_contract_name` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NULL,
    `finish_date` DATETIME(3) NULL,

    PRIMARY KEY (`sub_contract_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_contract_payments` (
    `sub_payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_contract_id` INTEGER NOT NULL,

    PRIMARY KEY (`sub_payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stages_on_projects` (
    `project_id` INTEGER NOT NULL,
    `project_stage_id` INTEGER NOT NULL,
    `value` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`project_id`, `project_stage_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_fitting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_fitting` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_brand` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_standard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_standard` VARCHAR(191) NOT NULL,
    `plum_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_grade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_grade` VARCHAR(191) NOT NULL,
    `plum_standard_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_size_metric` VARCHAR(191) NOT NULL,
    `plum_size_imperial` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_pipe_end_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_pipe_end_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_fitting_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_fitting_id` INTEGER NOT NULL,
    `plum_grade_id` INTEGER NOT NULL,
    `plum_size_id` INTEGER NOT NULL,
    `plum_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_pipe_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_grade_id` INTEGER NOT NULL,
    `plum_size_id` INTEGER NOT NULL,
    `plum_pipe_end_type_id` INTEGER NOT NULL,
    `plum_type_id` INTEGER NOT NULL,
    `plum_pipe_length_metric` DECIMAL(10, 2) NOT NULL,
    `plum_pipe_length_imperial` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_price_version` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plum_price_version` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_fitting_price` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumFittingPrice` DECIMAL(10, 2) NOT NULL,
    `plum_price_version_id` INTEGER NOT NULL,
    `plum_fitting_info_id` INTEGER NOT NULL,
    `plum_brand_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plum_pipe_price` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumPipePrices` DECIMAL(10, 2) NOT NULL,
    `plum_price_version_id` INTEGER NOT NULL,
    `plumPipeInfoId` INTEGER NOT NULL,
    `plum_brand_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sub_contract` ADD CONSTRAINT `sub_contract_sub_company_id_fkey` FOREIGN KEY (`sub_company_id`) REFERENCES `sub_company`(`sub_company_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sub_contract` ADD CONSTRAINT `sub_contract_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `project`(`project_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sub_contract` ADD CONSTRAINT `sub_contract_project_stage_id_fkey` FOREIGN KEY (`project_stage_id`) REFERENCES `project_stage`(`project_stage_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sub_contract_payments` ADD CONSTRAINT `sub_contract_payments_sub_contract_id_fkey` FOREIGN KEY (`sub_contract_id`) REFERENCES `sub_contract`(`sub_contract_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stages_on_projects` ADD CONSTRAINT `stages_on_projects_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `project`(`project_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stages_on_projects` ADD CONSTRAINT `stages_on_projects_project_stage_id_fkey` FOREIGN KEY (`project_stage_id`) REFERENCES `project_stage`(`project_stage_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_grade` ADD CONSTRAINT `plum_grade_plum_standard_id_fkey` FOREIGN KEY (`plum_standard_id`) REFERENCES `plum_standard`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_info` ADD CONSTRAINT `plum_fitting_info_plum_fitting_id_fkey` FOREIGN KEY (`plum_fitting_id`) REFERENCES `plum_fitting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_info` ADD CONSTRAINT `plum_fitting_info_plum_grade_id_fkey` FOREIGN KEY (`plum_grade_id`) REFERENCES `plum_grade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_info` ADD CONSTRAINT `plum_fitting_info_plum_size_id_fkey` FOREIGN KEY (`plum_size_id`) REFERENCES `plum_size`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_info` ADD CONSTRAINT `plum_fitting_info_plum_type_id_fkey` FOREIGN KEY (`plum_type_id`) REFERENCES `plum_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_info` ADD CONSTRAINT `plum_pipe_info_plum_grade_id_fkey` FOREIGN KEY (`plum_grade_id`) REFERENCES `plum_grade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_info` ADD CONSTRAINT `plum_pipe_info_plum_size_id_fkey` FOREIGN KEY (`plum_size_id`) REFERENCES `plum_size`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_info` ADD CONSTRAINT `plum_pipe_info_plum_pipe_end_type_id_fkey` FOREIGN KEY (`plum_pipe_end_type_id`) REFERENCES `plum_pipe_end_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_info` ADD CONSTRAINT `plum_pipe_info_plum_type_id_fkey` FOREIGN KEY (`plum_type_id`) REFERENCES `plum_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_price` ADD CONSTRAINT `plum_fitting_price_plum_price_version_id_fkey` FOREIGN KEY (`plum_price_version_id`) REFERENCES `plum_price_version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_price` ADD CONSTRAINT `plum_fitting_price_plum_fitting_info_id_fkey` FOREIGN KEY (`plum_fitting_info_id`) REFERENCES `plum_fitting_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_fitting_price` ADD CONSTRAINT `plum_fitting_price_plum_brand_id_fkey` FOREIGN KEY (`plum_brand_id`) REFERENCES `plum_brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_price` ADD CONSTRAINT `plum_pipe_price_plum_price_version_id_fkey` FOREIGN KEY (`plum_price_version_id`) REFERENCES `plum_price_version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_price` ADD CONSTRAINT `plum_pipe_price_plumPipeInfoId_fkey` FOREIGN KEY (`plumPipeInfoId`) REFERENCES `plum_pipe_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plum_pipe_price` ADD CONSTRAINT `plum_pipe_price_plum_brand_id_fkey` FOREIGN KEY (`plum_brand_id`) REFERENCES `plum_brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
