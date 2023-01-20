-- CreateTable
CREATE TABLE `PlumFitting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fittingName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumBrand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumBrand` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumGrade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumGrade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumSize` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumGrade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumFittingType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumFittingType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumPipeType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumPipeType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumPipeEndType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumPipeEndType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumFittingInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumFittingId` INTEGER NOT NULL,
    `plumBrandId` INTEGER NOT NULL,
    `plumGradeId` INTEGER NOT NULL,
    `plumSizeId` INTEGER NOT NULL,
    `plumFittingTypeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumPipeInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumBrandId` INTEGER NOT NULL,
    `plumGradeId` INTEGER NOT NULL,
    `plumSizeId` INTEGER NOT NULL,
    `plumPipeTypeId` INTEGER NOT NULL,
    `plumPipeEndTypeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumPriceVersion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumPriceVersion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumFittingPrices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumFittingPrice` DECIMAL(10, 2) NOT NULL,
    `plumPriceVersionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlumPipePrices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plumPipePrices` DECIMAL(10, 2) NOT NULL,
    `plumPriceVersionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlumFittingInfo` ADD CONSTRAINT `PlumFittingInfo_plumFittingId_fkey` FOREIGN KEY (`plumFittingId`) REFERENCES `PlumFitting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumFittingInfo` ADD CONSTRAINT `PlumFittingInfo_plumBrandId_fkey` FOREIGN KEY (`plumBrandId`) REFERENCES `PlumBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumFittingInfo` ADD CONSTRAINT `PlumFittingInfo_plumGradeId_fkey` FOREIGN KEY (`plumGradeId`) REFERENCES `PlumGrade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumFittingInfo` ADD CONSTRAINT `PlumFittingInfo_plumSizeId_fkey` FOREIGN KEY (`plumSizeId`) REFERENCES `PlumSize`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumFittingInfo` ADD CONSTRAINT `PlumFittingInfo_plumFittingTypeId_fkey` FOREIGN KEY (`plumFittingTypeId`) REFERENCES `PlumFittingType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipeInfo` ADD CONSTRAINT `PlumPipeInfo_plumBrandId_fkey` FOREIGN KEY (`plumBrandId`) REFERENCES `PlumBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipeInfo` ADD CONSTRAINT `PlumPipeInfo_plumGradeId_fkey` FOREIGN KEY (`plumGradeId`) REFERENCES `PlumGrade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipeInfo` ADD CONSTRAINT `PlumPipeInfo_plumSizeId_fkey` FOREIGN KEY (`plumSizeId`) REFERENCES `PlumSize`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipeInfo` ADD CONSTRAINT `PlumPipeInfo_plumPipeTypeId_fkey` FOREIGN KEY (`plumPipeTypeId`) REFERENCES `PlumPipeType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipeInfo` ADD CONSTRAINT `PlumPipeInfo_plumPipeEndTypeId_fkey` FOREIGN KEY (`plumPipeEndTypeId`) REFERENCES `PlumPipeEndType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumFittingPrices` ADD CONSTRAINT `PlumFittingPrices_plumPriceVersionId_fkey` FOREIGN KEY (`plumPriceVersionId`) REFERENCES `PlumPriceVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlumPipePrices` ADD CONSTRAINT `PlumPipePrices_plumPriceVersionId_fkey` FOREIGN KEY (`plumPriceVersionId`) REFERENCES `PlumPriceVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
