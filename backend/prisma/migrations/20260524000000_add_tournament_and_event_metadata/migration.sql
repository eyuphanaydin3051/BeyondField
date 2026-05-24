-- CreateEnum
CREATE TYPE "PlayerPosition" AS ENUM ('HANDLER', 'CUTTER', 'HYBRID');

-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('LIGHT', 'DARK', 'SYSTEM');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('TR', 'EN');

-- CreateEnum
CREATE TYPE "NameFormat" AS ENUM ('FIRST_LAST', 'LAST_FIRST');

-- CreateEnum
CREATE TYPE "CaptureMode" AS ENUM ('SIMPLE', 'ADVANCED', 'PRO');

-- AlterEnum
ALTER TYPE "FrisbeeActionType" ADD VALUE 'COMPLETION';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'OPPONENT_GOAL';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'SUBSTITUTION';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'PULL_SUCCESS';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'PULL_FAIL';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'TIMEOUT_START';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'POINT_START';
ALTER TYPE "FrisbeeActionType" ADD VALUE 'POINT_END';

-- DropForeignKey (cascade behaviour change for Player.teamId)
ALTER TABLE "Player" DROP CONSTRAINT IF EXISTS "Player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT IF EXISTS "Match_homeTeamId_fkey";
ALTER TABLE "Match" DROP CONSTRAINT IF EXISTS "Match_awayTeamId_fkey";

-- DropForeignKey
ALTER TABLE "FrisbeeMatchEvent" DROP CONSTRAINT IF EXISTS "FrisbeeMatchEvent_matchId_fkey";
ALTER TABLE "FrisbeeMatchEvent" DROP CONSTRAINT IF EXISTS "FrisbeeMatchEvent_playerId_fkey";

-- DropForeignKey
ALTER TABLE "FrisbeePlayerStat" DROP CONSTRAINT IF EXISTS "FrisbeePlayerStat_playerId_fkey";

-- AlterTable: Player.position TEXT -> PlayerPosition
ALTER TABLE "Player" ALTER COLUMN "position" DROP DEFAULT;
ALTER TABLE "Player" ALTER COLUMN "position" TYPE "PlayerPosition" USING (
  CASE
    WHEN "position" IN ('HANDLER','CUTTER','HYBRID') THEN "position"::"PlayerPosition"
    ELSE 'HYBRID'::"PlayerPosition"
  END
);

-- AlterTable Team — add inviteCode
ALTER TABLE "Team" ADD COLUMN "inviteCode" TEXT;
CREATE UNIQUE INDEX "Team_inviteCode_key" ON "Team"("inviteCode");

-- AlterTable Match — add tournamentId, youtubeVideoId, durationSeconds, finished
ALTER TABLE "Match" ADD COLUMN "tournamentId" TEXT;
ALTER TABLE "Match" ADD COLUMN "youtubeVideoId" TEXT;
ALTER TABLE "Match" ADD COLUMN "durationSeconds" INTEGER;
ALTER TABLE "Match" ADD COLUMN "finished" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable FrisbeeMatchEvent — new metadata columns
ALTER TABLE "FrisbeeMatchEvent" ADD COLUMN "secondaryPlayerId" TEXT;
ALTER TABLE "FrisbeeMatchEvent" ADD COLUMN "videoTimestampSeconds" INTEGER;
ALTER TABLE "FrisbeeMatchEvent" ADD COLUMN "period" INTEGER;
ALTER TABLE "FrisbeeMatchEvent" ADD COLUMN "scoreUsAtEvent" INTEGER;
ALTER TABLE "FrisbeeMatchEvent" ADD COLUMN "scoreThemAtEvent" INTEGER;

-- AlterTable FrisbeePlayerStat — pre-aggregation fields
ALTER TABLE "FrisbeePlayerStat" ADD COLUMN "pointsPlayed" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FrisbeePlayerStat" ADD COLUMN "successfulPasses" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FrisbeePlayerStat" ADD COLUMN "pullAttempts" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FrisbeePlayerStat" ADD COLUMN "successfulPulls" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FrisbeePlayerStat" ADD COLUMN "plusMinus" INTEGER NOT NULL DEFAULT 0;

