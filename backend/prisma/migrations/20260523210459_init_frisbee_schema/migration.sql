/*
  Warnings:

  - You are about to drop the `MatchEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerStat` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `position` on the `Player` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SportType" AS ENUM ('ULTIMATE_FRISBEE');

-- CreateEnum
CREATE TYPE "FrisbeeActionType" AS ENUM ('GOAL', 'ASSIST', 'BLOCK', 'THROWAWAY', 'DROP', 'CALLAHAN', 'DEFENSE');

-- DropForeignKey
ALTER TABLE "MatchEvent" DROP CONSTRAINT "MatchEvent_matchId_fkey";

-- DropForeignKey
ALTER TABLE "MatchEvent" DROP CONSTRAINT "MatchEvent_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerStat" DROP CONSTRAINT "PlayerStat_playerId_fkey";

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "sportType" "SportType" NOT NULL DEFAULT 'ULTIMATE_FRISBEE';

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "position",
ADD COLUMN     "position" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "sportType" "SportType" NOT NULL DEFAULT 'ULTIMATE_FRISBEE';

-- DropTable
DROP TABLE "MatchEvent";

-- DropTable
DROP TABLE "PlayerStat";

-- DropEnum
DROP TYPE "EventType";

-- DropEnum
DROP TYPE "Position";

-- CreateTable
CREATE TABLE "FrisbeeMatchEvent" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "actionType" "FrisbeeActionType" NOT NULL,
    "minute" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FrisbeeMatchEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrisbeePlayerStat" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "blocks" INTEGER NOT NULL DEFAULT 0,
    "throwaways" INTEGER NOT NULL DEFAULT 0,
    "drops" INTEGER NOT NULL DEFAULT 0,
    "callahans" INTEGER NOT NULL DEFAULT 0,
    "completions" INTEGER NOT NULL DEFAULT 0,
    "matchesPlayed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "FrisbeePlayerStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FrisbeePlayerStat_playerId_key" ON "FrisbeePlayerStat"("playerId");

-- AddForeignKey
ALTER TABLE "FrisbeeMatchEvent" ADD CONSTRAINT "FrisbeeMatchEvent_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrisbeeMatchEvent" ADD CONSTRAINT "FrisbeeMatchEvent_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrisbeePlayerStat" ADD CONSTRAINT "FrisbeePlayerStat_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
