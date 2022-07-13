/*
  Warnings:

  - You are about to drop the column `formData` on the `FormBuilder` table. All the data in the column will be lost.
  - Added the required column `formList` to the `FormBuilder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FormBuilder` DROP COLUMN `formData`,
    ADD COLUMN `formList` JSON NOT NULL;
