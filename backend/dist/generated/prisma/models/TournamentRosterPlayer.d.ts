import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TournamentRosterPlayer
 * Per-tournament roster — allows jersey number overrides.
 */
export type TournamentRosterPlayerModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentRosterPlayerPayload>;
export type AggregateTournamentRosterPlayer = {
    _count: TournamentRosterPlayerCountAggregateOutputType | null;
    _avg: TournamentRosterPlayerAvgAggregateOutputType | null;
    _sum: TournamentRosterPlayerSumAggregateOutputType | null;
    _min: TournamentRosterPlayerMinAggregateOutputType | null;
    _max: TournamentRosterPlayerMaxAggregateOutputType | null;
};
export type TournamentRosterPlayerAvgAggregateOutputType = {
    jerseyOverride: number | null;
};
export type TournamentRosterPlayerSumAggregateOutputType = {
    jerseyOverride: number | null;
};
export type TournamentRosterPlayerMinAggregateOutputType = {
    id: string | null;
    tournamentId: string | null;
    playerId: string | null;
    jerseyOverride: number | null;
};
export type TournamentRosterPlayerMaxAggregateOutputType = {
    id: string | null;
    tournamentId: string | null;
    playerId: string | null;
    jerseyOverride: number | null;
};
export type TournamentRosterPlayerCountAggregateOutputType = {
    id: number;
    tournamentId: number;
    playerId: number;
    jerseyOverride: number;
    _all: number;
};
export type TournamentRosterPlayerAvgAggregateInputType = {
    jerseyOverride?: true;
};
export type TournamentRosterPlayerSumAggregateInputType = {
    jerseyOverride?: true;
};
export type TournamentRosterPlayerMinAggregateInputType = {
    id?: true;
    tournamentId?: true;
    playerId?: true;
    jerseyOverride?: true;
};
export type TournamentRosterPlayerMaxAggregateInputType = {
    id?: true;
    tournamentId?: true;
    playerId?: true;
    jerseyOverride?: true;
};
export type TournamentRosterPlayerCountAggregateInputType = {
    id?: true;
    tournamentId?: true;
    playerId?: true;
    jerseyOverride?: true;
    _all?: true;
};
export type TournamentRosterPlayerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentRosterPlayer to aggregate.
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosterPlayers to fetch.
     */
    orderBy?: Prisma.TournamentRosterPlayerOrderByWithRelationInput | Prisma.TournamentRosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentRosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TournamentRosterPlayers
    **/
    _count?: true | TournamentRosterPlayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TournamentRosterPlayerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TournamentRosterPlayerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentRosterPlayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentRosterPlayerMaxAggregateInputType;
};
export type GetTournamentRosterPlayerAggregateType<T extends TournamentRosterPlayerAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentRosterPlayer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentRosterPlayer[P]> : Prisma.GetScalarType<T[P], AggregateTournamentRosterPlayer[P]>;
};
export type TournamentRosterPlayerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRosterPlayerWhereInput;
    orderBy?: Prisma.TournamentRosterPlayerOrderByWithAggregationInput | Prisma.TournamentRosterPlayerOrderByWithAggregationInput[];
    by: Prisma.TournamentRosterPlayerScalarFieldEnum[] | Prisma.TournamentRosterPlayerScalarFieldEnum;
    having?: Prisma.TournamentRosterPlayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentRosterPlayerCountAggregateInputType | true;
    _avg?: TournamentRosterPlayerAvgAggregateInputType;
    _sum?: TournamentRosterPlayerSumAggregateInputType;
    _min?: TournamentRosterPlayerMinAggregateInputType;
    _max?: TournamentRosterPlayerMaxAggregateInputType;
};
export type TournamentRosterPlayerGroupByOutputType = {
    id: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride: number | null;
    _count: TournamentRosterPlayerCountAggregateOutputType | null;
    _avg: TournamentRosterPlayerAvgAggregateOutputType | null;
    _sum: TournamentRosterPlayerSumAggregateOutputType | null;
    _min: TournamentRosterPlayerMinAggregateOutputType | null;
    _max: TournamentRosterPlayerMaxAggregateOutputType | null;
};
export type GetTournamentRosterPlayerGroupByPayload<T extends TournamentRosterPlayerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentRosterPlayerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentRosterPlayerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentRosterPlayerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentRosterPlayerGroupByOutputType[P]>;
}>>;
export type TournamentRosterPlayerWhereInput = {
    AND?: Prisma.TournamentRosterPlayerWhereInput | Prisma.TournamentRosterPlayerWhereInput[];
    OR?: Prisma.TournamentRosterPlayerWhereInput[];
    NOT?: Prisma.TournamentRosterPlayerWhereInput | Prisma.TournamentRosterPlayerWhereInput[];
    id?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    tournamentId?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    playerId?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    jerseyOverride?: Prisma.IntNullableFilter<"TournamentRosterPlayer"> | number | null;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
};
export type TournamentRosterPlayerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    jerseyOverride?: Prisma.SortOrderInput | Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    player?: Prisma.PlayerOrderByWithRelationInput;
};
export type TournamentRosterPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tournamentId_playerId?: Prisma.TournamentRosterPlayerTournamentIdPlayerIdCompoundUniqueInput;
    AND?: Prisma.TournamentRosterPlayerWhereInput | Prisma.TournamentRosterPlayerWhereInput[];
    OR?: Prisma.TournamentRosterPlayerWhereInput[];
    NOT?: Prisma.TournamentRosterPlayerWhereInput | Prisma.TournamentRosterPlayerWhereInput[];
    tournamentId?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    playerId?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    jerseyOverride?: Prisma.IntNullableFilter<"TournamentRosterPlayer"> | number | null;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
}, "id" | "tournamentId_playerId">;
export type TournamentRosterPlayerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    jerseyOverride?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TournamentRosterPlayerCountOrderByAggregateInput;
    _avg?: Prisma.TournamentRosterPlayerAvgOrderByAggregateInput;
    _max?: Prisma.TournamentRosterPlayerMaxOrderByAggregateInput;
    _min?: Prisma.TournamentRosterPlayerMinOrderByAggregateInput;
    _sum?: Prisma.TournamentRosterPlayerSumOrderByAggregateInput;
};
export type TournamentRosterPlayerScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentRosterPlayerScalarWhereWithAggregatesInput | Prisma.TournamentRosterPlayerScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentRosterPlayerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentRosterPlayerScalarWhereWithAggregatesInput | Prisma.TournamentRosterPlayerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TournamentRosterPlayer"> | string;
    tournamentId?: Prisma.StringWithAggregatesFilter<"TournamentRosterPlayer"> | string;
    playerId?: Prisma.StringWithAggregatesFilter<"TournamentRosterPlayer"> | string;
    jerseyOverride?: Prisma.IntNullableWithAggregatesFilter<"TournamentRosterPlayer"> | number | null;
};
export type TournamentRosterPlayerCreateInput = {
    id?: string;
    jerseyOverride?: number | null;
    tournament: Prisma.TournamentCreateNestedOneWithoutRosterPlayersInput;
    player: Prisma.PlayerCreateNestedOneWithoutTournamentRostersInput;
};
export type TournamentRosterPlayerUncheckedCreateInput = {
    id?: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride?: number | null;
};
export type TournamentRosterPlayerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutRosterPlayersNestedInput;
    player?: Prisma.PlayerUpdateOneRequiredWithoutTournamentRostersNestedInput;
};
export type TournamentRosterPlayerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerCreateManyInput = {
    id?: string;
    tournamentId: string;
    playerId: string;
    jerseyOverride?: number | null;
};
export type TournamentRosterPlayerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerListRelationFilter = {
    every?: Prisma.TournamentRosterPlayerWhereInput;
    some?: Prisma.TournamentRosterPlayerWhereInput;
    none?: Prisma.TournamentRosterPlayerWhereInput;
};
export type TournamentRosterPlayerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentRosterPlayerTournamentIdPlayerIdCompoundUniqueInput = {
    tournamentId: string;
    playerId: string;
};
export type TournamentRosterPlayerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    jerseyOverride?: Prisma.SortOrder;
};
export type TournamentRosterPlayerAvgOrderByAggregateInput = {
    jerseyOverride?: Prisma.SortOrder;
};
export type TournamentRosterPlayerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    jerseyOverride?: Prisma.SortOrder;
};
export type TournamentRosterPlayerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    jerseyOverride?: Prisma.SortOrder;
};
export type TournamentRosterPlayerSumOrderByAggregateInput = {
    jerseyOverride?: Prisma.SortOrder;
};
export type TournamentRosterPlayerCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput> | Prisma.TournamentRosterPlayerCreateWithoutPlayerInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyPlayerInputEnvelope;
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
};
export type TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput> | Prisma.TournamentRosterPlayerCreateWithoutPlayerInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyPlayerInputEnvelope;
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
};
export type TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput> | Prisma.TournamentRosterPlayerCreateWithoutPlayerInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyPlayerInputEnvelope;
    set?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    delete?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    update?: Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutPlayerInput | Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TournamentRosterPlayerScalarWhereInput | Prisma.TournamentRosterPlayerScalarWhereInput[];
};
export type TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput> | Prisma.TournamentRosterPlayerCreateWithoutPlayerInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyPlayerInputEnvelope;
    set?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    delete?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    update?: Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutPlayerInput | Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TournamentRosterPlayerScalarWhereInput | Prisma.TournamentRosterPlayerScalarWhereInput[];
};
export type TournamentRosterPlayerCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRosterPlayerCreateWithoutTournamentInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
};
export type TournamentRosterPlayerUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRosterPlayerCreateWithoutTournamentInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
};
export type TournamentRosterPlayerUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRosterPlayerCreateWithoutTournamentInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    delete?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    update?: Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentRosterPlayerScalarWhereInput | Prisma.TournamentRosterPlayerScalarWhereInput[];
};
export type TournamentRosterPlayerUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRosterPlayerCreateWithoutTournamentInput[] | Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput | Prisma.TournamentRosterPlayerCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRosterPlayerUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentRosterPlayerCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    delete?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    connect?: Prisma.TournamentRosterPlayerWhereUniqueInput | Prisma.TournamentRosterPlayerWhereUniqueInput[];
    update?: Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRosterPlayerUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentRosterPlayerUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentRosterPlayerScalarWhereInput | Prisma.TournamentRosterPlayerScalarWhereInput[];
};
export type TournamentRosterPlayerCreateWithoutPlayerInput = {
    id?: string;
    jerseyOverride?: number | null;
    tournament: Prisma.TournamentCreateNestedOneWithoutRosterPlayersInput;
};
export type TournamentRosterPlayerUncheckedCreateWithoutPlayerInput = {
    id?: string;
    tournamentId: string;
    jerseyOverride?: number | null;
};
export type TournamentRosterPlayerCreateOrConnectWithoutPlayerInput = {
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput>;
};
export type TournamentRosterPlayerCreateManyPlayerInputEnvelope = {
    data: Prisma.TournamentRosterPlayerCreateManyPlayerInput | Prisma.TournamentRosterPlayerCreateManyPlayerInput[];
    skipDuplicates?: boolean;
};
export type TournamentRosterPlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutPlayerInput>;
};
export type TournamentRosterPlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateWithoutPlayerInput, Prisma.TournamentRosterPlayerUncheckedUpdateWithoutPlayerInput>;
};
export type TournamentRosterPlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: Prisma.TournamentRosterPlayerScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateManyMutationInput, Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerInput>;
};
export type TournamentRosterPlayerScalarWhereInput = {
    AND?: Prisma.TournamentRosterPlayerScalarWhereInput | Prisma.TournamentRosterPlayerScalarWhereInput[];
    OR?: Prisma.TournamentRosterPlayerScalarWhereInput[];
    NOT?: Prisma.TournamentRosterPlayerScalarWhereInput | Prisma.TournamentRosterPlayerScalarWhereInput[];
    id?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    tournamentId?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    playerId?: Prisma.StringFilter<"TournamentRosterPlayer"> | string;
    jerseyOverride?: Prisma.IntNullableFilter<"TournamentRosterPlayer"> | number | null;
};
export type TournamentRosterPlayerCreateWithoutTournamentInput = {
    id?: string;
    jerseyOverride?: number | null;
    player: Prisma.PlayerCreateNestedOneWithoutTournamentRostersInput;
};
export type TournamentRosterPlayerUncheckedCreateWithoutTournamentInput = {
    id?: string;
    playerId: string;
    jerseyOverride?: number | null;
};
export type TournamentRosterPlayerCreateOrConnectWithoutTournamentInput = {
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput>;
};
export type TournamentRosterPlayerCreateManyTournamentInputEnvelope = {
    data: Prisma.TournamentRosterPlayerCreateManyTournamentInput | Prisma.TournamentRosterPlayerCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type TournamentRosterPlayerUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.TournamentRosterPlayerCreateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedCreateWithoutTournamentInput>;
};
export type TournamentRosterPlayerUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateWithoutTournamentInput, Prisma.TournamentRosterPlayerUncheckedUpdateWithoutTournamentInput>;
};
export type TournamentRosterPlayerUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.TournamentRosterPlayerScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateManyMutationInput, Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutTournamentInput>;
};
export type TournamentRosterPlayerCreateManyPlayerInput = {
    id?: string;
    tournamentId: string;
    jerseyOverride?: number | null;
};
export type TournamentRosterPlayerUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutRosterPlayersNestedInput;
};
export type TournamentRosterPlayerUncheckedUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerCreateManyTournamentInput = {
    id?: string;
    playerId: string;
    jerseyOverride?: number | null;
};
export type TournamentRosterPlayerUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    player?: Prisma.PlayerUpdateOneRequiredWithoutTournamentRostersNestedInput;
};
export type TournamentRosterPlayerUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    jerseyOverride?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TournamentRosterPlayerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    jerseyOverride?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRosterPlayer"]>;
export type TournamentRosterPlayerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    jerseyOverride?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRosterPlayer"]>;
export type TournamentRosterPlayerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    jerseyOverride?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRosterPlayer"]>;
export type TournamentRosterPlayerSelectScalar = {
    id?: boolean;
    tournamentId?: boolean;
    playerId?: boolean;
    jerseyOverride?: boolean;
};
export type TournamentRosterPlayerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tournamentId" | "playerId" | "jerseyOverride", ExtArgs["result"]["tournamentRosterPlayer"]>;
export type TournamentRosterPlayerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type TournamentRosterPlayerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type TournamentRosterPlayerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type $TournamentRosterPlayerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentRosterPlayer";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        player: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tournamentId: string;
        playerId: string;
        jerseyOverride: number | null;
    }, ExtArgs["result"]["tournamentRosterPlayer"]>;
    composites: {};
};
export type TournamentRosterPlayerGetPayload<S extends boolean | null | undefined | TournamentRosterPlayerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload, S>;
export type TournamentRosterPlayerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentRosterPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TournamentRosterPlayerCountAggregateInputType | true;
};
export interface TournamentRosterPlayerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentRosterPlayer'];
        meta: {
            name: 'TournamentRosterPlayer';
        };
    };
    /**
     * Find zero or one TournamentRosterPlayer that matches the filter.
     * @param {TournamentRosterPlayerFindUniqueArgs} args - Arguments to find a TournamentRosterPlayer
     * @example
     * // Get one TournamentRosterPlayer
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentRosterPlayerFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TournamentRosterPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentRosterPlayerFindUniqueOrThrowArgs} args - Arguments to find a TournamentRosterPlayer
     * @example
     * // Get one TournamentRosterPlayer
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentRosterPlayerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentRosterPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerFindFirstArgs} args - Arguments to find a TournamentRosterPlayer
     * @example
     * // Get one TournamentRosterPlayer
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentRosterPlayerFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentRosterPlayerFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentRosterPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerFindFirstOrThrowArgs} args - Arguments to find a TournamentRosterPlayer
     * @example
     * // Get one TournamentRosterPlayer
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentRosterPlayerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentRosterPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TournamentRosterPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentRosterPlayers
     * const tournamentRosterPlayers = await prisma.tournamentRosterPlayer.findMany()
     *
     * // Get first 10 TournamentRosterPlayers
     * const tournamentRosterPlayers = await prisma.tournamentRosterPlayer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentRosterPlayerWithIdOnly = await prisma.tournamentRosterPlayer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentRosterPlayerFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentRosterPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TournamentRosterPlayer.
     * @param {TournamentRosterPlayerCreateArgs} args - Arguments to create a TournamentRosterPlayer.
     * @example
     * // Create one TournamentRosterPlayer
     * const TournamentRosterPlayer = await prisma.tournamentRosterPlayer.create({
     *   data: {
     *     // ... data to create a TournamentRosterPlayer
     *   }
     * })
     *
     */
    create<T extends TournamentRosterPlayerCreateArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TournamentRosterPlayers.
     * @param {TournamentRosterPlayerCreateManyArgs} args - Arguments to create many TournamentRosterPlayers.
     * @example
     * // Create many TournamentRosterPlayers
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentRosterPlayerCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentRosterPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TournamentRosterPlayers and returns the data saved in the database.
     * @param {TournamentRosterPlayerCreateManyAndReturnArgs} args - Arguments to create many TournamentRosterPlayers.
     * @example
     * // Create many TournamentRosterPlayers
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TournamentRosterPlayers and only return the `id`
     * const tournamentRosterPlayerWithIdOnly = await prisma.tournamentRosterPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentRosterPlayerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentRosterPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TournamentRosterPlayer.
     * @param {TournamentRosterPlayerDeleteArgs} args - Arguments to delete one TournamentRosterPlayer.
     * @example
     * // Delete one TournamentRosterPlayer
     * const TournamentRosterPlayer = await prisma.tournamentRosterPlayer.delete({
     *   where: {
     *     // ... filter to delete one TournamentRosterPlayer
     *   }
     * })
     *
     */
    delete<T extends TournamentRosterPlayerDeleteArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TournamentRosterPlayer.
     * @param {TournamentRosterPlayerUpdateArgs} args - Arguments to update one TournamentRosterPlayer.
     * @example
     * // Update one TournamentRosterPlayer
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentRosterPlayerUpdateArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TournamentRosterPlayers.
     * @param {TournamentRosterPlayerDeleteManyArgs} args - Arguments to filter TournamentRosterPlayers to delete.
     * @example
     * // Delete a few TournamentRosterPlayers
     * const { count } = await prisma.tournamentRosterPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentRosterPlayerDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentRosterPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentRosterPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentRosterPlayers
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentRosterPlayerUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentRosterPlayers and returns the data updated in the database.
     * @param {TournamentRosterPlayerUpdateManyAndReturnArgs} args - Arguments to update many TournamentRosterPlayers.
     * @example
     * // Update many TournamentRosterPlayers
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TournamentRosterPlayers and only return the `id`
     * const tournamentRosterPlayerWithIdOnly = await prisma.tournamentRosterPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentRosterPlayerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TournamentRosterPlayer.
     * @param {TournamentRosterPlayerUpsertArgs} args - Arguments to update or create a TournamentRosterPlayer.
     * @example
     * // Update or create a TournamentRosterPlayer
     * const tournamentRosterPlayer = await prisma.tournamentRosterPlayer.upsert({
     *   create: {
     *     // ... data to create a TournamentRosterPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentRosterPlayer we want to update
     *   }
     * })
     */
    upsert<T extends TournamentRosterPlayerUpsertArgs>(args: Prisma.SelectSubset<T, TournamentRosterPlayerUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterPlayerClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TournamentRosterPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerCountArgs} args - Arguments to filter TournamentRosterPlayers to count.
     * @example
     * // Count the number of TournamentRosterPlayers
     * const count = await prisma.tournamentRosterPlayer.count({
     *   where: {
     *     // ... the filter for the TournamentRosterPlayers we want to count
     *   }
     * })
    **/
    count<T extends TournamentRosterPlayerCountArgs>(args?: Prisma.Subset<T, TournamentRosterPlayerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentRosterPlayerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TournamentRosterPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentRosterPlayerAggregateArgs>(args: Prisma.Subset<T, TournamentRosterPlayerAggregateArgs>): Prisma.PrismaPromise<GetTournamentRosterPlayerAggregateType<T>>;
    /**
     * Group by TournamentRosterPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterPlayerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentRosterPlayerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentRosterPlayerGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentRosterPlayerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentRosterPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentRosterPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TournamentRosterPlayer model
     */
    readonly fields: TournamentRosterPlayerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TournamentRosterPlayer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentRosterPlayerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the TournamentRosterPlayer model
 */
export interface TournamentRosterPlayerFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentRosterPlayer", 'String'>;
    readonly tournamentId: Prisma.FieldRef<"TournamentRosterPlayer", 'String'>;
    readonly playerId: Prisma.FieldRef<"TournamentRosterPlayer", 'String'>;
    readonly jerseyOverride: Prisma.FieldRef<"TournamentRosterPlayer", 'Int'>;
}
/**
 * TournamentRosterPlayer findUnique
 */
