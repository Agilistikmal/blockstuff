/*
  Warnings:

  - You are about to drop the `ItemCommand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemCommand" DROP CONSTRAINT "ItemCommand_item_slug_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "item_commands" TEXT[];

-- DropTable
DROP TABLE "ItemCommand";
