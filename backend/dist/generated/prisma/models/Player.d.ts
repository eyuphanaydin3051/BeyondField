import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Player
 * Individual players registered to a team.
 */
export type PlayerModel = runtime.Types.Result.DefaultSelection<Prisma.$PlayerPayload>;
export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null;
    _avg: PlayerAvgAggregateOutputType | null;
    _sum: PlayerSumAggregateOutputType | null;
    _min: PlayerMinAggregateOutputType | null;
    _max: PlayerMaxAggregateOutputType | null;
};
export type PlayerAvgAggregateOutputType = {
    jerseyNumber: number | null;
};
export type PlayerSumAggregateOutputType = {
    jerseyNumber: number | null;
};
export type PlayerMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    position: $Enums.PlayerPosition | null;
    jerseyNumber: number | null;
    photoUrl: string | null;
    teamId: string | null;
    createdAt: Date | null;
};
export type PlayerMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    position: $Enums.PlayerPosition | null;
    jerseyNumber: number | null;
    photoUrl: string | null;
    teamId: string | null;
    createdAt: Date | null;
};
export type PlayerCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    position: number;
    jerseyNumber: number;
    photoUrl: number;
    teamId: number;
    createdAt: number;
    _all: number;
};
export type PlayerAvgAggregateInputType = {
    jerseyNumber?: true;
};
export type PlayerSumAggregateInputType = {
    jerseyNumber?: true;
};
export type PlayerMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    position?: true;
    jerseyNumber?: true;
    photoUrl?: true;
    teamId?: true;
    createdAt?: true;
};
export type PlayerMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    position?: true;
    jerseyNumber?: true;
    photoUrl?: true;
    teamId?: true;
    createdAt?: true;
};
export type PlayerCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    position?: true;
    jerseyNumber?: true;
    photoUrl?: true;
    teamId?: true;
    createdAt?: true;
    _all?: true;
};
export type PlayerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: Prisma.PlayerOrderByWithRelationInput | Prisma.PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType;
};
export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayer[P]> : Prisma.GetScalarType<T[P], AggregatePlayer[P]>;
};
export type PlayerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayerWhereInput;
    orderBy?: Prisma.PlayerOrderByWithAggregationInput | Prisma.PlayerOrderByWithAggregationInput[];
    by: Prisma.PlayerScalarFieldEnum[] | Prisma.PlayerScalarFieldEnum;
    having?: Prisma.PlayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayerCountAggregateInputType | true;
    _avg?: PlayerAvgAggregateInputType;
    _sum?: PlayerSumAggregateInputType;
    _min?: PlayerMinAggregateInputType;
    _max?: PlayerMaxAggregateInputType;
};
export type PlayerGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl: string | null;
    teamId: string;
    createdAt: Date;
    _count: PlayerCountAggregateOutputType | null;
    _avg: PlayerAvgAggregateOutputType | null;
    _sum: PlayerSumAggregateOutputType | null;
    _min: PlayerMinAggregateOutputType | null;
    _max: PlayerMaxAggregateOutputType | null;
};
export type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayerGroupByOutputType[P]>;
}>>;
export type PlayerWhereInput = {
    AND?: Prisma.PlayerWhereInput | Prisma.PlayerWhereInput[];
    OR?: Prisma.PlayerWhereInput[];
    NOT?: Prisma.PlayerWhereInput | Prisma.PlayerWhereInput[];
    id?: Prisma.StringFilter<"Player"> | string;
    firstName?: Prisma.StringFilter<"Player"> | string;
    lastName?: Prisma.StringFilter<"Player"> | string;
    position?: Prisma.EnumPlayerPositionFilter<"Player"> | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFilter<"Player"> | number;
    photoUrl?: Prisma.StringNullableFilter<"Player"> | string | null;
    teamId?: Prisma.StringFilter<"Player"> | string;
    createdAt?: Prisma.DateTimeFilter<"Player"> | Date | string;
    team?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    events?: Prisma.FrisbeeMatchEventListRelationFilter;
    secondaryEvents?: Prisma.FrisbeeMatchEventListRelationFilter;
    stats?: Prisma.XOR<Prisma.FrisbeePlayerStatNullableScalarRelationFilter, Prisma.FrisbeePlayerStatWhereInput> | null;
    matchStats?: Prisma.MatchPlayerStatListRelationFilter;
    tournamentStats?: Prisma.TournamentPlayerStatListRelationFilter;
    tournamentRosters?: Prisma.TournamentRosterPlayerListRelationFilter;
    passEdgesFrom?: Prisma.PlayerPassEdgeListRelationFilter;
    passEdgesTo?: Prisma.PlayerPassEdgeListRelationFilter;
};
export type PlayerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    jerseyNumber?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    team?: Prisma.TeamOrderByWithRelationInput;
    events?: Prisma.FrisbeeMatchEventOrderByRelationAggregateInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventOrderByRelationAggregateInput;
    stats?: Prisma.FrisbeePlayerStatOrderByWithRelationInput;
    matchStats?: Prisma.MatchPlayerStatOrderByRelationAggregateInput;
    tournamentStats?: Prisma.TournamentPlayerStatOrderByRelationAggregateInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerOrderByRelationAggregateInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeOrderByRelationAggregateInput;
    passEdgesTo?: Prisma.PlayerPassEdgeOrderByRelationAggregateInput;
};
export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlayerWhereInput | Prisma.PlayerWhereInput[];
    OR?: Prisma.PlayerWhereInput[];
    NOT?: Prisma.PlayerWhereInput | Prisma.PlayerWhereInput[];
    firstName?: Prisma.StringFilter<"Player"> | string;
    lastName?: Prisma.StringFilter<"Player"> | string;
    position?: Prisma.EnumPlayerPositionFilter<"Player"> | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFilter<"Player"> | number;
    photoUrl?: Prisma.StringNullableFilter<"Player"> | string | null;
    teamId?: Prisma.StringFilter<"Player"> | string;
    createdAt?: Prisma.DateTimeFilter<"Player"> | Date | string;
    team?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    events?: Prisma.FrisbeeMatchEventListRelationFilter;
    secondaryEvents?: Prisma.FrisbeeMatchEventListRelationFilter;
    stats?: Prisma.XOR<Prisma.FrisbeePlayerStatNullableScalarRelationFilter, Prisma.FrisbeePlayerStatWhereInput> | null;
    matchStats?: Prisma.MatchPlayerStatListRelationFilter;
    tournamentStats?: Prisma.TournamentPlayerStatListRelationFilter;
    tournamentRosters?: Prisma.TournamentRosterPlayerListRelationFilter;
    passEdgesFrom?: Prisma.PlayerPassEdgeListRelationFilter;
    passEdgesTo?: Prisma.PlayerPassEdgeListRelationFilter;
}, "id">;
export type PlayerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    jerseyNumber?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PlayerCountOrderByAggregateInput;
    _avg?: Prisma.PlayerAvgOrderByAggregateInput;
    _max?: Prisma.PlayerMaxOrderByAggregateInput;
    _min?: Prisma.PlayerMinOrderByAggregateInput;
    _sum?: Prisma.PlayerSumOrderByAggregateInput;
};
export type PlayerScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlayerScalarWhereWithAggregatesInput | Prisma.PlayerScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlayerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlayerScalarWhereWithAggregatesInput | Prisma.PlayerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Player"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Player"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Player"> | string;
    position?: Prisma.EnumPlayerPositionWithAggregatesFilter<"Player"> | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntWithAggregatesFilter<"Player"> | number;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"Player"> | string | null;
    teamId?: Prisma.StringWithAggregatesFilter<"Player"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Player"> | Date | string;
};
export type PlayerCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
};
export type PlayerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayerListRelationFilter = {
    every?: Prisma.PlayerWhereInput;
    some?: Prisma.PlayerWhereInput;
    none?: Prisma.PlayerWhereInput;
};
export type PlayerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlayerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    jerseyNumber?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlayerAvgOrderByAggregateInput = {
    jerseyNumber?: Prisma.SortOrder;
};
export type PlayerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    jerseyNumber?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlayerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    jerseyNumber?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlayerSumOrderByAggregateInput = {
    jerseyNumber?: Prisma.SortOrder;
};
export type PlayerScalarRelationFilter = {
    is?: Prisma.PlayerWhereInput;
    isNot?: Prisma.PlayerWhereInput;
};
export type PlayerNullableScalarRelationFilter = {
    is?: Prisma.PlayerWhereInput | null;
    isNot?: Prisma.PlayerWhereInput | null;
};
export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTeamInput, Prisma.PlayerUncheckedCreateWithoutTeamInput> | Prisma.PlayerCreateWithoutTeamInput[] | Prisma.PlayerUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTeamInput | Prisma.PlayerCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.PlayerCreateManyTeamInputEnvelope;
    connect?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
};
export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTeamInput, Prisma.PlayerUncheckedCreateWithoutTeamInput> | Prisma.PlayerCreateWithoutTeamInput[] | Prisma.PlayerUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTeamInput | Prisma.PlayerCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.PlayerCreateManyTeamInputEnvelope;
    connect?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
};
export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTeamInput, Prisma.PlayerUncheckedCreateWithoutTeamInput> | Prisma.PlayerCreateWithoutTeamInput[] | Prisma.PlayerUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTeamInput | Prisma.PlayerCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.PlayerUpsertWithWhereUniqueWithoutTeamInput | Prisma.PlayerUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.PlayerCreateManyTeamInputEnvelope;
    set?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    disconnect?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    delete?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    connect?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    update?: Prisma.PlayerUpdateWithWhereUniqueWithoutTeamInput | Prisma.PlayerUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.PlayerUpdateManyWithWhereWithoutTeamInput | Prisma.PlayerUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.PlayerScalarWhereInput | Prisma.PlayerScalarWhereInput[];
};
export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTeamInput, Prisma.PlayerUncheckedCreateWithoutTeamInput> | Prisma.PlayerCreateWithoutTeamInput[] | Prisma.PlayerUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTeamInput | Prisma.PlayerCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.PlayerUpsertWithWhereUniqueWithoutTeamInput | Prisma.PlayerUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.PlayerCreateManyTeamInputEnvelope;
    set?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    disconnect?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    delete?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    connect?: Prisma.PlayerWhereUniqueInput | Prisma.PlayerWhereUniqueInput[];
    update?: Prisma.PlayerUpdateWithWhereUniqueWithoutTeamInput | Prisma.PlayerUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.PlayerUpdateManyWithWhereWithoutTeamInput | Prisma.PlayerUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.PlayerScalarWhereInput | Prisma.PlayerScalarWhereInput[];
};
export type EnumPlayerPositionFieldUpdateOperationsInput = {
    set?: $Enums.PlayerPosition;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PlayerCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutEventsInput, Prisma.PlayerUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutEventsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerCreateNestedOneWithoutSecondaryEventsInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutSecondaryEventsInput, Prisma.PlayerUncheckedCreateWithoutSecondaryEventsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutSecondaryEventsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutEventsInput, Prisma.PlayerUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.PlayerUpsertWithoutEventsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutEventsInput, Prisma.PlayerUpdateWithoutEventsInput>, Prisma.PlayerUncheckedUpdateWithoutEventsInput>;
};
export type PlayerUpdateOneWithoutSecondaryEventsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutSecondaryEventsInput, Prisma.PlayerUncheckedCreateWithoutSecondaryEventsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutSecondaryEventsInput;
    upsert?: Prisma.PlayerUpsertWithoutSecondaryEventsInput;
    disconnect?: Prisma.PlayerWhereInput | boolean;
    delete?: Prisma.PlayerWhereInput | boolean;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutSecondaryEventsInput, Prisma.PlayerUpdateWithoutSecondaryEventsInput>, Prisma.PlayerUncheckedUpdateWithoutSecondaryEventsInput>;
};
export type PlayerCreateNestedOneWithoutStatsInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutStatsInput, Prisma.PlayerUncheckedCreateWithoutStatsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutStatsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerUpdateOneRequiredWithoutStatsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutStatsInput, Prisma.PlayerUncheckedCreateWithoutStatsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutStatsInput;
    upsert?: Prisma.PlayerUpsertWithoutStatsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutStatsInput, Prisma.PlayerUpdateWithoutStatsInput>, Prisma.PlayerUncheckedUpdateWithoutStatsInput>;
};
export type PlayerCreateNestedOneWithoutMatchStatsInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutMatchStatsInput, Prisma.PlayerUncheckedCreateWithoutMatchStatsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutMatchStatsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerUpdateOneRequiredWithoutMatchStatsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutMatchStatsInput, Prisma.PlayerUncheckedCreateWithoutMatchStatsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutMatchStatsInput;
    upsert?: Prisma.PlayerUpsertWithoutMatchStatsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutMatchStatsInput, Prisma.PlayerUpdateWithoutMatchStatsInput>, Prisma.PlayerUncheckedUpdateWithoutMatchStatsInput>;
};
export type PlayerCreateNestedOneWithoutTournamentRostersInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentRostersInput, Prisma.PlayerUncheckedCreateWithoutTournamentRostersInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTournamentRostersInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerUpdateOneRequiredWithoutTournamentRostersNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentRostersInput, Prisma.PlayerUncheckedCreateWithoutTournamentRostersInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTournamentRostersInput;
    upsert?: Prisma.PlayerUpsertWithoutTournamentRostersInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutTournamentRostersInput, Prisma.PlayerUpdateWithoutTournamentRostersInput>, Prisma.PlayerUncheckedUpdateWithoutTournamentRostersInput>;
};
export type PlayerCreateNestedOneWithoutTournamentStatsInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentStatsInput, Prisma.PlayerUncheckedCreateWithoutTournamentStatsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTournamentStatsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerUpdateOneRequiredWithoutTournamentStatsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentStatsInput, Prisma.PlayerUncheckedCreateWithoutTournamentStatsInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutTournamentStatsInput;
    upsert?: Prisma.PlayerUpsertWithoutTournamentStatsInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutTournamentStatsInput, Prisma.PlayerUpdateWithoutTournamentStatsInput>, Prisma.PlayerUncheckedUpdateWithoutTournamentStatsInput>;
};
export type PlayerCreateNestedOneWithoutPassEdgesFromInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesFromInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesFromInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutPassEdgesFromInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerCreateNestedOneWithoutPassEdgesToInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesToInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesToInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutPassEdgesToInput;
    connect?: Prisma.PlayerWhereUniqueInput;
};
export type PlayerUpdateOneRequiredWithoutPassEdgesFromNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesFromInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesFromInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutPassEdgesFromInput;
    upsert?: Prisma.PlayerUpsertWithoutPassEdgesFromInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutPassEdgesFromInput, Prisma.PlayerUpdateWithoutPassEdgesFromInput>, Prisma.PlayerUncheckedUpdateWithoutPassEdgesFromInput>;
};
export type PlayerUpdateOneRequiredWithoutPassEdgesToNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesToInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesToInput>;
    connectOrCreate?: Prisma.PlayerCreateOrConnectWithoutPassEdgesToInput;
    upsert?: Prisma.PlayerUpsertWithoutPassEdgesToInput;
    connect?: Prisma.PlayerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayerUpdateToOneWithWhereWithoutPassEdgesToInput, Prisma.PlayerUpdateWithoutPassEdgesToInput>, Prisma.PlayerUncheckedUpdateWithoutPassEdgesToInput>;
};
export type PlayerCreateWithoutTeamInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutTeamInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutTeamInput, Prisma.PlayerUncheckedCreateWithoutTeamInput>;
};
export type PlayerCreateManyTeamInputEnvelope = {
    data: Prisma.PlayerCreateManyTeamInput | Prisma.PlayerCreateManyTeamInput[];
    skipDuplicates?: boolean;
};
export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: Prisma.PlayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutTeamInput, Prisma.PlayerUncheckedUpdateWithoutTeamInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutTeamInput, Prisma.PlayerUncheckedCreateWithoutTeamInput>;
};
export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: Prisma.PlayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutTeamInput, Prisma.PlayerUncheckedUpdateWithoutTeamInput>;
};
export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: Prisma.PlayerScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateManyMutationInput, Prisma.PlayerUncheckedUpdateManyWithoutTeamInput>;
};
export type PlayerScalarWhereInput = {
    AND?: Prisma.PlayerScalarWhereInput | Prisma.PlayerScalarWhereInput[];
    OR?: Prisma.PlayerScalarWhereInput[];
    NOT?: Prisma.PlayerScalarWhereInput | Prisma.PlayerScalarWhereInput[];
    id?: Prisma.StringFilter<"Player"> | string;
    firstName?: Prisma.StringFilter<"Player"> | string;
    lastName?: Prisma.StringFilter<"Player"> | string;
    position?: Prisma.EnumPlayerPositionFilter<"Player"> | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFilter<"Player"> | number;
    photoUrl?: Prisma.StringNullableFilter<"Player"> | string | null;
    teamId?: Prisma.StringFilter<"Player"> | string;
    createdAt?: Prisma.DateTimeFilter<"Player"> | Date | string;
};
export type PlayerCreateWithoutEventsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutEventsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutEventsInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutEventsInput, Prisma.PlayerUncheckedCreateWithoutEventsInput>;
};
export type PlayerCreateWithoutSecondaryEventsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutSecondaryEventsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutSecondaryEventsInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutSecondaryEventsInput, Prisma.PlayerUncheckedCreateWithoutSecondaryEventsInput>;
};
export type PlayerUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutEventsInput, Prisma.PlayerUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutEventsInput, Prisma.PlayerUncheckedCreateWithoutEventsInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutEventsInput, Prisma.PlayerUncheckedUpdateWithoutEventsInput>;
};
export type PlayerUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUpsertWithoutSecondaryEventsInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutSecondaryEventsInput, Prisma.PlayerUncheckedUpdateWithoutSecondaryEventsInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutSecondaryEventsInput, Prisma.PlayerUncheckedCreateWithoutSecondaryEventsInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutSecondaryEventsInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutSecondaryEventsInput, Prisma.PlayerUncheckedUpdateWithoutSecondaryEventsInput>;
};
export type PlayerUpdateWithoutSecondaryEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutSecondaryEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerCreateWithoutStatsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutStatsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutStatsInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutStatsInput, Prisma.PlayerUncheckedCreateWithoutStatsInput>;
};
export type PlayerUpsertWithoutStatsInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutStatsInput, Prisma.PlayerUncheckedUpdateWithoutStatsInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutStatsInput, Prisma.PlayerUncheckedCreateWithoutStatsInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutStatsInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutStatsInput, Prisma.PlayerUncheckedUpdateWithoutStatsInput>;
};
export type PlayerUpdateWithoutStatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutStatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerCreateWithoutMatchStatsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutMatchStatsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutMatchStatsInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutMatchStatsInput, Prisma.PlayerUncheckedCreateWithoutMatchStatsInput>;
};
export type PlayerUpsertWithoutMatchStatsInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutMatchStatsInput, Prisma.PlayerUncheckedUpdateWithoutMatchStatsInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutMatchStatsInput, Prisma.PlayerUncheckedCreateWithoutMatchStatsInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutMatchStatsInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutMatchStatsInput, Prisma.PlayerUncheckedUpdateWithoutMatchStatsInput>;
};
export type PlayerUpdateWithoutMatchStatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutMatchStatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerCreateWithoutTournamentRostersInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutTournamentRostersInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutTournamentRostersInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentRostersInput, Prisma.PlayerUncheckedCreateWithoutTournamentRostersInput>;
};
export type PlayerUpsertWithoutTournamentRostersInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutTournamentRostersInput, Prisma.PlayerUncheckedUpdateWithoutTournamentRostersInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentRostersInput, Prisma.PlayerUncheckedCreateWithoutTournamentRostersInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutTournamentRostersInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutTournamentRostersInput, Prisma.PlayerUncheckedUpdateWithoutTournamentRostersInput>;
};
export type PlayerUpdateWithoutTournamentRostersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutTournamentRostersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerCreateWithoutTournamentStatsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutTournamentStatsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutTournamentStatsInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentStatsInput, Prisma.PlayerUncheckedCreateWithoutTournamentStatsInput>;
};
export type PlayerUpsertWithoutTournamentStatsInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutTournamentStatsInput, Prisma.PlayerUncheckedUpdateWithoutTournamentStatsInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutTournamentStatsInput, Prisma.PlayerUncheckedCreateWithoutTournamentStatsInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutTournamentStatsInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutTournamentStatsInput, Prisma.PlayerUncheckedUpdateWithoutTournamentStatsInput>;
};
export type PlayerUpdateWithoutTournamentStatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutTournamentStatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerCreateWithoutPassEdgesFromInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeCreateNestedManyWithoutToPlayerInput;
};
export type PlayerUncheckedCreateWithoutPassEdgesFromInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput;
};
export type PlayerCreateOrConnectWithoutPassEdgesFromInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesFromInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesFromInput>;
};
export type PlayerCreateWithoutPassEdgesToInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPlayersInput;
    events?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput;
};
export type PlayerUncheckedCreateWithoutPassEdgesToInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    teamId: string;
    createdAt?: Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedCreateNestedOneWithoutPlayerInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedCreateNestedManyWithoutPlayerInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput;
};
export type PlayerCreateOrConnectWithoutPassEdgesToInput = {
    where: Prisma.PlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesToInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesToInput>;
};
export type PlayerUpsertWithoutPassEdgesFromInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutPassEdgesFromInput, Prisma.PlayerUncheckedUpdateWithoutPassEdgesFromInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesFromInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesFromInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutPassEdgesFromInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutPassEdgesFromInput, Prisma.PlayerUncheckedUpdateWithoutPassEdgesFromInput>;
};
export type PlayerUpdateWithoutPassEdgesFromInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutPassEdgesFromInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUpsertWithoutPassEdgesToInput = {
    update: Prisma.XOR<Prisma.PlayerUpdateWithoutPassEdgesToInput, Prisma.PlayerUncheckedUpdateWithoutPassEdgesToInput>;
    create: Prisma.XOR<Prisma.PlayerCreateWithoutPassEdgesToInput, Prisma.PlayerUncheckedCreateWithoutPassEdgesToInput>;
    where?: Prisma.PlayerWhereInput;
};
export type PlayerUpdateToOneWithWhereWithoutPassEdgesToInput = {
    where?: Prisma.PlayerWhereInput;
    data: Prisma.XOR<Prisma.PlayerUpdateWithoutPassEdgesToInput, Prisma.PlayerUncheckedUpdateWithoutPassEdgesToInput>;
};
export type PlayerUpdateWithoutPassEdgesToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPlayersNestedInput;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutPassEdgesToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
};
export type PlayerCreateManyTeamInput = {
    id?: string;
    firstName: string;
    lastName: string;
    position: $Enums.PlayerPosition;
    jerseyNumber: number;
    photoUrl?: string | null;
    createdAt?: Date | string;
};
export type PlayerUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput;
    secondaryEvents?: Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput;
    stats?: Prisma.FrisbeePlayerStatUncheckedUpdateOneWithoutPlayerNestedInput;
    matchStats?: Prisma.MatchPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentStats?: Prisma.TournamentPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput;
    tournamentRosters?: Prisma.TournamentRosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
    passEdgesFrom?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput;
    passEdgesTo?: Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput;
};
export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumPlayerPositionFieldUpdateOperationsInput | $Enums.PlayerPosition;
    jerseyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PlayerCountOutputType
 */
