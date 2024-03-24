/*
  Warnings:

  - Added the required column `rcon_id` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "rcon_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ServerRcon" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ServerRcon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCommand" (
    "id" TEXT NOT NULL,
    "item_slug" TEXT NOT NULL,

    CONSTRAINT "ItemCommand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_rcon_id_fkey" FOREIGN KEY ("rcon_id") REFERENCES "ServerRcon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCommand" ADD CONSTRAINT "ItemCommand_item_slug_fkey" FOREIGN KEY ("item_slug") REFERENCES "Item"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
