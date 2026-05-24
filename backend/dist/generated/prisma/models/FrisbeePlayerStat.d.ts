import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model FrisbeePlayerStat
 * Pre-aggregated Ultimate Frisbee career statistics per player.
 */
export type FrisbeePlayerStatModel = runtime.Types.Result.DefaultSelection<Prisma.$FrisbeePlayerStatPayload>;
export type AggregateFrisbeePlayerStat = {
    _count: FrisbeePlayerStatCountAggregateOutputType | null;
    _avg: FrisbeePlayerStatAvgAggregateOutputType | null;
    _sum: FrisbeePlayerStatSumAggregateOutputType | null;
    _min: FrisbeePlayerStatMinAggregateOutputType | null;
    _max: FrisbeePlayerStatMaxAggregateOutputType | null;
};
export type FrisbeePlayerStatAvgAggregateOutputType = {
    goals: number | null;
    assists: number | null;
    blocks: number | null;
    throwaways: number | null;
    drops: number | null;
    callahans: number | null;
    completions: number | null;
    matchesPlayed: number | null;
    pointsPlayed: number | null;
    successfulPasses: number | null;
    pullAttempts: number | null;
    successfulPulls: number | null;
    plusMinus: number | null;
};
export type FrisbeePlayerStatSumAggregateOutputType = {
    goals: number | null;
    assists: number | null;
    blocks: number | null;
    throwaways: number | null;
    drops: number | null;
    callahans: number | null;
    completions: number | null;
    matchesPlayed: number | null;
    pointsPlayed: number | null;
    successfulPasses: number | null;
    pullAttempts: number | null;
    successfulPulls: number | null;
    plusMinus: number | null;
};
export type FrisbeePlayerStatMinAggregateOutputType = {
    id: string | null;
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
    successfulPasses: number | null;
    pullAttempts: number | null;
    successfulPulls: number | null;
    plusMinus: number | null;
};
export type FrisbeePlayerStatMaxAggregateOutputType = {
    id: string | null;
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
    successfulPasses: number | null;
    pullAttempts: number | null;
    successfulPulls: number | null;
    plusMinus: number | null;
};
export type FrisbeePlayerStatCountAggregateOutputType = {
    id: number;
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
    successfulPasses: number;
    pullAttempts: number;
    successfulPulls: number;
    plusMinus: number;
    _all: number;
};
export type FrisbeePlayerStatAvgAggregateInputType = {
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    successfulPasses?: true;
    pullAttempts?: true;
    successfulPulls?: true;
    plusMinus?: true;
};
export type FrisbeePlayerStatSumAggregateInputType = {
    goals?: true;
    assists?: true;
    blocks?: true;
    throwaways?: true;
    drops?: true;
    callahans?: true;
    completions?: true;
    matchesPlayed?: true;
    pointsPlayed?: true;
    successfulPasses?: true;
    pullAttempts?: true;
    successfulPulls?: true;
    plusMinus?: true;
};
export type FrisbeePlayerStatMinAggregateInputType = {
    id?: true;
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
    successfulPasses?: true;
    pullAttempts?: true;
    successfulPulls?: true;
    plusMinus?: true;
};
export type FrisbeePlayerStatMaxAggregateInputType = {
    id?: true;
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
    successfulPasses?: true;
    pullAttempts?: true;
    successfulPulls?: true;
    plusMinus?: true;
};
export type FrisbeePlayerStatCountAggregateInputType = {
    id?: true;
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
    successfulPasses?: true;
    pullAttempts?: true;
    successfulPulls?: true;
    plusMinus?: true;
    _all?: true;
};
export type FrisbeePlayerStatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FrisbeePlayerStat to aggregate.
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeePlayerStats to fetch.
     */
    orderBy?: Prisma.FrisbeePlayerStatOrderByWithRelationInput | Prisma.FrisbeePlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FrisbeePlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeePlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeePlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FrisbeePlayerStats
    **/
    _count?: true | FrisbeePlayerStatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FrisbeePlayerStatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FrisbeePlayerStatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FrisbeePlayerStatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FrisbeePlayerStatMaxAggregateInputType;
};
export type GetFrisbeePlayerStatAggregateType<T extends FrisbeePlayerStatAggregateArgs> = {
    [P in keyof T & keyof AggregateFrisbeePlayerStat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFrisbeePlayerStat[P]> : Prisma.GetScalarType<T[P], AggregateFrisbeePlayerStat[P]>;
};
export type FrisbeePlayerStatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FrisbeePlayerStatWhereInput;
    orderBy?: Prisma.FrisbeePlayerStatOrderByWithAggregationInput | Prisma.FrisbeePlayerStatOrderByWithAggregationInput[];
    by: Prisma.FrisbeePlayerStatScalarFieldEnum[] | Prisma.FrisbeePlayerStatScalarFieldEnum;
    having?: Prisma.FrisbeePlayerStatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FrisbeePlayerStatCountAggregateInputType | true;
    _avg?: FrisbeePlayerStatAvgAggregateInputType;
    _sum?: FrisbeePlayerStatSumAggregateInputType;
    _min?: FrisbeePlayerStatMinAggregateInputType;
    _max?: FrisbeePlayerStatMaxAggregateInputType;
};
export type FrisbeePlayerStatGroupByOutputType = {
    id: string;
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
    successfulPasses: number;
    pullAttempts: number;
    successfulPulls: number;
    plusMinus: number;
    _count: FrisbeePlayerStatCountAggregateOutputType | null;
    _avg: FrisbeePlayerStatAvgAggregateOutputType | null;
    _sum: FrisbeePlayerStatSumAggregateOutputType | null;
    _min: FrisbeePlayerStatMinAggregateOutputType | null;
    _max: FrisbeePlayerStatMaxAggregateOutputType | null;
};
export type GetFrisbeePlayerStatGroupByPayload<T extends FrisbeePlayerStatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FrisbeePlayerStatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FrisbeePlayerStatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FrisbeePlayerStatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FrisbeePlayerStatGroupByOutputType[P]>;
}>>;
export type FrisbeePlayerStatWhereInput = {
    AND?: Prisma.FrisbeePlayerStatWhereInput | Prisma.FrisbeePlayerStatWhereInput[];
    OR?: Prisma.FrisbeePlayerStatWhereInput[];
    NOT?: Prisma.FrisbeePlayerStatWhereInput | Prisma.FrisbeePlayerStatWhereInput[];
    id?: Prisma.StringFilter<"FrisbeePlayerStat"> | string;
    playerId?: Prisma.StringFilter<"FrisbeePlayerStat"> | string;
    goals?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    assists?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    blocks?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    throwaways?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    drops?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    callahans?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    completions?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    matchesPlayed?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    pointsPlayed?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    successfulPasses?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    pullAttempts?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    successfulPulls?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    plusMinus?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
};
export type FrisbeePlayerStatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
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
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
    player?: Prisma.PlayerOrderByWithRelationInput;
};
export type FrisbeePlayerStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    playerId?: string;
    AND?: Prisma.FrisbeePlayerStatWhereInput | Prisma.FrisbeePlayerStatWhereInput[];
    OR?: Prisma.FrisbeePlayerStatWhereInput[];
    NOT?: Prisma.FrisbeePlayerStatWhereInput | Prisma.FrisbeePlayerStatWhereInput[];
    goals?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    assists?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    blocks?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    throwaways?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    drops?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    callahans?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    completions?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    matchesPlayed?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    pointsPlayed?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    successfulPasses?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    pullAttempts?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    successfulPulls?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    plusMinus?: Prisma.IntFilter<"FrisbeePlayerStat"> | number;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
}, "id" | "playerId">;
export type FrisbeePlayerStatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
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
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
    _count?: Prisma.FrisbeePlayerStatCountOrderByAggregateInput;
    _avg?: Prisma.FrisbeePlayerStatAvgOrderByAggregateInput;
    _max?: Prisma.FrisbeePlayerStatMaxOrderByAggregateInput;
    _min?: Prisma.FrisbeePlayerStatMinOrderByAggregateInput;
    _sum?: Prisma.FrisbeePlayerStatSumOrderByAggregateInput;
};
export type FrisbeePlayerStatScalarWhereWithAggregatesInput = {
    AND?: Prisma.FrisbeePlayerStatScalarWhereWithAggregatesInput | Prisma.FrisbeePlayerStatScalarWhereWithAggregatesInput[];
    OR?: Prisma.FrisbeePlayerStatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FrisbeePlayerStatScalarWhereWithAggregatesInput | Prisma.FrisbeePlayerStatScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FrisbeePlayerStat"> | string;
    playerId?: Prisma.StringWithAggregatesFilter<"FrisbeePlayerStat"> | string;
    goals?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    assists?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    blocks?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    throwaways?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    drops?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    callahans?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    completions?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    matchesPlayed?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    pointsPlayed?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    successfulPasses?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    pullAttempts?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    successfulPulls?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
    plusMinus?: Prisma.IntWithAggregatesFilter<"FrisbeePlayerStat"> | number;
};
export type FrisbeePlayerStatCreateInput = {
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
    successfulPasses?: number;
    pullAttempts?: number;
    successfulPulls?: number;
    plusMinus?: number;
    player: Prisma.PlayerCreateNestedOneWithoutStatsInput;
};
export type FrisbeePlayerStatUncheckedCreateInput = {
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
    successfulPasses?: number;
    pullAttempts?: number;
    successfulPulls?: number;
    plusMinus?: number;
};
export type FrisbeePlayerStatUpdateInput = {
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
    successfulPasses?: Prisma.IntFieldUpdateOperationsInput | number;
    pullAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulPulls?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
    player?: Prisma.PlayerUpdateOneRequiredWithoutStatsNestedInput;
};
export type FrisbeePlayerStatUncheckedUpdateInput = {
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
    successfulPasses?: Prisma.IntFieldUpdateOperationsInput | number;
    pullAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulPulls?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FrisbeePlayerStatCreateManyInput = {
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
    successfulPasses?: number;
    pullAttempts?: number;
    successfulPulls?: number;
    plusMinus?: number;
};
export type FrisbeePlayerStatUpdateManyMutationInput = {
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
    successfulPasses?: Prisma.IntFieldUpdateOperationsInput | number;
    pullAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulPulls?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FrisbeePlayerStatUncheckedUpdateManyInput = {
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
    successfulPasses?: Prisma.IntFieldUpdateOperationsInput | number;
    pullAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulPulls?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FrisbeePlayerStatNullableScalarRelationFilter = {
    is?: Prisma.FrisbeePlayerStatWhereInput | null;
    isNot?: Prisma.FrisbeePlayerStatWhereInput | null;
};
export type FrisbeePlayerStatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
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
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type FrisbeePlayerStatAvgOrderByAggregateInput = {
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type FrisbeePlayerStatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
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
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type FrisbeePlayerStatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
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
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type FrisbeePlayerStatSumOrderByAggregateInput = {
    goals?: Prisma.SortOrder;
    assists?: Prisma.SortOrder;
    blocks?: Prisma.SortOrder;
    throwaways?: Prisma.SortOrder;
    drops?: Prisma.SortOrder;
    callahans?: Prisma.SortOrder;
    completions?: Prisma.SortOrder;
    matchesPlayed?: Prisma.SortOrder;
    pointsPlayed?: Prisma.SortOrder;
    successfulPasses?: Prisma.SortOrder;
    pullAttempts?: Prisma.SortOrder;
    successfulPulls?: Prisma.SortOrder;
    plusMinus?: Prisma.SortOrder;
};
export type FrisbeePlayerStatCreateNestedOneWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.FrisbeePlayerStatCreateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedCreateWithoutPlayerInput>;
    connectOrCreate?: Prisma.FrisbeePlayerStatCreateOrConnectWithoutPlayerInput;
    connect?: Prisma.FrisbeePlayerStatWhereUniqueInput;
};
export type FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.FrisbeePlayerStatCreateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedCreateWithoutPlayerInput>;
    connectOrCreate?: Prisma.FrisbeePlayerStatCreateOrConnectWithoutPlayerInput;
    connect?: Prisma.FrisbeePlayerStatWhereUniqueInput;
};
export type FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeePlayerStatCreateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedCreateWithoutPlayerInput>;
    connectOrCreate?: Prisma.FrisbeePlayerStatCreateOrConnectWithoutPlayerInput;
    upsert?: Prisma.FrisbeePlayerStatUpsertWithoutPlayerInput;
    disconnect?: Prisma.FrisbeePlayerStatWhereInput | boolean;
    delete?: Prisma.FrisbeePlayerStatWhereInput | boolean;
    connect?: Prisma.FrisbeePlayerStatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FrisbeePlayerStatUpdateToOneWithWhereWithoutPlayerInput, Prisma.FrisbeePlayerStatUpdateWithoutPlayerInput>, Prisma.FrisbeePlayerStatUncheckedUpdateWithoutPlayerInput>;
};
export type FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeePlayerStatCreateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedCreateWithoutPlayerInput>;
    connectOrCreate?: Prisma.FrisbeePlayerStatCreateOrConnectWithoutPlayerInput;
    upsert?: Prisma.FrisbeePlayerStatUpsertWithoutPlayerInput;
    disconnect?: Prisma.FrisbeePlayerStatWhereInput | boolean;
    delete?: Prisma.FrisbeePlayerStatWhereInput | boolean;
    connect?: Prisma.FrisbeePlayerStatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FrisbeePlayerStatUpdateToOneWithWhereWithoutPlayerInput, Prisma.FrisbeePlayerStatUpdateWithoutPlayerInput>, Prisma.FrisbeePlayerStatUncheckedUpdateWithoutPlayerInput>;
};
export type FrisbeePlayerStatCreateWithoutPlayerInput = {
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
    successfulPasses?: number;
    pullAttempts?: number;
    successfulPulls?: number;
    plusMinus?: number;
};
export type FrisbeePlayerStatUncheckedCreateWithoutPlayerInput = {
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
    successfulPasses?: number;
    pullAttempts?: number;
    successfulPulls?: number;
    plusMinus?: number;
};
export type FrisbeePlayerStatCreateOrConnectWithoutPlayerInput = {
    where: Prisma.FrisbeePlayerStatWhereUniqueInput;
    create: Prisma.XOR<Prisma.FrisbeePlayerStatCreateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedCreateWithoutPlayerInput>;
};
export type FrisbeePlayerStatUpsertWithoutPlayerInput = {
    update: Prisma.XOR<Prisma.FrisbeePlayerStatUpdateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.FrisbeePlayerStatCreateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedCreateWithoutPlayerInput>;
    where?: Prisma.FrisbeePlayerStatWhereInput;
};
export type FrisbeePlayerStatUpdateToOneWithWhereWithoutPlayerInput = {
    where?: Prisma.FrisbeePlayerStatWhereInput;
    data: Prisma.XOR<Prisma.FrisbeePlayerStatUpdateWithoutPlayerInput, Prisma.FrisbeePlayerStatUncheckedUpdateWithoutPlayerInput>;
};
export type FrisbeePlayerStatUpdateWithoutPlayerInput = {
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
    successfulPasses?: Prisma.IntFieldUpdateOperationsInput | number;
    pullAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulPulls?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FrisbeePlayerStatUncheckedUpdateWithoutPlayerInput = {
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
    successfulPasses?: Prisma.IntFieldUpdateOperationsInput | number;
    pullAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulPulls?: Prisma.IntFieldUpdateOperationsInput | number;
    plusMinus?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FrisbeePlayerStatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
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
    successfulPasses?: boolean;
    pullAttempts?: boolean;
    successfulPulls?: boolean;
    plusMinus?: boolean;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["frisbeePlayerStat"]>;
export type FrisbeePlayerStatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
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
    successfulPasses?: boolean;
    pullAttempts?: boolean;
    successfulPulls?: boolean;
    plusMinus?: boolean;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["frisbeePlayerStat"]>;
export type FrisbeePlayerStatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
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
    successfulPasses?: boolean;
    pullAttempts?: boolean;
    successfulPulls?: boolean;
    plusMinus?: boolean;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["frisbeePlayerStat"]>;
export type FrisbeePlayerStatSelectScalar = {
    id?: boolean;
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
    successfulPasses?: boolean;
    pullAttempts?: boolean;
    successfulPulls?: boolean;
    plusMinus?: boolean;
};
export type FrisbeePlayerStatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "playerId" | "goals" | "assists" | "blocks" | "throwaways" | "drops" | "callahans" | "completions" | "matchesPlayed" | "pointsPlayed" | "successfulPasses" | "pullAttempts" | "successfulPulls" | "plusMinus", ExtArgs["result"]["frisbeePlayerStat"]>;
export type FrisbeePlayerStatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type FrisbeePlayerStatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type FrisbeePlayerStatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type $FrisbeePlayerStatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FrisbeePlayerStat";
    objects: {
        player: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
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
        successfulPasses: number;
        pullAttempts: number;
        successfulPulls: number;
        plusMinus: number;
    }, ExtArgs["result"]["frisbeePlayerStat"]>;
    composites: {};
};
export type FrisbeePlayerStatGetPayload<S extends boolean | null | undefined | FrisbeePlayerStatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload, S>;
export type FrisbeePlayerStatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FrisbeePlayerStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FrisbeePlayerStatCountAggregateInputType | true;
};
export interface FrisbeePlayerStatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FrisbeePlayerStat'];
        meta: {
            name: 'FrisbeePlayerStat';
        };
    };
    /**
     * Find zero or one FrisbeePlayerStat that matches the filter.
     * @param {FrisbeePlayerStatFindUniqueArgs} args - Arguments to find a FrisbeePlayerStat
     * @example
     * // Get one FrisbeePlayerStat
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrisbeePlayerStatFindUniqueArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FrisbeePlayerStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrisbeePlayerStatFindUniqueOrThrowArgs} args - Arguments to find a FrisbeePlayerStat
     * @example
     * // Get one FrisbeePlayerStat
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrisbeePlayerStatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FrisbeePlayerStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatFindFirstArgs} args - Arguments to find a FrisbeePlayerStat
     * @example
     * // Get one FrisbeePlayerStat
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrisbeePlayerStatFindFirstArgs>(args?: Prisma.SelectSubset<T, FrisbeePlayerStatFindFirstArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FrisbeePlayerStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatFindFirstOrThrowArgs} args - Arguments to find a FrisbeePlayerStat
     * @example
     * // Get one FrisbeePlayerStat
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrisbeePlayerStatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FrisbeePlayerStatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FrisbeePlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrisbeePlayerStats
     * const frisbeePlayerStats = await prisma.frisbeePlayerStat.findMany()
     *
     * // Get first 10 FrisbeePlayerStats
     * const frisbeePlayerStats = await prisma.frisbeePlayerStat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const frisbeePlayerStatWithIdOnly = await prisma.frisbeePlayerStat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FrisbeePlayerStatFindManyArgs>(args?: Prisma.SelectSubset<T, FrisbeePlayerStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FrisbeePlayerStat.
     * @param {FrisbeePlayerStatCreateArgs} args - Arguments to create a FrisbeePlayerStat.
     * @example
     * // Create one FrisbeePlayerStat
     * const FrisbeePlayerStat = await prisma.frisbeePlayerStat.create({
     *   data: {
     *     // ... data to create a FrisbeePlayerStat
     *   }
     * })
     *
     */
    create<T extends FrisbeePlayerStatCreateArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatCreateArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FrisbeePlayerStats.
     * @param {FrisbeePlayerStatCreateManyArgs} args - Arguments to create many FrisbeePlayerStats.
     * @example
     * // Create many FrisbeePlayerStats
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FrisbeePlayerStatCreateManyArgs>(args?: Prisma.SelectSubset<T, FrisbeePlayerStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FrisbeePlayerStats and returns the data saved in the database.
     * @param {FrisbeePlayerStatCreateManyAndReturnArgs} args - Arguments to create many FrisbeePlayerStats.
     * @example
     * // Create many FrisbeePlayerStats
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FrisbeePlayerStats and only return the `id`
     * const frisbeePlayerStatWithIdOnly = await prisma.frisbeePlayerStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FrisbeePlayerStatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FrisbeePlayerStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FrisbeePlayerStat.
     * @param {FrisbeePlayerStatDeleteArgs} args - Arguments to delete one FrisbeePlayerStat.
     * @example
     * // Delete one FrisbeePlayerStat
     * const FrisbeePlayerStat = await prisma.frisbeePlayerStat.delete({
     *   where: {
     *     // ... filter to delete one FrisbeePlayerStat
     *   }
     * })
     *
     */
    delete<T extends FrisbeePlayerStatDeleteArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatDeleteArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FrisbeePlayerStat.
     * @param {FrisbeePlayerStatUpdateArgs} args - Arguments to update one FrisbeePlayerStat.
     * @example
     * // Update one FrisbeePlayerStat
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FrisbeePlayerStatUpdateArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatUpdateArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FrisbeePlayerStats.
     * @param {FrisbeePlayerStatDeleteManyArgs} args - Arguments to filter FrisbeePlayerStats to delete.
     * @example
     * // Delete a few FrisbeePlayerStats
     * const { count } = await prisma.frisbeePlayerStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FrisbeePlayerStatDeleteManyArgs>(args?: Prisma.SelectSubset<T, FrisbeePlayerStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FrisbeePlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrisbeePlayerStats
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FrisbeePlayerStatUpdateManyArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FrisbeePlayerStats and returns the data updated in the database.
     * @param {FrisbeePlayerStatUpdateManyAndReturnArgs} args - Arguments to update many FrisbeePlayerStats.
     * @example
     * // Update many FrisbeePlayerStats
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FrisbeePlayerStats and only return the `id`
     * const frisbeePlayerStatWithIdOnly = await prisma.frisbeePlayerStat.updateManyAndReturn({
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
    updateManyAndReturn<T extends FrisbeePlayerStatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FrisbeePlayerStat.
     * @param {FrisbeePlayerStatUpsertArgs} args - Arguments to update or create a FrisbeePlayerStat.
     * @example
     * // Update or create a FrisbeePlayerStat
     * const frisbeePlayerStat = await prisma.frisbeePlayerStat.upsert({
     *   create: {
     *     // ... data to create a FrisbeePlayerStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrisbeePlayerStat we want to update
     *   }
     * })
     */
    upsert<T extends FrisbeePlayerStatUpsertArgs>(args: Prisma.SelectSubset<T, FrisbeePlayerStatUpsertArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FrisbeePlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatCountArgs} args - Arguments to filter FrisbeePlayerStats to count.
     * @example
     * // Count the number of FrisbeePlayerStats
     * const count = await prisma.frisbeePlayerStat.count({
     *   where: {
     *     // ... the filter for the FrisbeePlayerStats we want to count
     *   }
     * })
    **/
    count<T extends FrisbeePlayerStatCountArgs>(args?: Prisma.Subset<T, FrisbeePlayerStatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FrisbeePlayerStatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FrisbeePlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrisbeePlayerStatAggregateArgs>(args: Prisma.Subset<T, FrisbeePlayerStatAggregateArgs>): Prisma.PrismaPromise<GetFrisbeePlayerStatAggregateType<T>>;
    /**
     * Group by FrisbeePlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeePlayerStatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FrisbeePlayerStatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FrisbeePlayerStatGroupByArgs['orderBy'];
    } : {
        orderBy?: FrisbeePlayerStatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FrisbeePlayerStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrisbeePlayerStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FrisbeePlayerStat model
     */
    readonly fields: FrisbeePlayerStatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FrisbeePlayerStat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FrisbeePlayerStatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the FrisbeePlayerStat model
 */
export interface FrisbeePlayerStatFieldRefs {
    readonly id: Prisma.FieldRef<"FrisbeePlayerStat", 'String'>;
    readonly playerId: Prisma.FieldRef<"FrisbeePlayerStat", 'String'>;
    readonly goals: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly assists: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly blocks: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly throwaways: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly drops: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly callahans: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly completions: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly matchesPlayed: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly pointsPlayed: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly successfulPasses: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly pullAttempts: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly successfulPulls: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
    readonly plusMinus: Prisma.FieldRef<"FrisbeePlayerStat", 'Int'>;
}
/**
 * FrisbeePlayerStat findUnique
 */
export type FrisbeePlayerStatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which FrisbeePlayerStat to fetch.
     */
    where: Prisma.FrisbeePlayerStatWhereUniqueInput;
};
/**
 * FrisbeePlayerStat findUniqueOrThrow
 */
export type FrisbeePlayerStatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which FrisbeePlayerStat to fetch.
     */
    where: Prisma.FrisbeePlayerStatWhereUniqueInput;
};
/**
 * FrisbeePlayerStat findFirst
 */
export type FrisbeePlayerStatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which FrisbeePlayerStat to fetch.
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeePlayerStats to fetch.
     */
    orderBy?: Prisma.FrisbeePlayerStatOrderByWithRelationInput | Prisma.FrisbeePlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FrisbeePlayerStats.
     */
    cursor?: Prisma.FrisbeePlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeePlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeePlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FrisbeePlayerStats.
     */
    distinct?: Prisma.FrisbeePlayerStatScalarFieldEnum | Prisma.FrisbeePlayerStatScalarFieldEnum[];
};
/**
 * FrisbeePlayerStat findFirstOrThrow
 */
export type FrisbeePlayerStatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which FrisbeePlayerStat to fetch.
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeePlayerStats to fetch.
     */
    orderBy?: Prisma.FrisbeePlayerStatOrderByWithRelationInput | Prisma.FrisbeePlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FrisbeePlayerStats.
     */
    cursor?: Prisma.FrisbeePlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeePlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeePlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FrisbeePlayerStats.
     */
    distinct?: Prisma.FrisbeePlayerStatScalarFieldEnum | Prisma.FrisbeePlayerStatScalarFieldEnum[];
};
/**
 * FrisbeePlayerStat findMany
 */
export type FrisbeePlayerStatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * Filter, which FrisbeePlayerStats to fetch.
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeePlayerStats to fetch.
     */
    orderBy?: Prisma.FrisbeePlayerStatOrderByWithRelationInput | Prisma.FrisbeePlayerStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FrisbeePlayerStats.
     */
    cursor?: Prisma.FrisbeePlayerStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeePlayerStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeePlayerStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FrisbeePlayerStats.
     */
    distinct?: Prisma.FrisbeePlayerStatScalarFieldEnum | Prisma.FrisbeePlayerStatScalarFieldEnum[];
};
/**
 * FrisbeePlayerStat create
 */
