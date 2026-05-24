import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "team" | "player" | "match" | "frisbeeMatchEvent" | "frisbeePlayerStat" | "matchPlayerStat" | "tournament" | "tournamentRosterPlayer" | "tournamentPlayerStat" | "playerPassEdge" | "userSettings";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Team: {
            payload: Prisma.$TeamPayload<ExtArgs>;
            fields: Prisma.TeamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                findFirst: {
                    args: Prisma.TeamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                findMany: {
                    args: Prisma.TeamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                create: {
                    args: Prisma.TeamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                createMany: {
                    args: Prisma.TeamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                delete: {
                    args: Prisma.TeamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                update: {
                    args: Prisma.TeamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                deleteMany: {
                    args: Prisma.TeamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                upsert: {
                    args: Prisma.TeamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                aggregate: {
                    args: Prisma.TeamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeam>;
                };
                groupBy: {
                    args: Prisma.TeamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamCountAggregateOutputType> | number;
                };
            };
        };
        Player: {
            payload: Prisma.$PlayerPayload<ExtArgs>;
            fields: Prisma.PlayerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlayerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>;
                };
                findFirst: {
                    args: Prisma.PlayerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>;
                };
                findMany: {
                    args: Prisma.PlayerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>[];
                };
                create: {
                    args: Prisma.PlayerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>;
                };
                createMany: {
                    args: Prisma.PlayerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>[];
                };
                delete: {
                    args: Prisma.PlayerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>;
                };
                update: {
                    args: Prisma.PlayerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>;
                };
                deleteMany: {
                    args: Prisma.PlayerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlayerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>[];
                };
                upsert: {
                    args: Prisma.PlayerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPayload>;
                };
                aggregate: {
                    args: Prisma.PlayerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlayer>;
                };
                groupBy: {
                    args: Prisma.PlayerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlayerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayerCountAggregateOutputType> | number;
                };
            };
        };
        Match: {
            payload: Prisma.$MatchPayload<ExtArgs>;
            fields: Prisma.MatchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                findFirst: {
                    args: Prisma.MatchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                findMany: {
                    args: Prisma.MatchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                create: {
                    args: Prisma.MatchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                createMany: {
                    args: Prisma.MatchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                delete: {
                    args: Prisma.MatchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                update: {
                    args: Prisma.MatchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                deleteMany: {
                    args: Prisma.MatchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                upsert: {
                    args: Prisma.MatchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                aggregate: {
                    args: Prisma.MatchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatch>;
                };
                groupBy: {
                    args: Prisma.MatchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchCountAggregateOutputType> | number;
                };
            };
        };
        FrisbeeMatchEvent: {
            payload: Prisma.$FrisbeeMatchEventPayload<ExtArgs>;
            fields: Prisma.FrisbeeMatchEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FrisbeeMatchEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FrisbeeMatchEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>;
                };
                findFirst: {
                    args: Prisma.FrisbeeMatchEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FrisbeeMatchEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>;
                };
                findMany: {
                    args: Prisma.FrisbeeMatchEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>[];
                };
                create: {
                    args: Prisma.FrisbeeMatchEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>;
                };
                createMany: {
                    args: Prisma.FrisbeeMatchEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FrisbeeMatchEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>[];
                };
                delete: {
                    args: Prisma.FrisbeeMatchEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>;
                };
                update: {
                    args: Prisma.FrisbeeMatchEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>;
                };
                deleteMany: {
                    args: Prisma.FrisbeeMatchEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FrisbeeMatchEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FrisbeeMatchEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>[];
                };
                upsert: {
                    args: Prisma.FrisbeeMatchEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeeMatchEventPayload>;
                };
                aggregate: {
                    args: Prisma.FrisbeeMatchEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFrisbeeMatchEvent>;
                };
                groupBy: {
                    args: Prisma.FrisbeeMatchEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FrisbeeMatchEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FrisbeeMatchEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FrisbeeMatchEventCountAggregateOutputType> | number;
                };
            };
        };
        FrisbeePlayerStat: {
            payload: Prisma.$FrisbeePlayerStatPayload<ExtArgs>;
            fields: Prisma.FrisbeePlayerStatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FrisbeePlayerStatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FrisbeePlayerStatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>;
                };
                findFirst: {
                    args: Prisma.FrisbeePlayerStatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FrisbeePlayerStatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>;
                };
                findMany: {
                    args: Prisma.FrisbeePlayerStatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>[];
                };
                create: {
                    args: Prisma.FrisbeePlayerStatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>;
                };
                createMany: {
                    args: Prisma.FrisbeePlayerStatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FrisbeePlayerStatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>[];
                };
                delete: {
                    args: Prisma.FrisbeePlayerStatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>;
                };
                update: {
                    args: Prisma.FrisbeePlayerStatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>;
                };
                deleteMany: {
                    args: Prisma.FrisbeePlayerStatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FrisbeePlayerStatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FrisbeePlayerStatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>[];
                };
                upsert: {
                    args: Prisma.FrisbeePlayerStatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FrisbeePlayerStatPayload>;
                };
                aggregate: {
                    args: Prisma.FrisbeePlayerStatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFrisbeePlayerStat>;
                };
                groupBy: {
                    args: Prisma.FrisbeePlayerStatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FrisbeePlayerStatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FrisbeePlayerStatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FrisbeePlayerStatCountAggregateOutputType> | number;
                };
            };
        };
        MatchPlayerStat: {
            payload: Prisma.$MatchPlayerStatPayload<ExtArgs>;
            fields: Prisma.MatchPlayerStatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchPlayerStatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchPlayerStatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>;
                };
                findFirst: {
                    args: Prisma.MatchPlayerStatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchPlayerStatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>;
                };
                findMany: {
                    args: Prisma.MatchPlayerStatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>[];
                };
                create: {
                    args: Prisma.MatchPlayerStatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>;
                };
                createMany: {
                    args: Prisma.MatchPlayerStatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchPlayerStatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>[];
                };
                delete: {
                    args: Prisma.MatchPlayerStatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>;
                };
                update: {
                    args: Prisma.MatchPlayerStatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>;
                };
                deleteMany: {
                    args: Prisma.MatchPlayerStatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchPlayerStatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchPlayerStatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>[];
                };
                upsert: {
                    args: Prisma.MatchPlayerStatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPlayerStatPayload>;
                };
                aggregate: {
                    args: Prisma.MatchPlayerStatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatchPlayerStat>;
                };
                groupBy: {
                    args: Prisma.MatchPlayerStatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchPlayerStatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchPlayerStatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchPlayerStatCountAggregateOutputType> | number;
                };
            };
        };
        Tournament: {
            payload: Prisma.$TournamentPayload<ExtArgs>;
            fields: Prisma.TournamentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TournamentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                findFirst: {
                    args: Prisma.TournamentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                findMany: {
                    args: Prisma.TournamentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>[];
                };
                create: {
                    args: Prisma.TournamentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                createMany: {
                    args: Prisma.TournamentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>[];
                };
                delete: {
                    args: Prisma.TournamentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                update: {
                    args: Prisma.TournamentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                deleteMany: {
                    args: Prisma.TournamentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TournamentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>[];
                };
                upsert: {
                    args: Prisma.TournamentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                aggregate: {
                    args: Prisma.TournamentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTournament>;
                };
                groupBy: {
                    args: Prisma.TournamentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TournamentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentCountAggregateOutputType> | number;
                };
            };
        };
        TournamentRosterPlayer: {
            payload: Prisma.$TournamentRosterPlayerPayload<ExtArgs>;
            fields: Prisma.TournamentRosterPlayerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TournamentRosterPlayerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TournamentRosterPlayerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>;
                };
                findFirst: {
                    args: Prisma.TournamentRosterPlayerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TournamentRosterPlayerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>;
                };
                findMany: {
                    args: Prisma.TournamentRosterPlayerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>[];
                };
                create: {
                    args: Prisma.TournamentRosterPlayerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>;
                };
                createMany: {
                    args: Prisma.TournamentRosterPlayerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TournamentRosterPlayerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>[];
                };
                delete: {
                    args: Prisma.TournamentRosterPlayerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>;
                };
                update: {
                    args: Prisma.TournamentRosterPlayerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>;
                };
                deleteMany: {
                    args: Prisma.TournamentRosterPlayerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TournamentRosterPlayerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TournamentRosterPlayerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>[];
                };
                upsert: {
                    args: Prisma.TournamentRosterPlayerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPlayerPayload>;
                };
                aggregate: {
                    args: Prisma.TournamentRosterPlayerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTournamentRosterPlayer>;
                };
                groupBy: {
                    args: Prisma.TournamentRosterPlayerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentRosterPlayerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TournamentRosterPlayerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentRosterPlayerCountAggregateOutputType> | number;
                };
            };
        };
        TournamentPlayerStat: {
            payload: Prisma.$TournamentPlayerStatPayload<ExtArgs>;
            fields: Prisma.TournamentPlayerStatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TournamentPlayerStatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TournamentPlayerStatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>;
                };
                findFirst: {
                    args: Prisma.TournamentPlayerStatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TournamentPlayerStatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>;
                };
                findMany: {
                    args: Prisma.TournamentPlayerStatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>[];
                };
                create: {
                    args: Prisma.TournamentPlayerStatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>;
                };
                createMany: {
                    args: Prisma.TournamentPlayerStatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TournamentPlayerStatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>[];
                };
                delete: {
                    args: Prisma.TournamentPlayerStatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>;
                };
                update: {
                    args: Prisma.TournamentPlayerStatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>;
                };
                deleteMany: {
                    args: Prisma.TournamentPlayerStatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TournamentPlayerStatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TournamentPlayerStatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>[];
                };
                upsert: {
                    args: Prisma.TournamentPlayerStatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPlayerStatPayload>;
                };
                aggregate: {
                    args: Prisma.TournamentPlayerStatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTournamentPlayerStat>;
                };
                groupBy: {
                    args: Prisma.TournamentPlayerStatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentPlayerStatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TournamentPlayerStatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentPlayerStatCountAggregateOutputType> | number;
                };
            };
        };
        PlayerPassEdge: {
            payload: Prisma.$PlayerPassEdgePayload<ExtArgs>;
            fields: Prisma.PlayerPassEdgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlayerPassEdgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlayerPassEdgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>;
                };
                findFirst: {
                    args: Prisma.PlayerPassEdgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlayerPassEdgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>;
                };
                findMany: {
                    args: Prisma.PlayerPassEdgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>[];
                };
                create: {
                    args: Prisma.PlayerPassEdgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>;
                };
                createMany: {
                    args: Prisma.PlayerPassEdgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlayerPassEdgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>[];
                };
                delete: {
                    args: Prisma.PlayerPassEdgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>;
                };
                update: {
                    args: Prisma.PlayerPassEdgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>;
                };
                deleteMany: {
                    args: Prisma.PlayerPassEdgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlayerPassEdgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlayerPassEdgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>[];
                };
                upsert: {
                    args: Prisma.PlayerPassEdgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayerPassEdgePayload>;
                };
                aggregate: {
                    args: Prisma.PlayerPassEdgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlayerPassEdge>;
                };
                groupBy: {
                    args: Prisma.PlayerPassEdgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayerPassEdgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlayerPassEdgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayerPassEdgeCountAggregateOutputType> | number;
                };
            };
        };
        UserSettings: {
            payload: Prisma.$UserSettingsPayload<ExtArgs>;
            fields: Prisma.UserSettingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                findFirst: {
                    args: Prisma.UserSettingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                findMany: {
                    args: Prisma.UserSettingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>[];
                };
                create: {
                    args: Prisma.UserSettingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                createMany: {
                    args: Prisma.UserSettingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>[];
                };
                delete: {
                    args: Prisma.UserSettingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                update: {
                    args: Prisma.UserSettingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                deleteMany: {
                    args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>[];
                };
                upsert: {
                    args: Prisma.UserSettingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                aggregate: {
                    args: Prisma.UserSettingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserSettings>;
                };
                groupBy: {
                    args: Prisma.UserSettingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSettingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserSettingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSettingsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'SportType'
 */
export type EnumSportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SportType'>;
/**
 * Reference to a field of type 'SportType[]'
 */
export type ListEnumSportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SportType[]'>;
/**
 * Reference to a field of type 'PlayerPosition'
 */
export type EnumPlayerPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerPosition'>;
/**
 * Reference to a field of type 'PlayerPosition[]'
 */
export type ListEnumPlayerPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerPosition[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'MatchStatus'
 */
export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>;
/**
 * Reference to a field of type 'MatchStatus[]'
 */
export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'FrisbeeActionType'
 */
export type EnumFrisbeeActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FrisbeeActionType'>;
/**
 * Reference to a field of type 'FrisbeeActionType[]'
 */
export type ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FrisbeeActionType[]'>;
/**
 * Reference to a field of type 'Theme'
 */
export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>;
/**
 * Reference to a field of type 'Theme[]'
 */
export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>;
/**
 * Reference to a field of type 'Language'
 */
export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>;
/**
 * Reference to a field of type 'Language[]'
 */
export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>;
/**
 * Reference to a field of type 'NameFormat'
 */
export type EnumNameFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NameFormat'>;
/**
 * Reference to a field of type 'NameFormat[]'
 */
export type ListEnumNameFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NameFormat[]'>;
/**
 * Reference to a field of type 'CaptureMode'
 */
export type EnumCaptureModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaptureMode'>;
/**
 * Reference to a field of type 'CaptureMode[]'
 */
export type ListEnumCaptureModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaptureMode[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    team?: Prisma.TeamOmit;
    player?: Prisma.PlayerOmit;
    match?: Prisma.MatchOmit;
    frisbeeMatchEvent?: Prisma.FrisbeeMatchEventOmit;
    frisbeePlayerStat?: Prisma.FrisbeePlayerStatOmit;
    matchPlayerStat?: Prisma.MatchPlayerStatOmit;
    tournament?: Prisma.TournamentOmit;
    tournamentRosterPlayer?: Prisma.TournamentRosterPlayerOmit;
    tournamentPlayerStat?: Prisma.TournamentPlayerStatOmit;
    playerPassEdge?: Prisma.PlayerPassEdgeOmit;
    userSettings?: Prisma.UserSettingsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map