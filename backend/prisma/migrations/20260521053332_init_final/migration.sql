-- AlterTable
ALTER TABLE "events" ALTER COLUMN "create_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "pembicaras" ALTER COLUMN "create_at" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_EventToPembicara" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EventToPembicara_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EventToPembicara_B_index" ON "_EventToPembicara"("B");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPembicara" ADD CONSTRAINT "_EventToPembicara_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPembicara" ADD CONSTRAINT "_EventToPembicara_B_fkey" FOREIGN KEY ("B") REFERENCES "pembicaras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
