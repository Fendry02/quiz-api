/*
  Warnings:

  - You are about to drop the column `team_count` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Team` table. All the data in the column will be lost.
  - Added the required column `label` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "team_count";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "name",
ADD COLUMN     "label" TEXT NOT NULL;
