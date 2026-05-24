import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TournamentPlayerStat
 * Pre-aggregated per-tournament statistics per player.
 */
export type TournamentPlayerStatModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentPlayerStatPayload>;
export type AggregateTournamentPlayerStat = {
    _count: TournamentPlayerStatCountAggregateOutputType | null;
    _avg: TournamentPlayerStatAvgAggregateOutputType | null;
    _sum: TournamentPlayerStatSumAggregateOutputType | null;
    _min: TournamentPlayerStatMinAggregateOutputType | null;
    _max: TournamentPlayerStatMaxAggregateOutputType | null;
};
export type TournamentPlayerStatAvgAggregateOutputType = {
    goals: number | null;
    assists: number | null;
    blocks: number | null;
    throwaways: number | null;
    drops: number | null;
    callahans: number | null;
    completions: number | null;
    matchesPlayed: number | null;
    pointsPlayed: number | null;
    plusMinus: number | null;
};
export type TournamentPlayerStatSumAggregateOutputType = {
    goals: number | null;
    assists: number | null;
    blocks: number | null;
    throwaways: number | null;
    drops: number | null;
    callahans: number | null;
    completions: number | null;
    matchesPlayed: number | null;
    pointsPlayed: number | null;
    plusMinus: number | null;
};
export type TournamentPlayerStatMinAggregateOutputType = {
    id: string | null;
    tournamentId: string | null;
    playerId: string | null;
    goals: number | null;
    assists: number | null;
    blocks: number | null;
    throwaways: number | null;
    drops: number | null;
    callahans: number | null;
    completions: number | null;
    matchesPlayed: number | null;
    pointsPlayed: number | null;
    plusMinus: number | null;
};
export type TournamentPlayerStatMaxAggregateOutputType = {
    id: string | null;
    tournamentId: string | null;
    playerId: string | null;
    goals: number | null;
    assists: number | null;
    blocks: number | null;
    throwaways: number | null;
    drops: number | null;
    callahans: number | null;
    completions: number | null;
    matchesPlayed: number | null;
    pointsPlayed: number | null;
    plusMinus: number | null;
};
export type TournamentPlayerStatCountAggregateOutputType = {
    id: number;
    tournamentId: number;
    playerId: number;
    goals: number;
    assists: number;
    blocks: number;
    throwaways: number;
    drops: number;
    callahans: number;
    completions: number;
    matchesPlayed: number;
    pointsPlayed: number;
    plusMinus: number;
    _all: number;
};
export type TournamentPlayerStatAvgAggregateInputType = {
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    plusMinus?: true;
};
export type TournamentPlayerStatSumAggregateInputType = {
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    plusMinus?: true;
};
export type TournamentPlayerStatMinAggregateInputType = {
    id?: true;
    tournamentId?: true;
    playerId?: true;
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    plusMinus?: true;
};
export type TournamentPlayerStatMaxAggregateInputType = {
    id?: true;
    tournamentId?: true;
    playerId?: true;
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    plusMinus?: true;
};
export type TournamentPlayerStatCountAggregateInputType = {
    id?: true;
    tournamentId?: true;
    playerId?: true;
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    plusMinus?: true;
    _all?: true;
};
export type TournamentPlayerStatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentPlayerStat to aggregate.
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentPlayerStats to fetch.
     */
    orderBy?: Prisma.TournamentPlayerStatOrderByWithRelationInput | Prisma.TournamentPlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentPlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentPlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentPlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TournamentPlayerStats
    **/
    _count?: true | TournamentPlayerStatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TournamentPlayerStatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TournamentPlayerStatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentPlayerStatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentPlayerStatMaxAggregateInputType;
};
export type GetTournamentPlayerStatAggregateType<T extends TournamentPlayerStatAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentPlayerStat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentPlayerStat[P]> : Prisma.GetScalarType<T[P], AggregateTournamentPlayerStat[P]>;
};
export type TournamentPlayerStatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentPlayerStatWhereInput;
    orderBy?: Prisma.TournamentPlayerStatOrderByWithAggregationInput | Prisma.TournamentPlayerStatOrderByWithAggregationInput[];
    by: Prisma.TournamentPlayerStatScalarFieldEnum[] | Prisma.TournamentPlayerStatScalarFieldEnum;
    having?: Prisma.TournamentPlayerStatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentPlayerStatCountAggregateInputType | true;
    _avg?: TournamentPlayerStatAvgAggregateInputType;
    _sum?: TournamentPlayerStatSumAggregateInputType;
    _min?: TournamentPlayerStatMinAggregateInputType;
    _max?: TournamentPlayerStatMaxAggregateInputType;
};
export type TournamentPlayerStatGroupByOutputType = {
    id: string;
    tournamentId: string;
    playerId: string;
    goals: number;
    assists: number;
    blocks: number;
    throwaways: number;
    drops: number;
    callahans: number;
    completions: number;
    matchesPlayed: number;
    pointsPlayed: number;
    plusMinus: number;
    _count: TournamentPlayerStatCountAggregateOutputType | null;
    _avg: TournamentPlayerStatAvgAggregateOutputType | null;
    _sum: TournamentPlayerStatSumAggregateOutputType | null;
    _min: TournamentPlayerStatMinAggregateOutputType | null;
    _max: TournamentPlayerStatMaxAggregateOutputType | null;
};
export type GetTournamentPlayerStatGroupByPayload<T extends TournamentPlayerStatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentPlayerStatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentPlayerStatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentPlayerStatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentPlayerStatGroupByOutputType[P]>;
}>>;
export type TournamentPlayerStatWhereInput = {
    AND?: Prisma.TournamentPlayerStatWhereInput | Prisma.TournamentPlayerStatWhereInput[];
    OR?: Prisma.TournamentPlayerStatWhereInput[];
    NOT?: Prisma.TournamentPlayerStatWhereInput | Prisma.TournamentPlayerStatWhereInput[];
    id?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    tournamentId?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    playerId?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    goals?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    assists?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    blocks?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    throwaways?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    drops?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    callahans?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    completions?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    matchesPlayed?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    pointsPlayed?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    plusMinus?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
};
export type TournamentPlayerStatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    player?: Prisma.PlayerOrderByWithRelationInput;
};
export type TournamentPlayerStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tournamentId_playerId?: Prisma.TournamentPlayerStatTournamentIdPlayerIdCompoundUniqueInput;
    AND?: Prisma.TournamentPlayerStatWhereInput | Prisma.TournamentPlayerStatWhereInput[];
    OR?: Prisma.TournamentPlayerStatWhereInput[];
    NOT?: Prisma.TournamentPlayerStatWhereInput | Prisma.TournamentPlayerStatWhereInput[];
    tournamentId?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    playerId?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    goals?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    assists?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    blocks?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    throwaways?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    drops?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    callahans?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    completions?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    matchesPlayed?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    pointsPlayed?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    plusMinus?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
}, "id" | "tournamentId_playerId">;
export type TournamentPlayerStatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
    _count?: Prisma.TournamentPlayerStatCountOrderByAggregateInput;
    _avg?: Prisma.TournamentPlayerStatAvgOrderByAggregateInput;
    _max?: Prisma.TournamentPlayerStatMaxOrderByAggregateInput;
    _min?: Prisma.TournamentPlayerStatMinOrderByAggregateInput;
    _sum?: Prisma.TournamentPlayerStatSumOrderByAggregateInput;
};
export type TournamentPlayerStatScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentPlayerStatScalarWhereWithAggregatesInput | Prisma.TournamentPlayerStatScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentPlayerStatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentPlayerStatScalarWhereWithAggregatesInput | Prisma.TournamentPlayerStatScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TournamentPlayerStat"> | string;
    tournamentId?: Prisma.StringWithAggregatesFilter<"TournamentPlayerStat"> | string;
    playerId?: Prisma.StringWithAggregatesFilter<"TournamentPlayerStat"> | string;
    goals?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    assists?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    blocks?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    throwaways?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    drops?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    callahans?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    completions?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    matchesPlayed?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    pointsPlayed?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
    plusMinus?: Prisma.IntWithAggregatesFilter<"TournamentPlayerStat"> | number;
};
export type TournamentPlayerStatCreateInput = {
    id?: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
    tournament: Prisma.TournamentCreateNestedOneWithoutPlayerStatsInput;
    player: Prisma.PlayerCreateNestedOneWithoutTournamentStatsInput;
};
export type TournamentPlayerStatUncheckedCreateInput = {
    id?: string;
    tournamentId: string;
    playerId: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
};
export type TournamentPlayerStatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutPlayerStatsNestedInput;
    player?: Prisma.PlayerUpdateOneRequiredWithoutTournamentStatsNestedInput;
};
export type TournamentPlayerStatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatCreateManyInput = {
    id?: string;
    tournamentId: string;
    playerId: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
};
export type TournamentPlayerStatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatListRelationFilter = {
    every?: Prisma.TournamentPlayerStatWhereInput;
    some?: Prisma.TournamentPlayerStatWhereInput;
    none?: Prisma.TournamentPlayerStatWhereInput;
};
export type TournamentPlayerStatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentPlayerStatTournamentIdPlayerIdCompoundUniqueInput = {
    tournamentId: string;
    playerId: string;
};
export type TournamentPlayerStatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type TournamentPlayerStatAvgOrderByAggregateInput = {
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type TournamentPlayerStatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type TournamentPlayerStatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type TournamentPlayerStatSumOrderByAggregateInput = {
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type TournamentPlayerStatCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput> | Prisma.TournamentPlayerStatCreateWithoutPlayerInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyPlayerInputEnvelope;
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
};
export type TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput> | Prisma.TournamentPlayerStatCreateWithoutPlayerInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyPlayerInputEnvelope;
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
};
export type TournamentPlayerStatUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput> | Prisma.TournamentPlayerStatCreateWithoutPlayerInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyPlayerInputEnvelope;
    set?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    disconnect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    delete?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    update?: Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutPlayerInput | Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TournamentPlayerStatScalarWhereInput | Prisma.TournamentPlayerStatScalarWhereInput[];
};
export type TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput> | Prisma.TournamentPlayerStatCreateWithoutPlayerInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyPlayerInputEnvelope;
    set?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    disconnect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    delete?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    update?: Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutPlayerInput | Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TournamentPlayerStatScalarWhereInput | Prisma.TournamentPlayerStatScalarWhereInput[];
};
export type TournamentPlayerStatCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput> | Prisma.TournamentPlayerStatCreateWithoutTournamentInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
};
export type TournamentPlayerStatUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput> | Prisma.TournamentPlayerStatCreateWithoutTournamentInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
};
export type TournamentPlayerStatUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput> | Prisma.TournamentPlayerStatCreateWithoutTournamentInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    disconnect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    delete?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    update?: Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentPlayerStatScalarWhereInput | Prisma.TournamentPlayerStatScalarWhereInput[];
};
export type TournamentPlayerStatUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput> | Prisma.TournamentPlayerStatCreateWithoutTournamentInput[] | Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput | Prisma.TournamentPlayerStatCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentPlayerStatUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentPlayerStatCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    disconnect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    delete?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    connect?: Prisma.TournamentPlayerStatWhereUniqueInput | Prisma.TournamentPlayerStatWhereUniqueInput[];
    update?: Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentPlayerStatUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentPlayerStatUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentPlayerStatScalarWhereInput | Prisma.TournamentPlayerStatScalarWhereInput[];
};
export type TournamentPlayerStatCreateWithoutPlayerInput = {
    id?: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
    tournament: Prisma.TournamentCreateNestedOneWithoutPlayerStatsInput;
};
export type TournamentPlayerStatUncheckedCreateWithoutPlayerInput = {
    id?: string;
    tournamentId: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
};
export type TournamentPlayerStatCreateOrConnectWithoutPlayerInput = {
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput>;
};
export type TournamentPlayerStatCreateManyPlayerInputEnvelope = {
    data: Prisma.TournamentPlayerStatCreateManyPlayerInput | Prisma.TournamentPlayerStatCreateManyPlayerInput[];
    skipDuplicates?: boolean;
};
export type TournamentPlayerStatUpsertWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentPlayerStatUpdateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutPlayerInput>;
};
export type TournamentPlayerStatUpdateWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateWithoutPlayerInput, Prisma.TournamentPlayerStatUncheckedUpdateWithoutPlayerInput>;
};
export type TournamentPlayerStatUpdateManyWithWhereWithoutPlayerInput = {
    where: Prisma.TournamentPlayerStatScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateManyMutationInput, Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerInput>;
};
export type TournamentPlayerStatScalarWhereInput = {
    AND?: Prisma.TournamentPlayerStatScalarWhereInput | Prisma.TournamentPlayerStatScalarWhereInput[];
    OR?: Prisma.TournamentPlayerStatScalarWhereInput[];
    NOT?: Prisma.TournamentPlayerStatScalarWhereInput | Prisma.TournamentPlayerStatScalarWhereInput[];
    id?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    tournamentId?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    playerId?: Prisma.StringFilter<"TournamentPlayerStat"> | string;
    goals?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    assists?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    blocks?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    throwaways?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    drops?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    callahans?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    completions?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    matchesPlayed?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    pointsPlayed?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
    plusMinus?: Prisma.IntFilter<"TournamentPlayerStat"> | number;
};
export type TournamentPlayerStatCreateWithoutTournamentInput = {
    id?: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
    player: Prisma.PlayerCreateNestedOneWithoutTournamentStatsInput;
};
export type TournamentPlayerStatUncheckedCreateWithoutTournamentInput = {
    id?: string;
    playerId: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
};
export type TournamentPlayerStatCreateOrConnectWithoutTournamentInput = {
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput>;
};
export type TournamentPlayerStatCreateManyTournamentInputEnvelope = {
    data: Prisma.TournamentPlayerStatCreateManyTournamentInput | Prisma.TournamentPlayerStatCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type TournamentPlayerStatUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentPlayerStatUpdateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.TournamentPlayerStatCreateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedCreateWithoutTournamentInput>;
};
export type TournamentPlayerStatUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateWithoutTournamentInput, Prisma.TournamentPlayerStatUncheckedUpdateWithoutTournamentInput>;
};
export type TournamentPlayerStatUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.TournamentPlayerStatScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateManyMutationInput, Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutTournamentInput>;
};
export type TournamentPlayerStatCreateManyPlayerInput = {
    id?: string;
    tournamentId: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
};
export type TournamentPlayerStatUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutPlayerStatsNestedInput;
};
export type TournamentPlayerStatUncheckedUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatUncheckedUpdateManyWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatCreateManyTournamentInput = {
    id?: string;
    playerId: string;
    goals?: number;
    assists?: number;
    blocks?: number;
    throwaways?: number;
    drops?: number;
    callahans?: number;
    completions?: number;
    matchesPlayed?: number;
    pointsPlayed?: number;
    plusMinus?: number;
};
export type TournamentPlayerStatUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
    player?: Prisma.PlayerUpdateOneRequiredWithoutTournamentStatsNestedInput;
};
export type TournamentPlayerStatUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    goals?: Prisma.IntFieldUpdateOperationsInput | number;
    assists?: Prisma.IntFieldUpdateOperationsInput | number;
    blocks?: Prisma.IntFieldUpdateOperationsInput | number;
    throwaways?: Prisma.IntFieldUpdateOperationsInput | number;
    drops?: Prisma.IntFieldUpdateOperationsInput | number;
    callahans?: Prisma.IntFieldUpdateOperationsInput | number;
    completions?: Prisma.IntFieldUpdateOperationsInput | number;
    matchesPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPlayed?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentPlayerStatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    goals?: boolean;
    assists?: boolean;
    blocks?: boolean;
    throwaways?: boolean;
    drops?: boolean;
    callahans?: boolean;
    completions?: boolean;
    matchesPlayed?: boolean;
    pointsPlayed?: boolean;
    plusMinus?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentPlayerStat"]>;