export type PlayerCountOutputType = {
    events: number;
    secondaryEvents: number;
    matchStats: number;
    tournamentStats: number;
    tournamentRosters: number;
    passEdgesFrom: number;
    passEdgesTo: number;
};
export type PlayerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | PlayerCountOutputTypeCountEventsArgs;
    secondaryEvents?: boolean | PlayerCountOutputTypeCountSecondaryEventsArgs;
    matchStats?: boolean | PlayerCountOutputTypeCountMatchStatsArgs;
    tournamentStats?: boolean | PlayerCountOutputTypeCountTournamentStatsArgs;
    tournamentRosters?: boolean | PlayerCountOutputTypeCountTournamentRostersArgs;
    passEdgesFrom?: boolean | PlayerCountOutputTypeCountPassEdgesFromArgs;
    passEdgesTo?: boolean | PlayerCountOutputTypeCountPassEdgesToArgs;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: Prisma.PlayerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FrisbeeMatchEventWhereInput;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountSecondaryEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FrisbeeMatchEventWhereInput;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountMatchStatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchPlayerStatWhereInput;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountTournamentStatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentPlayerStatWhereInput;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountTournamentRostersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRosterPlayerWhereInput;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountPassEdgesFromArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayerPassEdgeWhereInput;
};
/**
 * PlayerCountOutputType without action
 */
