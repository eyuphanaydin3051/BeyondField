import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
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
//# sourceMappingURL=client.d.ts.map