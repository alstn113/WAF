/*
  Warnings:

  - Added the required column `userId` to the `FormBuilder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FormBuilder` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `FormBuilder` ADD CONSTRAINT `FormBuilder_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