export type PlayerCountOutputTypeCountPassEdgesToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayerPassEdgeWhereInput;
};
export type PlayerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    position?: boolean;
    jerseyNumber?: boolean;
    photoUrl?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.Player$eventsArgs<ExtArgs>;
    secondaryEvents?: boolean | Prisma.Player$secondaryEventsArgs<ExtArgs>;
    stats?: boolean | Prisma.Player$statsArgs<ExtArgs>;
    matchStats?: boolean | Prisma.Player$matchStatsArgs<ExtArgs>;
    tournamentStats?: boolean | Prisma.Player$tournamentStatsArgs<ExtArgs>;
    tournamentRosters?: boolean | Prisma.Player$tournamentRostersArgs<ExtArgs>;
    passEdgesFrom?: boolean | Prisma.Player$passEdgesFromArgs<ExtArgs>;
    passEdgesTo?: boolean | Prisma.Player$passEdgesToArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["player"]>;
export type PlayerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    position?: boolean;
    jerseyNumber?: boolean;
    photoUrl?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["player"]>;
export type PlayerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    position?: boolean;
    jerseyNumber?: boolean;
    photoUrl?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["player"]>;
export type PlayerSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    position?: boolean;
    jerseyNumber?: boolean;
    photoUrl?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
};
export type PlayerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "position" | "jerseyNumber" | "photoUrl" | "teamId" | "createdAt", ExtArgs["result"]["player"]>;
export type PlayerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.Player$eventsArgs<ExtArgs>;
    secondaryEvents?: boolean | Prisma.Player$secondaryEventsArgs<ExtArgs>;
    stats?: boolean | Prisma.Player$statsArgs<ExtArgs>;
    matchStats?: boolean | Prisma.Player$matchStatsArgs<ExtArgs>;
    tournamentStats?: boolean | Prisma.Player$tournamentStatsArgs<ExtArgs>;
    tournamentRosters?: boolean | Prisma.Player$tournamentRostersArgs<ExtArgs>;
    passEdgesFrom?: boolean | Prisma.Player$passEdgesFromArgs<ExtArgs>;
    passEdgesTo?: boolean | Prisma.Player$passEdgesToArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlayerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
};
export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
};
export type $PlayerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Player";
    objects: {
        team: Prisma.$TeamPayload<ExtArgs>;
        events: Prisma.$FrisbeeMatchEventPayload<ExtArgs>[];
        secondaryEvents: Prisma.$FrisbeeMatchEventPayload<ExtArgs>[];
        stats: Prisma.$FrisbeePlayerStatPayload<ExtArgs> | null;
        matchStats: Prisma.$MatchPlayerStatPayload<ExtArgs>[];
        tournamentStats: Prisma.$TournamentPlayerStatPayload<ExtArgs>[];
        tournamentRosters: Prisma.$TournamentRosterPlayerPayload<ExtArgs>[];
        passEdgesFrom: Prisma.$PlayerPassEdgePayload<ExtArgs>[];
        passEdgesTo: Prisma.$PlayerPassEdgePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        position: $Enums.PlayerPosition;
        jerseyNumber: number;
        /**
         * Cloudflare R2 / AWS S3 public URL — nullable until a photo is uploaded.
         */
        photoUrl: string | null;
        teamId: string;
        createdAt: Date;
    }, ExtArgs["result"]["player"]>;
    composites: {};
};
export type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlayerPayload, S>;
export type PlayerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayerCountAggregateInputType | true;
};
export interface PlayerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Player'];
        meta: {
            name: 'Player';
        };
    };
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: Prisma.SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: Prisma.SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     *
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayerFindManyArgs>(args?: Prisma.SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     *
     */
    create<T extends PlayerCreateArgs>(args: Prisma.SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayerCreateManyArgs>(args?: Prisma.SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     *
     */
    delete<T extends PlayerDeleteArgs>(args: Prisma.SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayerUpdateArgs>(args: Prisma.SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: Prisma.SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: Prisma.SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(args?: Prisma.Subset<T, PlayerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Prisma.Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>;
    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PlayerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlayerGroupByArgs['orderBy'];
    } : {
        orderBy?: PlayerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Player model
     */
    readonly fields: PlayerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Player.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    team<T extends Prisma.TeamDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeamDefaultArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    events<T extends Prisma.Player$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    secondaryEvents<T extends Prisma.Player$secondaryEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$secondaryEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stats<T extends Prisma.Player$statsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$statsArgs<ExtArgs>>): Prisma.Prisma__FrisbeePlayerStatClient<runtime.Types.Result.GetResult<Prisma.$FrisbeePlayerStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    matchStats<T extends Prisma.Player$matchStatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$matchStatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tournamentStats<T extends Prisma.Player$tournamentStatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$tournamentStatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tournamentRosters<T extends Prisma.Player$tournamentRostersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$tournamentRostersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    passEdgesFrom<T extends Prisma.Player$passEdgesFromArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$passEdgesFromArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    passEdgesTo<T extends Prisma.Player$passEdgesToArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Player$passEdgesToArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Player model
 */
export interface PlayerFieldRefs {
    readonly id: Prisma.FieldRef<"Player", 'String'>;
    readonly firstName: Prisma.FieldRef<"Player", 'String'>;
    readonly lastName: Prisma.FieldRef<"Player", 'String'>;
    readonly position: Prisma.FieldRef<"Player", 'PlayerPosition'>;
    readonly jerseyNumber: Prisma.FieldRef<"Player", 'Int'>;
    readonly photoUrl: Prisma.FieldRef<"Player", 'String'>;
    readonly teamId: Prisma.FieldRef<"Player", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Player", 'DateTime'>;
}
/**
 * Player findUnique
 */
export type PlayerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where: Prisma.PlayerWhereUniqueInput;
};
/**
 * Player findUniqueOrThrow
 */
export type PlayerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where: Prisma.PlayerWhereUniqueInput;
};
/**
 * Player findFirst
 */
export type PlayerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: Prisma.PlayerOrderByWithRelationInput | Prisma.PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Players.
     */
    cursor?: Prisma.PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Players.
     */
    distinct?: Prisma.PlayerScalarFieldEnum | Prisma.PlayerScalarFieldEnum[];
};
/**
 * Player findFirstOrThrow
 */
export type PlayerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: Prisma.PlayerOrderByWithRelationInput | Prisma.PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Players.
     */
    cursor?: Prisma.PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Players.
     */
    distinct?: Prisma.PlayerScalarFieldEnum | Prisma.PlayerScalarFieldEnum[];
};
/**
 * Player findMany
 */
export type PlayerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Players to fetch.
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: Prisma.PlayerOrderByWithRelationInput | Prisma.PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Players.
     */
    cursor?: Prisma.PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Players.
     */
    distinct?: Prisma.PlayerScalarFieldEnum | Prisma.PlayerScalarFieldEnum[];
};
/**
 * Player create
 */