-- CreateTable Tournament
CREATE TABLE "Tournament" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerTeamId" TEXT NOT NULL,
    "sportType" "SportType" NOT NULL DEFAULT 'ULTIMATE_FRISBEE',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable TournamentRosterPlayer
CREATE TABLE "TournamentRosterPlayer" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "jerseyOverride" INTEGER,

    CONSTRAINT "TournamentRosterPlayer_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "TournamentRosterPlayer_tournamentId_playerId_key" ON "TournamentRosterPlayer"("tournamentId","playerId");

-- CreateTable MatchPlayerStat
CREATE TABLE "MatchPlayerStat" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "blocks" INTEGER NOT NULL DEFAULT 0,
    "throwaways" INTEGER NOT NULL DEFAULT 0,
    "drops" INTEGER NOT NULL DEFAULT 0,
    "callahans" INTEGER NOT NULL DEFAULT 0,
    "completions" INTEGER NOT NULL DEFAULT 0,
    "pointsPlayed" INTEGER NOT NULL DEFAULT 0,
    "plusMinus" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "MatchPlayerStat_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "MatchPlayerStat_matchId_playerId_key" ON "MatchPlayerStat"("matchId","playerId");

-- CreateTable TournamentPlayerStat
CREATE TABLE "TournamentPlayerStat" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "blocks" INTEGER NOT NULL DEFAULT 0,
    "throwaways" INTEGER NOT NULL DEFAULT 0,
    "drops" INTEGER NOT NULL DEFAULT 0,
    "callahans" INTEGER NOT NULL DEFAULT 0,
    "completions" INTEGER NOT NULL DEFAULT 0,
    "matchesPlayed" INTEGER NOT NULL DEFAULT 0,
    "pointsPlayed" INTEGER NOT NULL DEFAULT 0,
    "plusMinus" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TournamentPlayerStat_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "TournamentPlayerStat_tournamentId_playerId_key" ON "TournamentPlayerStat"("tournamentId","playerId");

-- CreateTable PlayerPassEdge
CREATE TABLE "PlayerPassEdge" (
    "id" TEXT NOT NULL,
    "fromPlayerId" TEXT NOT NULL,
    "toPlayerId" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PlayerPassEdge_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "PlayerPassEdge_fromPlayerId_toPlayerId_key" ON "PlayerPassEdge"("fromPlayerId","toPlayerId");

-- CreateTable UserSettings
CREATE TABLE "UserSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "theme" "Theme" NOT NULL DEFAULT 'SYSTEM',
    "language" "Language" NOT NULL DEFAULT 'TR',
    "nameFormat" "NameFormat" NOT NULL DEFAULT 'FIRST_LAST',
    "defaultCaptureMode" "CaptureMode" NOT NULL DEFAULT 'SIMPLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "UserSettings"("userId");

-- Re-add FKs (cascade matching schema)
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Match" ADD CONSTRAINT "Match_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Match" ADD CONSTRAINT "Match_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "FrisbeeMatchEvent" ADD CONSTRAINT "FrisbeeMatchEvent_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FrisbeeMatchEvent" ADD CONSTRAINT "FrisbeeMatchEvent_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FrisbeeMatchEvent" ADD CONSTRAINT "FrisbeeMatchEvent_secondaryPlayerId_fkey" FOREIGN KEY ("secondaryPlayerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "FrisbeePlayerStat" ADD CONSTRAINT "FrisbeePlayerStat_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_ownerTeamId_fkey" FOREIGN KEY ("ownerTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TournamentRosterPlayer" ADD CONSTRAINT "TournamentRosterPlayer_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TournamentRosterPlayer" ADD CONSTRAINT "TournamentRosterPlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MatchPlayerStat" ADD CONSTRAINT "MatchPlayerStat_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MatchPlayerStat" ADD CONSTRAINT "MatchPlayerStat_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TournamentPlayerStat" ADD CONSTRAINT "TournamentPlayerStat_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TournamentPlayerStat" ADD CONSTRAINT "TournamentPlayerStat_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PlayerPassEdge" ADD CONSTRAINT "PlayerPassEdge_fromPlayerId_fkey" FOREIGN KEY ("fromPlayerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PlayerPassEdge" ADD CONSTRAINT "PlayerPassEdge_toPlayerId_fkey" FOREIGN KEY ("toPlayerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
