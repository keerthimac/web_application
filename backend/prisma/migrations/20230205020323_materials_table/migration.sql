-- CreateTable
CREATE TABLE `material` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `material` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands_on_materials` (
    `brandId` INTEGER NOT NULL,
    `material_Id` INTEGER NOT NULL,

    PRIMARY KEY (`brandId`, `material_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `brands_on_materials` ADD CONSTRAINT `brands_on_materials_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `brands_on_materials` ADD CONSTRAINT `brands_on_materials_material_Id_fkey` FOREIGN KEY (`material_Id`) REFERENCES `material`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
