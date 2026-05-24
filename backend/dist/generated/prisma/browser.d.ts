import * as Prisma from './internal/prismaNamespaceBrowser';
export { Prisma };
export * as $Enums from './enums';
export * from './enums';
/**
 * Model User
 * System users — coaches, admins, and read-only viewers.
 */
export type User = Prisma.UserModel;
/**
 * Model Team
 * Sports clubs / teams.
 */
export type Team = Prisma.TeamModel;
/**
 * Model Player
 * Individual players registered to a team.
 */
export type Player = Prisma.PlayerModel;
/**
 * Model Match
 * A scheduled or completed match between two teams.
 */
export type Match = Prisma.MatchModel;
/**
 * Model FrisbeeMatchEvent
 * Raw Ultimate Frisbee event log — append-only, never mutated.
 */
export type FrisbeeMatchEvent = Prisma.FrisbeeMatchEventModel;
/**
 * Model FrisbeePlayerStat
 * Pre-aggregated Ultimate Frisbee career statistics per player.
 */
export type FrisbeePlayerStat = Prisma.FrisbeePlayerStatModel;
/**
 * Model MatchPlayerStat
 * Pre-aggregated per-match statistics per player.
 */
export type MatchPlayerStat = Prisma.MatchPlayerStatModel;
/**
 * Model Tournament
 * Tournament (competition event grouping multiple matches).
 */
export type Tournament = Prisma.TournamentModel;
/**
 * Model TournamentRosterPlayer
 * Per-tournament roster — allows jersey number overrides.
 */
export type TournamentRosterPlayer = Prisma.TournamentRosterPlayerModel;
/**
 * Model TournamentPlayerStat
 * Pre-aggregated per-tournament statistics per player.
 */
export type TournamentPlayerStat = Prisma.TournamentPlayerStatModel;
/**
 * Model PlayerPassEdge
 * Pass connection graph — upserted on each COMPLETION / ASSIST event.
 */
export type PlayerPassEdge = Prisma.PlayerPassEdgeModel;
/**
 * Model UserSettings
 * Per-user application settings — created on register with defaults.
 */
export type UserSettings = Prisma.UserSettingsModel;
//# sourceMappingURL=browser.d.ts.map