export type TournamentPlayerStatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    goals?: boolean;
    assists?: boolean;
    blocks?: boolean;
    throwaways?: boolean;
    drops?: boolean;
    callahans?: boolean;
    completions?: boolean;
    matchesPlayed?: boolean;
    pointsPlayed?: boolean;
    plusMinus?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentPlayerStat"]>;
export type TournamentPlayerStatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    goals?: boolean;
    assists?: boolean;
    blocks?: boolean;
    throwaways?: boolean;
    drops?: boolean;
    callahans?: boolean;
    completions?: boolean;
    matchesPlayed?: boolean;
    pointsPlayed?: boolean;
    plusMinus?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentPlayerStat"]>;
export type TournamentPlayerStatSelectScalar = {
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    goals?: boolean;
    assists?: boolean;
    blocks?: boolean;
    throwaways?: boolean;
    drops?: boolean;
    callahans?: boolean;
    completions?: boolean;
    matchesPlayed?: boolean;
    pointsPlayed?: boolean;
    plusMinus?: boolean;
};
export type TournamentPlayerStatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tournamentId" | "playerId" | "goals" | "assists" | "blocks" | "throwaways" | "drops" | "callahans" | "completions" | "matchesPlayed" | "pointsPlayed" | "plusMinus", ExtArgs["result"]["tournamentPlayerStat"]>;
export type TournamentPlayerStatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type TournamentPlayerStatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type TournamentPlayerStatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type $TournamentPlayerStatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentPlayerStat";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        player: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tournamentId: string;
        playerId: string;
        goals: number;
        assists: number;
        blocks: number;
        throwaways: number;
        drops: number;
        callahans: number;
        completions: number;
        matchesPlayed: number;
        pointsPlayed: number;
        plusMinus: number;
    }, ExtArgs["result"]["tournamentPlayerStat"]>;
    composites: {};
};
export type TournamentPlayerStatGetPayload<S extends boolean | null | undefined | TournamentPlayerStatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload, S>;
export type TournamentPlayerStatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentPlayerStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TournamentPlayerStatCountAggregateInputType | true;
};
export interface TournamentPlayerStatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentPlayerStat'];
        meta: {
            name: 'TournamentPlayerStat';
        };
    };
    /**
     * Find zero or one TournamentPlayerStat that matches the filter.
     * @param {TournamentPlayerStatFindUniqueArgs} args - Arguments to find a TournamentPlayerStat
     * @example
     * // Get one TournamentPlayerStat
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentPlayerStatFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TournamentPlayerStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentPlayerStatFindUniqueOrThrowArgs} args - Arguments to find a TournamentPlayerStat
     * @example
     * // Get one TournamentPlayerStat
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentPlayerStatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentPlayerStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatFindFirstArgs} args - Arguments to find a TournamentPlayerStat
     * @example
     * // Get one TournamentPlayerStat
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentPlayerStatFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentPlayerStatFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentPlayerStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatFindFirstOrThrowArgs} args - Arguments to find a TournamentPlayerStat
     * @example
     * // Get one TournamentPlayerStat
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentPlayerStatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentPlayerStatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TournamentPlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentPlayerStats
     * const tournamentPlayerStats = await prisma.tournamentPlayerStat.findMany()
     *
     * // Get first 10 TournamentPlayerStats
     * const tournamentPlayerStats = await prisma.tournamentPlayerStat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentPlayerStatWithIdOnly = await prisma.tournamentPlayerStat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentPlayerStatFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentPlayerStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TournamentPlayerStat.
     * @param {TournamentPlayerStatCreateArgs} args - Arguments to create a TournamentPlayerStat.
     * @example
     * // Create one TournamentPlayerStat
     * const TournamentPlayerStat = await prisma.tournamentPlayerStat.create({
     *   data: {
     *     // ... data to create a TournamentPlayerStat
     *   }
     * })
     *
     */
    create<T extends TournamentPlayerStatCreateArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TournamentPlayerStats.
     * @param {TournamentPlayerStatCreateManyArgs} args - Arguments to create many TournamentPlayerStats.
     * @example
     * // Create many TournamentPlayerStats
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentPlayerStatCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentPlayerStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TournamentPlayerStats and returns the data saved in the database.
     * @param {TournamentPlayerStatCreateManyAndReturnArgs} args - Arguments to create many TournamentPlayerStats.
     * @example
     * // Create many TournamentPlayerStats
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TournamentPlayerStats and only return the `id`
     * const tournamentPlayerStatWithIdOnly = await prisma.tournamentPlayerStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentPlayerStatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentPlayerStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TournamentPlayerStat.
     * @param {TournamentPlayerStatDeleteArgs} args - Arguments to delete one TournamentPlayerStat.
     * @example
     * // Delete one TournamentPlayerStat
     * const TournamentPlayerStat = await prisma.tournamentPlayerStat.delete({
     *   where: {
     *     // ... filter to delete one TournamentPlayerStat
     *   }
     * })
     *
     */
    delete<T extends TournamentPlayerStatDeleteArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TournamentPlayerStat.
     * @param {TournamentPlayerStatUpdateArgs} args - Arguments to update one TournamentPlayerStat.
     * @example
     * // Update one TournamentPlayerStat
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentPlayerStatUpdateArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TournamentPlayerStats.
     * @param {TournamentPlayerStatDeleteManyArgs} args - Arguments to filter TournamentPlayerStats to delete.
     * @example
     * // Delete a few TournamentPlayerStats
     * const { count } = await prisma.tournamentPlayerStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentPlayerStatDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentPlayerStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentPlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentPlayerStats
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentPlayerStatUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentPlayerStats and returns the data updated in the database.
     * @param {TournamentPlayerStatUpdateManyAndReturnArgs} args - Arguments to update many TournamentPlayerStats.
     * @example
     * // Update many TournamentPlayerStats
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TournamentPlayerStats and only return the `id`
     * const tournamentPlayerStatWithIdOnly = await prisma.tournamentPlayerStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TournamentPlayerStatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TournamentPlayerStat.
     * @param {TournamentPlayerStatUpsertArgs} args - Arguments to update or create a TournamentPlayerStat.
     * @example
     * // Update or create a TournamentPlayerStat
     * const tournamentPlayerStat = await prisma.tournamentPlayerStat.upsert({
     *   create: {
     *     // ... data to create a TournamentPlayerStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentPlayerStat we want to update
     *   }
     * })
     */
    upsert<T extends TournamentPlayerStatUpsertArgs>(args: Prisma.SelectSubset<T, TournamentPlayerStatUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentPlayerStatClient<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TournamentPlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatCountArgs} args - Arguments to filter TournamentPlayerStats to count.
     * @example
     * // Count the number of TournamentPlayerStats
     * const count = await prisma.tournamentPlayerStat.count({
     *   where: {
     *     // ... the filter for the TournamentPlayerStats we want to count
     *   }
     * })
    **/
    count<T extends TournamentPlayerStatCountArgs>(args?: Prisma.Subset<T, TournamentPlayerStatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentPlayerStatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TournamentPlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentPlayerStatAggregateArgs>(args: Prisma.Subset<T, TournamentPlayerStatAggregateArgs>): Prisma.PrismaPromise<GetTournamentPlayerStatAggregateType<T>>;
    /**
     * Group by TournamentPlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends TournamentPlayerStatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentPlayerStatGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentPlayerStatGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentPlayerStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentPlayerStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TournamentPlayerStat model
     */
    readonly fields: TournamentPlayerStatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TournamentPlayerStat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentPlayerStatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    player<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the TournamentPlayerStat model
 */
export interface TournamentPlayerStatFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentPlayerStat", 'String'>;
    readonly tournamentId: Prisma.FieldRef<"TournamentPlayerStat", 'String'>;
    readonly playerId: Prisma.FieldRef<"TournamentPlayerStat", 'String'>;
    readonly goals: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly assists: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly blocks: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly throwaways: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly drops: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly callahans: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly completions: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly matchesPlayed: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly pointsPlayed: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
    readonly plusMinus: Prisma.FieldRef<"TournamentPlayerStat", 'Int'>;
}
/**
 * TournamentPlayerStat findUnique
 */
