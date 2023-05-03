/*
  Warnings:

  - You are about to drop the column `team` on the `Question` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "team",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "result" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "point" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