export type TournamentRosterPlayerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentRosterPlayer to fetch.
     */
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
};
/**
 * TournamentRosterPlayer findUniqueOrThrow
 */
export type TournamentRosterPlayerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentRosterPlayer to fetch.
     */
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
};
/**
 * TournamentRosterPlayer findFirst
 */
export type TournamentRosterPlayerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentRosterPlayer to fetch.
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosterPlayers to fetch.
     */
    orderBy?: Prisma.TournamentRosterPlayerOrderByWithRelationInput | Prisma.TournamentRosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentRosterPlayers.
     */
    cursor?: Prisma.TournamentRosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentRosterPlayers.
     */
    distinct?: Prisma.TournamentRosterPlayerScalarFieldEnum | Prisma.TournamentRosterPlayerScalarFieldEnum[];
};
/**
 * TournamentRosterPlayer findFirstOrThrow
 */
export type TournamentRosterPlayerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentRosterPlayer to fetch.
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosterPlayers to fetch.
     */
    orderBy?: Prisma.TournamentRosterPlayerOrderByWithRelationInput | Prisma.TournamentRosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentRosterPlayers.
     */
    cursor?: Prisma.TournamentRosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentRosterPlayers.
     */
    distinct?: Prisma.TournamentRosterPlayerScalarFieldEnum | Prisma.TournamentRosterPlayerScalarFieldEnum[];
};
/**
 * TournamentRosterPlayer findMany
 */