export type PlayerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Player.
     */
    data: Prisma.XOR<Prisma.PlayerCreateInput, Prisma.PlayerUncheckedCreateInput>;
};
/**
 * Player createMany
 */
export type PlayerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: Prisma.PlayerCreateManyInput | Prisma.PlayerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Player createManyAndReturn
 */
export type PlayerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * The data used to create many Players.
     */
    data: Prisma.PlayerCreateManyInput | Prisma.PlayerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Player update
 */
export type PlayerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Player.
     */
    data: Prisma.XOR<Prisma.PlayerUpdateInput, Prisma.PlayerUncheckedUpdateInput>;
    /**
     * Choose, which Player to update.
     */
    where: Prisma.PlayerWhereUniqueInput;
};
/**
 * Player updateMany
 */
export type PlayerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: Prisma.XOR<Prisma.PlayerUpdateManyMutationInput, Prisma.PlayerUncheckedUpdateManyInput>;
    /**
     * Filter which Players to update
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * Limit how many Players to update.
     */
    limit?: number;
};
/**
 * Player updateManyAndReturn
 */
export type PlayerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * The data used to update Players.
     */
    data: Prisma.XOR<Prisma.PlayerUpdateManyMutationInput, Prisma.PlayerUncheckedUpdateManyInput>;
    /**
     * Filter which Players to update
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * Limit how many Players to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Player upsert
 */