export type FrisbeePlayerStatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * The data needed to create a FrisbeePlayerStat.
     */
    data: Prisma.XOR<Prisma.FrisbeePlayerStatCreateInput, Prisma.FrisbeePlayerStatUncheckedCreateInput>;
};
/**
 * FrisbeePlayerStat createMany
 */
export type FrisbeePlayerStatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FrisbeePlayerStats.
     */
    data: Prisma.FrisbeePlayerStatCreateManyInput | Prisma.FrisbeePlayerStatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FrisbeePlayerStat createManyAndReturn
 */
export type FrisbeePlayerStatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * The data used to create many FrisbeePlayerStats.
     */
    data: Prisma.FrisbeePlayerStatCreateManyInput | Prisma.FrisbeePlayerStatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FrisbeePlayerStat update
 */
export type FrisbeePlayerStatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * The data needed to update a FrisbeePlayerStat.
     */
    data: Prisma.XOR<Prisma.FrisbeePlayerStatUpdateInput, Prisma.FrisbeePlayerStatUncheckedUpdateInput>;
    /**
     * Choose, which FrisbeePlayerStat to update.
     */
    where: Prisma.FrisbeePlayerStatWhereUniqueInput;
};
/**
 * FrisbeePlayerStat updateMany
 */
export type FrisbeePlayerStatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FrisbeePlayerStats.
     */
    data: Prisma.XOR<Prisma.FrisbeePlayerStatUpdateManyMutationInput, Prisma.FrisbeePlayerStatUncheckedUpdateManyInput>;
    /**
     * Filter which FrisbeePlayerStats to update
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * Limit how many FrisbeePlayerStats to update.
     */
    limit?: number;
};
/**
 * FrisbeePlayerStat updateManyAndReturn
 */