export type TournamentPlayerStatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentPlayerStat to fetch.
     */
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
};
/**
 * TournamentPlayerStat findUniqueOrThrow
 */
export type TournamentPlayerStatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentPlayerStat to fetch.
     */
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
};
/**
 * TournamentPlayerStat findFirst
 */
export type TournamentPlayerStatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentPlayerStat to fetch.
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentPlayerStats to fetch.
     */
    orderBy?: Prisma.TournamentPlayerStatOrderByWithRelationInput | Prisma.TournamentPlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentPlayerStats.
     */
    cursor?: Prisma.TournamentPlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentPlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentPlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentPlayerStats.
     */
    distinct?: Prisma.TournamentPlayerStatScalarFieldEnum | Prisma.TournamentPlayerStatScalarFieldEnum[];
};
/**
 * TournamentPlayerStat findFirstOrThrow
 */
export type TournamentPlayerStatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentPlayerStat to fetch.
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentPlayerStats to fetch.
     */
    orderBy?: Prisma.TournamentPlayerStatOrderByWithRelationInput | Prisma.TournamentPlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentPlayerStats.
     */
    cursor?: Prisma.TournamentPlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentPlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentPlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentPlayerStats.
     */
    distinct?: Prisma.TournamentPlayerStatScalarFieldEnum | Prisma.TournamentPlayerStatScalarFieldEnum[];
};
/**
 * TournamentPlayerStat findMany
 */
