/*
  Warnings:

  - You are about to drop the column `quizz_id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `quizz_id` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `Quizz` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quiz_id` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiz_id` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_quizz_id_fkey";

-- DropForeignKey
ALTER TABLE "Quizz" DROP CONSTRAINT "Quizz_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_quizz_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "quizz_id",
ADD COLUMN     "quiz_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "quizz_id",
ADD COLUMN     "quiz_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Quizz";

-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "team_count" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