export type PlayerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: Prisma.PlayerWhereUniqueInput;
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: Prisma.XOR<Prisma.PlayerCreateInput, Prisma.PlayerUncheckedCreateInput>;
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlayerUpdateInput, Prisma.PlayerUncheckedUpdateInput>;
};
/**
 * Player delete
 */
export type PlayerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
    /**
     * Filter which Player to delete.
     */
    where: Prisma.PlayerWhereUniqueInput;
};
/**
 * Player deleteMany
 */
export type PlayerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: Prisma.PlayerWhereInput;
    /**
     * Limit how many Players to delete.
     */
    limit?: number;
};
/**
 * Player.events
 */
export type Player$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeeMatchEvent
     */
    select?: Prisma.FrisbeeMatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeeMatchEvent
     */
    omit?: Prisma.FrisbeeMatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeeMatchEventInclude<ExtArgs> | null;
    where?: Prisma.FrisbeeMatchEventWhereInput;
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithRelationInput | Prisma.FrisbeeMatchEventOrderByWithRelationInput[];
    cursor?: Prisma.FrisbeeMatchEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FrisbeeMatchEventScalarFieldEnum | Prisma.FrisbeeMatchEventScalarFieldEnum[];
};
/**
 * Player.secondaryEvents
 */
export type Player$secondaryEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeeMatchEvent
     */
    select?: Prisma.FrisbeeMatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeeMatchEvent
     */
    omit?: Prisma.FrisbeeMatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeeMatchEventInclude<ExtArgs> | null;
    where?: Prisma.FrisbeeMatchEventWhereInput;
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithRelationInput | Prisma.FrisbeeMatchEventOrderByWithRelationInput[];
    cursor?: Prisma.FrisbeeMatchEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FrisbeeMatchEventScalarFieldEnum | Prisma.FrisbeeMatchEventScalarFieldEnum[];
};
/**
 * Player.stats
 */
