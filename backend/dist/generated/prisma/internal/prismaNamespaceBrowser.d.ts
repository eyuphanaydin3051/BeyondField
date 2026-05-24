import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Team: "Team";
    readonly Player: "Player";
    readonly Match: "Match";
    readonly FrisbeeMatchEvent: "FrisbeeMatchEvent";
    readonly FrisbeePlayerStat: "FrisbeePlayerStat";
    readonly MatchPlayerStat: "MatchPlayerStat";
    readonly Tournament: "Tournament";
    readonly TournamentRosterPlayer: "TournamentRosterPlayer";
    readonly TournamentPlayerStat: "TournamentPlayerStat";
    readonly PlayerPassEdge: "PlayerPassEdge";
    readonly UserSettings: "UserSettings";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const TeamScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly logoUrl: "logoUrl";
    readonly inviteCode: "inviteCode";
    readonly ownerId: "ownerId";
    readonly sportType: "sportType";
    readonly createdAt: "createdAt";
};
export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];
export declare const PlayerScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly position: "position";
    readonly jerseyNumber: "jerseyNumber";
    readonly photoUrl: "photoUrl";
    readonly teamId: "teamId";
    readonly createdAt: "createdAt";
};
export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly homeTeamId: "homeTeamId";
    readonly awayTeamId: "awayTeamId";
    readonly opponentName: "opponentName";
    readonly tournamentId: "tournamentId";
    readonly matchDate: "matchDate";
    readonly status: "status";
    readonly sportType: "sportType";
    readonly homeScore: "homeScore";
    readonly awayScore: "awayScore";
    readonly youtubeVideoId: "youtubeVideoId";
    readonly durationSeconds: "durationSeconds";
    readonly finished: "finished";
    readonly createdAt: "createdAt";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const FrisbeeMatchEventScalarFieldEnum: {
    readonly id: "id";
    readonly matchId: "matchId";
    readonly playerId: "playerId";
    readonly secondaryPlayerId: "secondaryPlayerId";
    readonly actionType: "actionType";
    readonly minute: "minute";
    readonly videoTimestampSeconds: "videoTimestampSeconds";
    readonly period: "period";
    readonly scoreUsAtEvent: "scoreUsAtEvent";
    readonly scoreThemAtEvent: "scoreThemAtEvent";
    readonly createdAt: "createdAt";
};
export type FrisbeeMatchEventScalarFieldEnum = (typeof FrisbeeMatchEventScalarFieldEnum)[keyof typeof FrisbeeMatchEventScalarFieldEnum];
export declare const FrisbeePlayerStatScalarFieldEnum: {
    readonly id: "id";
    readonly playerId: "playerId";
    readonly goals: "goals";
    readonly assists: "assists";
    readonly blocks: "blocks";
    readonly throwaways: "throwaways";
    readonly drops: "drops";
    readonly callahans: "callahans";
    readonly completions: "completions";
    readonly matchesPlayed: "matchesPlayed";
    readonly pointsPlayed: "pointsPlayed";
    readonly successfulPasses: "successfulPasses";
    readonly pullAttempts: "pullAttempts";
    readonly successfulPulls: "successfulPulls";
    readonly plusMinus: "plusMinus";
};
export type FrisbeePlayerStatScalarFieldEnum = (typeof FrisbeePlayerStatScalarFieldEnum)[keyof typeof FrisbeePlayerStatScalarFieldEnum];
export declare const MatchPlayerStatScalarFieldEnum: {
    readonly id: "id";
    readonly matchId: "matchId";
    readonly playerId: "playerId";
    readonly goals: "goals";
    readonly assists: "assists";
    readonly blocks: "blocks";
    readonly throwaways: "throwaways";
    readonly drops: "drops";
    readonly callahans: "callahans";
    readonly completions: "completions";
    readonly pointsPlayed: "pointsPlayed";
    readonly plusMinus: "plusMinus";
};
export type MatchPlayerStatScalarFieldEnum = (typeof MatchPlayerStatScalarFieldEnum)[keyof typeof MatchPlayerStatScalarFieldEnum];
export declare const TournamentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly ownerTeamId: "ownerTeamId";
    readonly sportType: "sportType";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly location: "location";
    readonly createdAt: "createdAt";
};
export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum];
export declare const TournamentRosterPlayerScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly playerId: "playerId";
    readonly jerseyOverride: "jerseyOverride";
};
export type TournamentRosterPlayerScalarFieldEnum = (typeof TournamentRosterPlayerScalarFieldEnum)[keyof typeof TournamentRosterPlayerScalarFieldEnum];
export declare const TournamentPlayerStatScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly playerId: "playerId";
    readonly goals: "goals";
    readonly assists: "assists";
    readonly blocks: "blocks";
    readonly throwaways: "throwaways";
    readonly drops: "drops";
    readonly callahans: "callahans";
    readonly completions: "completions";
    readonly matchesPlayed: "matchesPlayed";
    readonly pointsPlayed: "pointsPlayed";
    readonly plusMinus: "plusMinus";
};
export type TournamentPlayerStatScalarFieldEnum = (typeof TournamentPlayerStatScalarFieldEnum)[keyof typeof TournamentPlayerStatScalarFieldEnum];
export declare const PlayerPassEdgeScalarFieldEnum: {
    readonly id: "id";
    readonly fromPlayerId: "fromPlayerId";
    readonly toPlayerId: "toPlayerId";
    readonly count: "count";
};
export type PlayerPassEdgeScalarFieldEnum = (typeof PlayerPassEdgeScalarFieldEnum)[keyof typeof PlayerPassEdgeScalarFieldEnum];
export declare const UserSettingsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly theme: "theme";
    readonly language: "language";
    readonly nameFormat: "nameFormat";
    readonly defaultCaptureMode: "defaultCaptureMode";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map