export type FrisbeePlayerStatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * The data used to update FrisbeePlayerStats.
     */
    data: Prisma.XOR<Prisma.FrisbeePlayerStatUpdateManyMutationInput, Prisma.FrisbeePlayerStatUncheckedUpdateManyInput>;
    /**
     * Filter which FrisbeePlayerStats to update
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * Limit how many FrisbeePlayerStats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FrisbeePlayerStat upsert
 */
export type FrisbeePlayerStatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * The filter to search for the FrisbeePlayerStat to update in case it exists.
     */
    where: Prisma.FrisbeePlayerStatWhereUniqueInput;
    /**
     * In case the FrisbeePlayerStat found by the `where` argument doesn't exist, create a new FrisbeePlayerStat with this data.
     */
    create: Prisma.XOR<Prisma.FrisbeePlayerStatCreateInput, Prisma.FrisbeePlayerStatUncheckedCreateInput>;
    /**
     * In case the FrisbeePlayerStat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FrisbeePlayerStatUpdateInput, Prisma.FrisbeePlayerStatUncheckedUpdateInput>;
};
/**
 * FrisbeePlayerStat delete
 */
export type FrisbeePlayerStatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
    /**
     * Filter which FrisbeePlayerStat to delete.
     */
    where: Prisma.FrisbeePlayerStatWhereUniqueInput;
};
/**
 * FrisbeePlayerStat deleteMany
 */
export type FrisbeePlayerStatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FrisbeePlayerStats to delete
     */
    where?: Prisma.FrisbeePlayerStatWhereInput;
    /**
     * Limit how many FrisbeePlayerStats to delete.
     */
    limit?: number;
};
/**
 * FrisbeePlayerStat without action
 */
export type FrisbeePlayerStatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeePlayerStat
     */
    select?: Prisma.FrisbeePlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeePlayerStat
     */
    omit?: Prisma.FrisbeePlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeePlayerStatInclude<ExtArgs> | null;
};
//# sourceMappingURL=FrisbeePlayerStat.d.ts.map