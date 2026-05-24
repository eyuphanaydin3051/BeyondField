-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_awayTeamId_fkey";

-- AlterTable
ALTER TABLE "MatchPlayerStat" ADD COLUMN     "successfulPasses" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "TournamentPlayerStat" ADD COLUMN     "successfulPasses" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