export type TournamentRosterPlayerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentRosterPlayers to fetch.
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosterPlayers to fetch.
     */
    orderBy?: Prisma.TournamentRosterPlayerOrderByWithRelationInput | Prisma.TournamentRosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TournamentRosterPlayers.
     */
    cursor?: Prisma.TournamentRosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentRosterPlayers.
     */
    distinct?: Prisma.TournamentRosterPlayerScalarFieldEnum | Prisma.TournamentRosterPlayerScalarFieldEnum[];
};
/**
 * TournamentRosterPlayer create
 */
export type TournamentRosterPlayerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * The data needed to create a TournamentRosterPlayer.
     */
    data: Prisma.XOR<Prisma.TournamentRosterPlayerCreateInput, Prisma.TournamentRosterPlayerUncheckedCreateInput>;
};
/**
 * TournamentRosterPlayer createMany
 */
export type TournamentRosterPlayerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentRosterPlayers.
     */
    data: Prisma.TournamentRosterPlayerCreateManyInput | Prisma.TournamentRosterPlayerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TournamentRosterPlayer createManyAndReturn
 */
export type TournamentRosterPlayerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * The data used to create many TournamentRosterPlayers.
     */
    data: Prisma.TournamentRosterPlayerCreateManyInput | Prisma.TournamentRosterPlayerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentRosterPlayer update
 */
