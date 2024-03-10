/*
  Warnings:

  - You are about to drop the column `confirmed` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `date_created` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `date_updated` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `user` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `confirmed`,
    DROP COLUMN `date_created`,
    DROP COLUMN `date_updated`,
    DROP COLUMN `email`,
    DROP COLUMN `password`,
    DROP COLUMN `type`,
    ADD COLUMN `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NULL;
