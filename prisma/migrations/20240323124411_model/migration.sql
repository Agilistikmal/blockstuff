-- CreateTable
CREATE TABLE "ItemFeatures" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,

    CONSTRAINT "ItemFeatures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemFeatures" ADD CONSTRAINT "ItemFeatures_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