export type TournamentPlayerStatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentPlayerStats to fetch.
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentPlayerStats to fetch.
     */
    orderBy?: Prisma.TournamentPlayerStatOrderByWithRelationInput | Prisma.TournamentPlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TournamentPlayerStats.
     */
    cursor?: Prisma.TournamentPlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentPlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentPlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentPlayerStats.
     */
    distinct?: Prisma.TournamentPlayerStatScalarFieldEnum | Prisma.TournamentPlayerStatScalarFieldEnum[];
};
/**
 * TournamentPlayerStat create
 */
export type TournamentPlayerStatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * The data needed to create a TournamentPlayerStat.
     */
    data: Prisma.XOR<Prisma.TournamentPlayerStatCreateInput, Prisma.TournamentPlayerStatUncheckedCreateInput>;
};
/**
 * TournamentPlayerStat createMany
 */
export type TournamentPlayerStatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentPlayerStats.
     */
    data: Prisma.TournamentPlayerStatCreateManyInput | Prisma.TournamentPlayerStatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TournamentPlayerStat createManyAndReturn
 */
export type TournamentPlayerStatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * The data used to create many TournamentPlayerStats.
     */
    data: Prisma.TournamentPlayerStatCreateManyInput | Prisma.TournamentPlayerStatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentPlayerStat update
 */
