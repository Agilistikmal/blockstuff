/*
  Warnings:

  - You are about to drop the column `server_id` on the `Item` table. All the data in the column will be lost.
  - Added the required column `server_slug` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_server_id_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "server_id",
ADD COLUMN     "server_slug" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_server_slug_fkey" FOREIGN KEY ("server_slug") REFERENCES "Server"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
