/*
  Warnings:

  - You are about to drop the `_EventToPembicara` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pembicara_id` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_EventToPembicara" DROP CONSTRAINT "_EventToPembicara_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToPembicara" DROP CONSTRAINT "_EventToPembicara_B_fkey";

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "pembicara_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_EventToPembicara";

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_pembicara_id_fkey" FOREIGN KEY ("pembicara_id") REFERENCES "pembicaras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
