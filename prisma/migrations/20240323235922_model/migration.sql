/*
  Warnings:

  - You are about to drop the column `item_commands` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "item_commands",
ADD COLUMN     "commands" TEXT[];