export type TournamentPlayerStatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * The data needed to update a TournamentPlayerStat.
     */
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateInput, Prisma.TournamentPlayerStatUncheckedUpdateInput>;
    /**
     * Choose, which TournamentPlayerStat to update.
     */
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
};
/**
 * TournamentPlayerStat updateMany
 */
export type TournamentPlayerStatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentPlayerStats.
     */
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateManyMutationInput, Prisma.TournamentPlayerStatUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentPlayerStats to update
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * Limit how many TournamentPlayerStats to update.
     */
    limit?: number;
};
/**
 * TournamentPlayerStat updateManyAndReturn
 */
export type TournamentPlayerStatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * The data used to update TournamentPlayerStats.
     */
    data: Prisma.XOR<Prisma.TournamentPlayerStatUpdateManyMutationInput, Prisma.TournamentPlayerStatUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentPlayerStats to update
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * Limit how many TournamentPlayerStats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentPlayerStat upsert
 */
export type TournamentPlayerStatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * The filter to search for the TournamentPlayerStat to update in case it exists.
     */
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
    /**
     * In case the TournamentPlayerStat found by the `where` argument doesn't exist, create a new TournamentPlayerStat with this data.
     */
    create: Prisma.XOR<Prisma.TournamentPlayerStatCreateInput, Prisma.TournamentPlayerStatUncheckedCreateInput>;
    /**
     * In case the TournamentPlayerStat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentPlayerStatUpdateInput, Prisma.TournamentPlayerStatUncheckedUpdateInput>;
};
/**
 * TournamentPlayerStat delete
 */
export type TournamentPlayerStatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
    /**
     * Filter which TournamentPlayerStat to delete.
     */
    where: Prisma.TournamentPlayerStatWhereUniqueInput;
};
/**
 * TournamentPlayerStat deleteMany
 */
export type TournamentPlayerStatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentPlayerStats to delete
     */
    where?: Prisma.TournamentPlayerStatWhereInput;
    /**
     * Limit how many TournamentPlayerStats to delete.
     */
    limit?: number;
};
/**
 * TournamentPlayerStat without action
 */
export type TournamentPlayerStatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayerStat
     */
    select?: Prisma.TournamentPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentPlayerStat
     */
    omit?: Prisma.TournamentPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentPlayerStatInclude<ExtArgs> | null;
};
//# sourceMappingURL=TournamentPlayerStat.d.ts.map