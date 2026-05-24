-- AlterTable: make awayTeamId nullable and add opponentName column
ALTER TABLE "Match" ALTER COLUMN "awayTeamId" DROP NOT NULL;
ALTER TABLE "Match" ADD COLUMN "opponentName" TEXT;

-- DropForeignKey for old NOT NULL constraint (if it existed)
-- The relation is preserved as optional (SetNull on delete)
