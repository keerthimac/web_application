/*
  Warnings:

  - Added the required column `subContractName` to the `SubContract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subcontract` ADD COLUMN `finishDate` DATETIME(3) NULL,
    ADD COLUMN `startDate` DATETIME(3) NULL,
    ADD COLUMN `subContractName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `SubContractPayments` (
    `subPaymentId` INTEGER NOT NULL AUTO_INCREMENT,
    `subContractId` INTEGER NOT NULL,

    PRIMARY KEY (`subPaymentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubContractPayments` ADD CONSTRAINT `SubContractPayments_subContractId_fkey` FOREIGN KEY (`subContractId`) REFERENCES `SubContract`(`subContractId`) ON DELETE RESTRICT ON UPDATE CASCADE;
