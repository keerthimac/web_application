-- CreateTable
CREATE TABLE `wire_description` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discription` VARCHAR(191) NOT NULL,
    `size_imperial` VARCHAR(191) NULL,
    `size_metric` VARCHAR(191) NOT NULL,
    `pack` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socket_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `socket_type` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `switch_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `switch_type` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `breaker_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `switch_type` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_price_version` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_id` INTEGER NOT NULL,
    `ele_price_version` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_brand_model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_id` INTEGER NOT NULL,
    `model` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_wire_spec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_model_id` INTEGER NOT NULL,
    `wire_description_id` INTEGER NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_socket_spec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_model_id` INTEGER NOT NULL,
    `socket_type_id` INTEGER NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_switch_spec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_model_id` INTEGER NOT NULL,
    `switch_type_id` INTEGER NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_breaker_spec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_model_id` INTEGER NOT NULL,
    `breaker_type_id` INTEGER NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_wire_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wire_spec_id` INTEGER NOT NULL,
    `price_version_id` INTEGER NOT NULL,
    `retail_price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_socket_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `socket_spec_id` INTEGER NOT NULL,
    `price_version_id` INTEGER NOT NULL,
    `retail_price` DOUBLE NOT NULL,
    `ele_price_versionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_switch_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `switch_spec_id` INTEGER NOT NULL,
    `price_version_id` INTEGER NOT NULL,
    `retail_price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ele_breaker_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `breaker_spec_id` INTEGER NOT NULL,
    `price_version_id` INTEGER NOT NULL,
    `retail_price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ele_wire_spec` ADD CONSTRAINT `ele_wire_spec_wire_description_id_fkey` FOREIGN KEY (`wire_description_id`) REFERENCES `wire_description`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_wire_spec` ADD CONSTRAINT `ele_wire_spec_brand_model_id_fkey` FOREIGN KEY (`brand_model_id`) REFERENCES `ele_brand_model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_socket_spec` ADD CONSTRAINT `ele_socket_spec_socket_type_id_fkey` FOREIGN KEY (`socket_type_id`) REFERENCES `socket_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_socket_spec` ADD CONSTRAINT `ele_socket_spec_brand_model_id_fkey` FOREIGN KEY (`brand_model_id`) REFERENCES `ele_brand_model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_switch_spec` ADD CONSTRAINT `ele_switch_spec_switch_type_id_fkey` FOREIGN KEY (`switch_type_id`) REFERENCES `switch_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_switch_spec` ADD CONSTRAINT `ele_switch_spec_brand_model_id_fkey` FOREIGN KEY (`brand_model_id`) REFERENCES `ele_brand_model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_breaker_spec` ADD CONSTRAINT `ele_breaker_spec_breaker_type_id_fkey` FOREIGN KEY (`breaker_type_id`) REFERENCES `breaker_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_breaker_spec` ADD CONSTRAINT `ele_breaker_spec_brand_model_id_fkey` FOREIGN KEY (`brand_model_id`) REFERENCES `ele_brand_model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_wire_prices` ADD CONSTRAINT `ele_wire_prices_wire_spec_id_fkey` FOREIGN KEY (`wire_spec_id`) REFERENCES `ele_wire_spec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_wire_prices` ADD CONSTRAINT `ele_wire_prices_price_version_id_fkey` FOREIGN KEY (`price_version_id`) REFERENCES `ele_price_version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_socket_prices` ADD CONSTRAINT `ele_socket_prices_socket_spec_id_fkey` FOREIGN KEY (`socket_spec_id`) REFERENCES `ele_socket_spec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_socket_prices` ADD CONSTRAINT `ele_socket_prices_price_version_id_fkey` FOREIGN KEY (`price_version_id`) REFERENCES `ele_price_version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_switch_prices` ADD CONSTRAINT `ele_switch_prices_switch_spec_id_fkey` FOREIGN KEY (`switch_spec_id`) REFERENCES `ele_switch_spec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_switch_prices` ADD CONSTRAINT `ele_switch_prices_price_version_id_fkey` FOREIGN KEY (`price_version_id`) REFERENCES `ele_price_version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_breaker_prices` ADD CONSTRAINT `ele_breaker_prices_breaker_spec_id_fkey` FOREIGN KEY (`breaker_spec_id`) REFERENCES `ele_breaker_spec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ele_breaker_prices` ADD CONSTRAINT `ele_breaker_prices_price_version_id_fkey` FOREIGN KEY (`price_version_id`) REFERENCES `ele_price_version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
