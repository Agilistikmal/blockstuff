/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discord` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "discord" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Item_slug_key" ON "Item"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Server_slug_key" ON "Server"("slug");