export type TournamentRosterPlayerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * The data needed to update a TournamentRosterPlayer.
     */
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateInput, Prisma.TournamentRosterPlayerUncheckedUpdateInput>;
    /**
     * Choose, which TournamentRosterPlayer to update.
     */
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
};
/**
 * TournamentRosterPlayer updateMany
 */
export type TournamentRosterPlayerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentRosterPlayers.
     */
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateManyMutationInput, Prisma.TournamentRosterPlayerUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentRosterPlayers to update
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * Limit how many TournamentRosterPlayers to update.
     */
    limit?: number;
};
/**
 * TournamentRosterPlayer updateManyAndReturn
 */
export type TournamentRosterPlayerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * The data used to update TournamentRosterPlayers.
     */
    data: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateManyMutationInput, Prisma.TournamentRosterPlayerUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentRosterPlayers to update
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * Limit how many TournamentRosterPlayers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentRosterPlayer upsert
 */
export type TournamentRosterPlayerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * The filter to search for the TournamentRosterPlayer to update in case it exists.
     */
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
    /**
     * In case the TournamentRosterPlayer found by the `where` argument doesn't exist, create a new TournamentRosterPlayer with this data.
     */
    create: Prisma.XOR<Prisma.TournamentRosterPlayerCreateInput, Prisma.TournamentRosterPlayerUncheckedCreateInput>;
    /**
     * In case the TournamentRosterPlayer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentRosterPlayerUpdateInput, Prisma.TournamentRosterPlayerUncheckedUpdateInput>;
};
/**
 * TournamentRosterPlayer delete
 */
export type TournamentRosterPlayerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter which TournamentRosterPlayer to delete.
     */
    where: Prisma.TournamentRosterPlayerWhereUniqueInput;
};
/**
 * TournamentRosterPlayer deleteMany
 */
export type TournamentRosterPlayerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentRosterPlayers to delete
     */
    where?: Prisma.TournamentRosterPlayerWhereInput;
    /**
     * Limit how many TournamentRosterPlayers to delete.
     */
    limit?: number;
};
/**
 * TournamentRosterPlayer without action
 */
export type TournamentRosterPlayerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRosterPlayer
     */
    select?: Prisma.TournamentRosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRosterPlayer
     */
    omit?: Prisma.TournamentRosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterPlayerInclude<ExtArgs> | null;
};
//# sourceMappingURL=TournamentRosterPlayer.d.ts.map