export type Player$statsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.FrisbeePlayerStatWhereInput;
};
/**
 * Player.matchStats
 */
export type Player$matchStatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerStat
     */
    select?: Prisma.MatchPlayerStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchPlayerStat
     */
    omit?: Prisma.MatchPlayerStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchPlayerStatInclude<ExtArgs> | null;
    where?: Prisma.MatchPlayerStatWhereInput;
    orderBy?: Prisma.MatchPlayerStatOrderByWithRelationInput | Prisma.MatchPlayerStatOrderByWithRelationInput[];
    cursor?: Prisma.MatchPlayerStatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchPlayerStatScalarFieldEnum | Prisma.MatchPlayerStatScalarFieldEnum[];
};
/**
 * Player.tournamentStats
 */
export type Player$tournamentStatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TournamentPlayerStatWhereInput;
    orderBy?: Prisma.TournamentPlayerStatOrderByWithRelationInput | Prisma.TournamentPlayerStatOrderByWithRelationInput[];
    cursor?: Prisma.TournamentPlayerStatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentPlayerStatScalarFieldEnum | Prisma.TournamentPlayerStatScalarFieldEnum[];
};
/**
 * Player.tournamentRosters
 */
export type Player$tournamentRostersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TournamentRosterPlayerWhereInput;
    orderBy?: Prisma.TournamentRosterPlayerOrderByWithRelationInput | Prisma.TournamentRosterPlayerOrderByWithRelationInput[];
    cursor?: Prisma.TournamentRosterPlayerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentRosterPlayerScalarFieldEnum | Prisma.TournamentRosterPlayerScalarFieldEnum[];
};
/**
 * Player.passEdgesFrom
 */
export type Player$passEdgesFromArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPassEdge
     */
    select?: Prisma.PlayerPassEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerPassEdge
     */
    omit?: Prisma.PlayerPassEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerPassEdgeInclude<ExtArgs> | null;
    where?: Prisma.PlayerPassEdgeWhereInput;
    orderBy?: Prisma.PlayerPassEdgeOrderByWithRelationInput | Prisma.PlayerPassEdgeOrderByWithRelationInput[];
    cursor?: Prisma.PlayerPassEdgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlayerPassEdgeScalarFieldEnum | Prisma.PlayerPassEdgeScalarFieldEnum[];
};
/**
 * Player.passEdgesTo
 */
export type Player$passEdgesToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPassEdge
     */
    select?: Prisma.PlayerPassEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerPassEdge
     */
    omit?: Prisma.PlayerPassEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerPassEdgeInclude<ExtArgs> | null;
    where?: Prisma.PlayerPassEdgeWhereInput;
    orderBy?: Prisma.PlayerPassEdgeOrderByWithRelationInput | Prisma.PlayerPassEdgeOrderByWithRelationInput[];
    cursor?: Prisma.PlayerPassEdgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlayerPassEdgeScalarFieldEnum | Prisma.PlayerPassEdgeScalarFieldEnum[];
};
/**
 * Player without action
 */
export type PlayerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: Prisma.PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: Prisma.PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerInclude<ExtArgs> | null;
};
//# sourceMappingURL=Player.d.ts.map