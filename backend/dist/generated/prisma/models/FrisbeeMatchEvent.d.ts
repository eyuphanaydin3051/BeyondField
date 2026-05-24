import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model FrisbeeMatchEvent
 * Raw Ultimate Frisbee event log — append-only, never mutated.
 */
export type FrisbeeMatchEventModel = runtime.Types.Result.DefaultSelection<Prisma.$FrisbeeMatchEventPayload>;
export type AggregateFrisbeeMatchEvent = {
    _count: FrisbeeMatchEventCountAggregateOutputType | null;
    _avg: FrisbeeMatchEventAvgAggregateOutputType | null;
    _sum: FrisbeeMatchEventSumAggregateOutputType | null;
    _min: FrisbeeMatchEventMinAggregateOutputType | null;
    _max: FrisbeeMatchEventMaxAggregateOutputType | null;
};
export type FrisbeeMatchEventAvgAggregateOutputType = {
    minute: number | null;
    videoTimestampSeconds: number | null;
    period: number | null;
    scoreUsAtEvent: number | null;
    scoreThemAtEvent: number | null;
};
export type FrisbeeMatchEventSumAggregateOutputType = {
    minute: number | null;
    videoTimestampSeconds: number | null;
    period: number | null;
    scoreUsAtEvent: number | null;
    scoreThemAtEvent: number | null;
};
export type FrisbeeMatchEventMinAggregateOutputType = {
    id: string | null;
    matchId: string | null;
    playerId: string | null;
    secondaryPlayerId: string | null;
    actionType: $Enums.FrisbeeActionType | null;
    minute: number | null;
    videoTimestampSeconds: number | null;
    period: number | null;
    scoreUsAtEvent: number | null;
    scoreThemAtEvent: number | null;
    createdAt: Date | null;
};
export type FrisbeeMatchEventMaxAggregateOutputType = {
    id: string | null;
    matchId: string | null;
    playerId: string | null;
    secondaryPlayerId: string | null;
    actionType: $Enums.FrisbeeActionType | null;
    minute: number | null;
    videoTimestampSeconds: number | null;
    period: number | null;
    scoreUsAtEvent: number | null;
    scoreThemAtEvent: number | null;
    createdAt: Date | null;
};
export type FrisbeeMatchEventCountAggregateOutputType = {
    id: number;
    matchId: number;
    playerId: number;
    secondaryPlayerId: number;
    actionType: number;
    minute: number;
    videoTimestampSeconds: number;
    period: number;
    scoreUsAtEvent: number;
    scoreThemAtEvent: number;
    createdAt: number;
    _all: number;
};
export type FrisbeeMatchEventAvgAggregateInputType = {
    minute?: true;
    videoTimestampSeconds?: true;
    period?: true;
    scoreUsAtEvent?: true;
    scoreThemAtEvent?: true;
};
export type FrisbeeMatchEventSumAggregateInputType = {
    minute?: true;
    videoTimestampSeconds?: true;
    period?: true;
    scoreUsAtEvent?: true;
    scoreThemAtEvent?: true;
};
export type FrisbeeMatchEventMinAggregateInputType = {
    id?: true;
    matchId?: true;
    playerId?: true;
    secondaryPlayerId?: true;
    actionType?: true;
    minute?: true;
    videoTimestampSeconds?: true;
    period?: true;
    scoreUsAtEvent?: true;
    scoreThemAtEvent?: true;
    createdAt?: true;
};
export type FrisbeeMatchEventMaxAggregateInputType = {
    id?: true;
    matchId?: true;
    playerId?: true;
    secondaryPlayerId?: true;
    actionType?: true;
    minute?: true;
    videoTimestampSeconds?: true;
    period?: true;
    scoreUsAtEvent?: true;
    scoreThemAtEvent?: true;
    createdAt?: true;
};
export type FrisbeeMatchEventCountAggregateInputType = {
    id?: true;
    matchId?: true;
    playerId?: true;
    secondaryPlayerId?: true;
    actionType?: true;
    minute?: true;
    videoTimestampSeconds?: true;
    period?: true;
    scoreUsAtEvent?: true;
    scoreThemAtEvent?: true;
    createdAt?: true;
    _all?: true;
};
export type FrisbeeMatchEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FrisbeeMatchEvent to aggregate.
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeeMatchEvents to fetch.
     */
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithRelationInput | Prisma.FrisbeeMatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FrisbeeMatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeeMatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeeMatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FrisbeeMatchEvents
    **/
    _count?: true | FrisbeeMatchEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FrisbeeMatchEventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FrisbeeMatchEventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FrisbeeMatchEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FrisbeeMatchEventMaxAggregateInputType;
};
export type GetFrisbeeMatchEventAggregateType<T extends FrisbeeMatchEventAggregateArgs> = {
    [P in keyof T & keyof AggregateFrisbeeMatchEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFrisbeeMatchEvent[P]> : Prisma.GetScalarType<T[P], AggregateFrisbeeMatchEvent[P]>;
};
export type FrisbeeMatchEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FrisbeeMatchEventWhereInput;
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithAggregationInput | Prisma.FrisbeeMatchEventOrderByWithAggregationInput[];
    by: Prisma.FrisbeeMatchEventScalarFieldEnum[] | Prisma.FrisbeeMatchEventScalarFieldEnum;
    having?: Prisma.FrisbeeMatchEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FrisbeeMatchEventCountAggregateInputType | true;
    _avg?: FrisbeeMatchEventAvgAggregateInputType;
    _sum?: FrisbeeMatchEventSumAggregateInputType;
    _min?: FrisbeeMatchEventMinAggregateInputType;
    _max?: FrisbeeMatchEventMaxAggregateInputType;
};
export type FrisbeeMatchEventGroupByOutputType = {
    id: string;
    matchId: string;
    playerId: string;
    secondaryPlayerId: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds: number | null;
    period: number | null;
    scoreUsAtEvent: number | null;
    scoreThemAtEvent: number | null;
    createdAt: Date;
    _count: FrisbeeMatchEventCountAggregateOutputType | null;
    _avg: FrisbeeMatchEventAvgAggregateOutputType | null;
    _sum: FrisbeeMatchEventSumAggregateOutputType | null;
    _min: FrisbeeMatchEventMinAggregateOutputType | null;
    _max: FrisbeeMatchEventMaxAggregateOutputType | null;
};
export type GetFrisbeeMatchEventGroupByPayload<T extends FrisbeeMatchEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FrisbeeMatchEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FrisbeeMatchEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FrisbeeMatchEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FrisbeeMatchEventGroupByOutputType[P]>;
}>>;
export type FrisbeeMatchEventWhereInput = {
    AND?: Prisma.FrisbeeMatchEventWhereInput | Prisma.FrisbeeMatchEventWhereInput[];
    OR?: Prisma.FrisbeeMatchEventWhereInput[];
    NOT?: Prisma.FrisbeeMatchEventWhereInput | Prisma.FrisbeeMatchEventWhereInput[];
    id?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    matchId?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    playerId?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    secondaryPlayerId?: Prisma.StringNullableFilter<"FrisbeeMatchEvent"> | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFilter<"FrisbeeMatchEvent"> | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFilter<"FrisbeeMatchEvent"> | number;
    videoTimestampSeconds?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    period?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    scoreUsAtEvent?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    scoreThemAtEvent?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"FrisbeeMatchEvent"> | Date | string;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    secondaryPlayer?: Prisma.XOR<Prisma.PlayerNullableScalarRelationFilter, Prisma.PlayerWhereInput> | null;
};
export type FrisbeeMatchEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    secondaryPlayerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrderInput | Prisma.SortOrder;
    period?: Prisma.SortOrderInput | Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrderInput | Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    match?: Prisma.MatchOrderByWithRelationInput;
    player?: Prisma.PlayerOrderByWithRelationInput;
    secondaryPlayer?: Prisma.PlayerOrderByWithRelationInput;
};
export type FrisbeeMatchEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FrisbeeMatchEventWhereInput | Prisma.FrisbeeMatchEventWhereInput[];
    OR?: Prisma.FrisbeeMatchEventWhereInput[];
    NOT?: Prisma.FrisbeeMatchEventWhereInput | Prisma.FrisbeeMatchEventWhereInput[];
    matchId?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    playerId?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    secondaryPlayerId?: Prisma.StringNullableFilter<"FrisbeeMatchEvent"> | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFilter<"FrisbeeMatchEvent"> | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFilter<"FrisbeeMatchEvent"> | number;
    videoTimestampSeconds?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    period?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    scoreUsAtEvent?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    scoreThemAtEvent?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"FrisbeeMatchEvent"> | Date | string;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    secondaryPlayer?: Prisma.XOR<Prisma.PlayerNullableScalarRelationFilter, Prisma.PlayerWhereInput> | null;
}, "id">;
export type FrisbeeMatchEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    secondaryPlayerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrderInput | Prisma.SortOrder;
    period?: Prisma.SortOrderInput | Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrderInput | Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FrisbeeMatchEventCountOrderByAggregateInput;
    _avg?: Prisma.FrisbeeMatchEventAvgOrderByAggregateInput;
    _max?: Prisma.FrisbeeMatchEventMaxOrderByAggregateInput;
    _min?: Prisma.FrisbeeMatchEventMinOrderByAggregateInput;
    _sum?: Prisma.FrisbeeMatchEventSumOrderByAggregateInput;
};
export type FrisbeeMatchEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.FrisbeeMatchEventScalarWhereWithAggregatesInput | Prisma.FrisbeeMatchEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.FrisbeeMatchEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FrisbeeMatchEventScalarWhereWithAggregatesInput | Prisma.FrisbeeMatchEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FrisbeeMatchEvent"> | string;
    matchId?: Prisma.StringWithAggregatesFilter<"FrisbeeMatchEvent"> | string;
    playerId?: Prisma.StringWithAggregatesFilter<"FrisbeeMatchEvent"> | string;
    secondaryPlayerId?: Prisma.StringNullableWithAggregatesFilter<"FrisbeeMatchEvent"> | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeWithAggregatesFilter<"FrisbeeMatchEvent"> | $Enums.FrisbeeActionType;
    minute?: Prisma.IntWithAggregatesFilter<"FrisbeeMatchEvent"> | number;
    videoTimestampSeconds?: Prisma.IntNullableWithAggregatesFilter<"FrisbeeMatchEvent"> | number | null;
    period?: Prisma.IntNullableWithAggregatesFilter<"FrisbeeMatchEvent"> | number | null;
    scoreUsAtEvent?: Prisma.IntNullableWithAggregatesFilter<"FrisbeeMatchEvent"> | number | null;
    scoreThemAtEvent?: Prisma.IntNullableWithAggregatesFilter<"FrisbeeMatchEvent"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FrisbeeMatchEvent"> | Date | string;
};
export type FrisbeeMatchEventCreateInput = {
    id?: string;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
    match: Prisma.MatchCreateNestedOneWithoutEventsInput;
    player: Prisma.PlayerCreateNestedOneWithoutEventsInput;
    secondaryPlayer?: Prisma.PlayerCreateNestedOneWithoutSecondaryEventsInput;
};
export type FrisbeeMatchEventUncheckedCreateInput = {
    id?: string;
    matchId: string;
    playerId: string;
    secondaryPlayerId?: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    match?: Prisma.MatchUpdateOneRequiredWithoutEventsNestedInput;
    player?: Prisma.PlayerUpdateOneRequiredWithoutEventsNestedInput;
    secondaryPlayer?: Prisma.PlayerUpdateOneWithoutSecondaryEventsNestedInput;
};
export type FrisbeeMatchEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventCreateManyInput = {
    id?: string;
    matchId: string;
    playerId: string;
    secondaryPlayerId?: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventListRelationFilter = {
    every?: Prisma.FrisbeeMatchEventWhereInput;
    some?: Prisma.FrisbeeMatchEventWhereInput;
    none?: Prisma.FrisbeeMatchEventWhereInput;
};
export type FrisbeeMatchEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FrisbeeMatchEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    secondaryPlayerId?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FrisbeeMatchEventAvgOrderByAggregateInput = {
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrder;
};
export type FrisbeeMatchEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    secondaryPlayerId?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FrisbeeMatchEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    secondaryPlayerId?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FrisbeeMatchEventSumOrderByAggregateInput = {
    minute?: Prisma.SortOrder;
    videoTimestampSeconds?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    scoreUsAtEvent?: Prisma.SortOrder;
    scoreThemAtEvent?: Prisma.SortOrder;
};
export type FrisbeeMatchEventCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyPlayerInputEnvelope;
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
};
export type FrisbeeMatchEventCreateNestedManyWithoutSecondaryPlayerInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManySecondaryPlayerInputEnvelope;
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
};
export type FrisbeeMatchEventUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyPlayerInputEnvelope;
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
};
export type FrisbeeMatchEventUncheckedCreateNestedManyWithoutSecondaryPlayerInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManySecondaryPlayerInputEnvelope;
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
};
export type FrisbeeMatchEventUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutPlayerInput | Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyPlayerInputEnvelope;
    set?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    disconnect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    delete?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    update?: Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutPlayerInput | Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutPlayerInput | Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
};
export type FrisbeeMatchEventUpdateManyWithoutSecondaryPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput[];
    upsert?: Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutSecondaryPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManySecondaryPlayerInputEnvelope;
    set?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    disconnect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    delete?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    update?: Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutSecondaryPlayerInput[];
    updateMany?: Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutSecondaryPlayerInput[];
    deleteMany?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
};
export type FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutPlayerInput | Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyPlayerInputEnvelope;
    set?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    disconnect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    delete?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    update?: Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutPlayerInput | Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutPlayerInput | Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
};
export type FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput> | Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput[];
    upsert?: Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutSecondaryPlayerInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManySecondaryPlayerInputEnvelope;
    set?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    disconnect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    delete?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    update?: Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutSecondaryPlayerInput[];
    updateMany?: Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutSecondaryPlayerInput | Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutSecondaryPlayerInput[];
    deleteMany?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
};
export type FrisbeeMatchEventCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput> | Prisma.FrisbeeMatchEventCreateWithoutMatchInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyMatchInputEnvelope;
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
};
export type FrisbeeMatchEventUncheckedCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput> | Prisma.FrisbeeMatchEventCreateWithoutMatchInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyMatchInputEnvelope;
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
};
export type FrisbeeMatchEventUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput> | Prisma.FrisbeeMatchEventCreateWithoutMatchInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutMatchInput | Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyMatchInputEnvelope;
    set?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    disconnect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    delete?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    update?: Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutMatchInput | Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutMatchInput | Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
};
export type FrisbeeMatchEventUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput> | Prisma.FrisbeeMatchEventCreateWithoutMatchInput[] | Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput | Prisma.FrisbeeMatchEventCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutMatchInput | Prisma.FrisbeeMatchEventUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.FrisbeeMatchEventCreateManyMatchInputEnvelope;
    set?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    disconnect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    delete?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    connect?: Prisma.FrisbeeMatchEventWhereUniqueInput | Prisma.FrisbeeMatchEventWhereUniqueInput[];
    update?: Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutMatchInput | Prisma.FrisbeeMatchEventUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutMatchInput | Prisma.FrisbeeMatchEventUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
};
export type EnumFrisbeeActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.FrisbeeActionType;
};
export type FrisbeeMatchEventCreateWithoutPlayerInput = {
    id?: string;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
    match: Prisma.MatchCreateNestedOneWithoutEventsInput;
    secondaryPlayer?: Prisma.PlayerCreateNestedOneWithoutSecondaryEventsInput;
};
export type FrisbeeMatchEventUncheckedCreateWithoutPlayerInput = {
    id?: string;
    matchId: string;
    secondaryPlayerId?: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventCreateOrConnectWithoutPlayerInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput>;
};
export type FrisbeeMatchEventCreateManyPlayerInputEnvelope = {
    data: Prisma.FrisbeeMatchEventCreateManyPlayerInput | Prisma.FrisbeeMatchEventCreateManyPlayerInput[];
    skipDuplicates?: boolean;
};
export type FrisbeeMatchEventCreateWithoutSecondaryPlayerInput = {
    id?: string;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
    match: Prisma.MatchCreateNestedOneWithoutEventsInput;
    player: Prisma.PlayerCreateNestedOneWithoutEventsInput;
};
export type FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput = {
    id?: string;
    matchId: string;
    playerId: string;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventCreateOrConnectWithoutSecondaryPlayerInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput>;
};
export type FrisbeeMatchEventCreateManySecondaryPlayerInputEnvelope = {
    data: Prisma.FrisbeeMatchEventCreateManySecondaryPlayerInput | Prisma.FrisbeeMatchEventCreateManySecondaryPlayerInput[];
    skipDuplicates?: boolean;
};
export type FrisbeeMatchEventUpsertWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutPlayerInput>;
};
export type FrisbeeMatchEventUpdateWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateWithoutPlayerInput, Prisma.FrisbeeMatchEventUncheckedUpdateWithoutPlayerInput>;
};
export type FrisbeeMatchEventUpdateManyWithWhereWithoutPlayerInput = {
    where: Prisma.FrisbeeMatchEventScalarWhereInput;
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateManyMutationInput, Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerInput>;
};
export type FrisbeeMatchEventScalarWhereInput = {
    AND?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
    OR?: Prisma.FrisbeeMatchEventScalarWhereInput[];
    NOT?: Prisma.FrisbeeMatchEventScalarWhereInput | Prisma.FrisbeeMatchEventScalarWhereInput[];
    id?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    matchId?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    playerId?: Prisma.StringFilter<"FrisbeeMatchEvent"> | string;
    secondaryPlayerId?: Prisma.StringNullableFilter<"FrisbeeMatchEvent"> | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFilter<"FrisbeeMatchEvent"> | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFilter<"FrisbeeMatchEvent"> | number;
    videoTimestampSeconds?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    period?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    scoreUsAtEvent?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    scoreThemAtEvent?: Prisma.IntNullableFilter<"FrisbeeMatchEvent"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"FrisbeeMatchEvent"> | Date | string;
};
export type FrisbeeMatchEventUpsertWithWhereUniqueWithoutSecondaryPlayerInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedUpdateWithoutSecondaryPlayerInput>;
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutSecondaryPlayerInput>;
};
export type FrisbeeMatchEventUpdateWithWhereUniqueWithoutSecondaryPlayerInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateWithoutSecondaryPlayerInput, Prisma.FrisbeeMatchEventUncheckedUpdateWithoutSecondaryPlayerInput>;
};
export type FrisbeeMatchEventUpdateManyWithWhereWithoutSecondaryPlayerInput = {
    where: Prisma.FrisbeeMatchEventScalarWhereInput;
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateManyMutationInput, Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerInput>;
};
export type FrisbeeMatchEventCreateWithoutMatchInput = {
    id?: string;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
    player: Prisma.PlayerCreateNestedOneWithoutEventsInput;
    secondaryPlayer?: Prisma.PlayerCreateNestedOneWithoutSecondaryEventsInput;
};
export type FrisbeeMatchEventUncheckedCreateWithoutMatchInput = {
    id?: string;
    playerId: string;
    secondaryPlayerId?: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventCreateOrConnectWithoutMatchInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput>;
};
export type FrisbeeMatchEventCreateManyMatchInputEnvelope = {
    data: Prisma.FrisbeeMatchEventCreateManyMatchInput | Prisma.FrisbeeMatchEventCreateManyMatchInput[];
    skipDuplicates?: boolean;
};
export type FrisbeeMatchEventUpsertWithWhereUniqueWithoutMatchInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedUpdateWithoutMatchInput>;
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedCreateWithoutMatchInput>;
};
export type FrisbeeMatchEventUpdateWithWhereUniqueWithoutMatchInput = {
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateWithoutMatchInput, Prisma.FrisbeeMatchEventUncheckedUpdateWithoutMatchInput>;
};
export type FrisbeeMatchEventUpdateManyWithWhereWithoutMatchInput = {
    where: Prisma.FrisbeeMatchEventScalarWhereInput;
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateManyMutationInput, Prisma.FrisbeeMatchEventUncheckedUpdateManyWithoutMatchInput>;
};
export type FrisbeeMatchEventCreateManyPlayerInput = {
    id?: string;
    matchId: string;
    secondaryPlayerId?: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventCreateManySecondaryPlayerInput = {
    id?: string;
    matchId: string;
    playerId: string;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    match?: Prisma.MatchUpdateOneRequiredWithoutEventsNestedInput;
    secondaryPlayer?: Prisma.PlayerUpdateOneWithoutSecondaryEventsNestedInput;
};
export type FrisbeeMatchEventUncheckedUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventUncheckedUpdateManyWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventUpdateWithoutSecondaryPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    match?: Prisma.MatchUpdateOneRequiredWithoutEventsNestedInput;
    player?: Prisma.PlayerUpdateOneRequiredWithoutEventsNestedInput;
};
export type FrisbeeMatchEventUncheckedUpdateWithoutSecondaryPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventUncheckedUpdateManyWithoutSecondaryPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventCreateManyMatchInput = {
    id?: string;
    playerId: string;
    secondaryPlayerId?: string | null;
    actionType: $Enums.FrisbeeActionType;
    minute: number;
    videoTimestampSeconds?: number | null;
    period?: number | null;
    scoreUsAtEvent?: number | null;
    scoreThemAtEvent?: number | null;
    createdAt?: Date | string;
};
export type FrisbeeMatchEventUpdateWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    player?: Prisma.PlayerUpdateOneRequiredWithoutEventsNestedInput;
    secondaryPlayer?: Prisma.PlayerUpdateOneWithoutSecondaryEventsNestedInput;
};
export type FrisbeeMatchEventUncheckedUpdateWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventUncheckedUpdateManyWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actionType?: Prisma.EnumFrisbeeActionTypeFieldUpdateOperationsInput | $Enums.FrisbeeActionType;
    minute?: Prisma.IntFieldUpdateOperationsInput | number;
    videoTimestampSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    period?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreUsAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    scoreThemAtEvent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FrisbeeMatchEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matchId?: boolean;
    playerId?: boolean;
    secondaryPlayerId?: boolean;
    actionType?: boolean;
    minute?: boolean;
    videoTimestampSeconds?: boolean;
    period?: boolean;
    scoreUsAtEvent?: boolean;
    scoreThemAtEvent?: boolean;
    createdAt?: boolean;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    secondaryPlayer?: boolean | Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>;
}, ExtArgs["result"]["frisbeeMatchEvent"]>;
export type FrisbeeMatchEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matchId?: boolean;
    playerId?: boolean;
    secondaryPlayerId?: boolean;
    actionType?: boolean;
    minute?: boolean;
    videoTimestampSeconds?: boolean;
    period?: boolean;
    scoreUsAtEvent?: boolean;
    scoreThemAtEvent?: boolean;
    createdAt?: boolean;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    secondaryPlayer?: boolean | Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>;
}, ExtArgs["result"]["frisbeeMatchEvent"]>;
export type FrisbeeMatchEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matchId?: boolean;
    playerId?: boolean;
    secondaryPlayerId?: boolean;
    actionType?: boolean;
    minute?: boolean;
    videoTimestampSeconds?: boolean;
    period?: boolean;
    scoreUsAtEvent?: boolean;
    scoreThemAtEvent?: boolean;
    createdAt?: boolean;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    secondaryPlayer?: boolean | Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>;
}, ExtArgs["result"]["frisbeeMatchEvent"]>;
export type FrisbeeMatchEventSelectScalar = {
    id?: boolean;
    matchId?: boolean;
    playerId?: boolean;
    secondaryPlayerId?: boolean;
    actionType?: boolean;
    minute?: boolean;
    videoTimestampSeconds?: boolean;
    period?: boolean;
    scoreUsAtEvent?: boolean;
    scoreThemAtEvent?: boolean;
    createdAt?: boolean;
};
export type FrisbeeMatchEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matchId" | "playerId" | "secondaryPlayerId" | "actionType" | "minute" | "videoTimestampSeconds" | "period" | "scoreUsAtEvent" | "scoreThemAtEvent" | "createdAt", ExtArgs["result"]["frisbeeMatchEvent"]>;
export type FrisbeeMatchEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    secondaryPlayer?: boolean | Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>;
};
export type FrisbeeMatchEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    secondaryPlayer?: boolean | Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>;
};
export type FrisbeeMatchEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    secondaryPlayer?: boolean | Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>;
};
export type $FrisbeeMatchEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FrisbeeMatchEvent";
    objects: {
        match: Prisma.$MatchPayload<ExtArgs>;
        player: Prisma.$PlayerPayload<ExtArgs>;
        secondaryPlayer: Prisma.$PlayerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        matchId: string;
        playerId: string;
        secondaryPlayerId: string | null;
        actionType: $Enums.FrisbeeActionType;
        minute: number;
        videoTimestampSeconds: number | null;
        period: number | null;
        scoreUsAtEvent: number | null;
        scoreThemAtEvent: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["frisbeeMatchEvent"]>;
    composites: {};
};
export type FrisbeeMatchEventGetPayload<S extends boolean | null | undefined | FrisbeeMatchEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload, S>;
export type FrisbeeMatchEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FrisbeeMatchEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FrisbeeMatchEventCountAggregateInputType | true;
};
export interface FrisbeeMatchEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FrisbeeMatchEvent'];
        meta: {
            name: 'FrisbeeMatchEvent';
        };
    };
    /**
     * Find zero or one FrisbeeMatchEvent that matches the filter.
     * @param {FrisbeeMatchEventFindUniqueArgs} args - Arguments to find a FrisbeeMatchEvent
     * @example
     * // Get one FrisbeeMatchEvent
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrisbeeMatchEventFindUniqueArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FrisbeeMatchEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrisbeeMatchEventFindUniqueOrThrowArgs} args - Arguments to find a FrisbeeMatchEvent
     * @example
     * // Get one FrisbeeMatchEvent
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrisbeeMatchEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FrisbeeMatchEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventFindFirstArgs} args - Arguments to find a FrisbeeMatchEvent
     * @example
     * // Get one FrisbeeMatchEvent
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrisbeeMatchEventFindFirstArgs>(args?: Prisma.SelectSubset<T, FrisbeeMatchEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FrisbeeMatchEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventFindFirstOrThrowArgs} args - Arguments to find a FrisbeeMatchEvent
     * @example
     * // Get one FrisbeeMatchEvent
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrisbeeMatchEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FrisbeeMatchEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FrisbeeMatchEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrisbeeMatchEvents
     * const frisbeeMatchEvents = await prisma.frisbeeMatchEvent.findMany()
     *
     * // Get first 10 FrisbeeMatchEvents
     * const frisbeeMatchEvents = await prisma.frisbeeMatchEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const frisbeeMatchEventWithIdOnly = await prisma.frisbeeMatchEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FrisbeeMatchEventFindManyArgs>(args?: Prisma.SelectSubset<T, FrisbeeMatchEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FrisbeeMatchEvent.
     * @param {FrisbeeMatchEventCreateArgs} args - Arguments to create a FrisbeeMatchEvent.
     * @example
     * // Create one FrisbeeMatchEvent
     * const FrisbeeMatchEvent = await prisma.frisbeeMatchEvent.create({
     *   data: {
     *     // ... data to create a FrisbeeMatchEvent
     *   }
     * })
     *
     */
    create<T extends FrisbeeMatchEventCreateArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventCreateArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FrisbeeMatchEvents.
     * @param {FrisbeeMatchEventCreateManyArgs} args - Arguments to create many FrisbeeMatchEvents.
     * @example
     * // Create many FrisbeeMatchEvents
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FrisbeeMatchEventCreateManyArgs>(args?: Prisma.SelectSubset<T, FrisbeeMatchEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FrisbeeMatchEvents and returns the data saved in the database.
     * @param {FrisbeeMatchEventCreateManyAndReturnArgs} args - Arguments to create many FrisbeeMatchEvents.
     * @example
     * // Create many FrisbeeMatchEvents
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FrisbeeMatchEvents and only return the `id`
     * const frisbeeMatchEventWithIdOnly = await prisma.frisbeeMatchEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FrisbeeMatchEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FrisbeeMatchEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FrisbeeMatchEvent.
     * @param {FrisbeeMatchEventDeleteArgs} args - Arguments to delete one FrisbeeMatchEvent.
     * @example
     * // Delete one FrisbeeMatchEvent
     * const FrisbeeMatchEvent = await prisma.frisbeeMatchEvent.delete({
     *   where: {
     *     // ... filter to delete one FrisbeeMatchEvent
     *   }
     * })
     *
     */
    delete<T extends FrisbeeMatchEventDeleteArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventDeleteArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FrisbeeMatchEvent.
     * @param {FrisbeeMatchEventUpdateArgs} args - Arguments to update one FrisbeeMatchEvent.
     * @example
     * // Update one FrisbeeMatchEvent
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FrisbeeMatchEventUpdateArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventUpdateArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FrisbeeMatchEvents.
     * @param {FrisbeeMatchEventDeleteManyArgs} args - Arguments to filter FrisbeeMatchEvents to delete.
     * @example
     * // Delete a few FrisbeeMatchEvents
     * const { count } = await prisma.frisbeeMatchEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FrisbeeMatchEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, FrisbeeMatchEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FrisbeeMatchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrisbeeMatchEvents
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FrisbeeMatchEventUpdateManyArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FrisbeeMatchEvents and returns the data updated in the database.
     * @param {FrisbeeMatchEventUpdateManyAndReturnArgs} args - Arguments to update many FrisbeeMatchEvents.
     * @example
     * // Update many FrisbeeMatchEvents
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FrisbeeMatchEvents and only return the `id`
     * const frisbeeMatchEventWithIdOnly = await prisma.frisbeeMatchEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends FrisbeeMatchEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FrisbeeMatchEvent.
     * @param {FrisbeeMatchEventUpsertArgs} args - Arguments to update or create a FrisbeeMatchEvent.
     * @example
     * // Update or create a FrisbeeMatchEvent
     * const frisbeeMatchEvent = await prisma.frisbeeMatchEvent.upsert({
     *   create: {
     *     // ... data to create a FrisbeeMatchEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrisbeeMatchEvent we want to update
     *   }
     * })
     */
    upsert<T extends FrisbeeMatchEventUpsertArgs>(args: Prisma.SelectSubset<T, FrisbeeMatchEventUpsertArgs<ExtArgs>>): Prisma.Prisma__FrisbeeMatchEventClient<runtime.Types.Result.GetResult<Prisma.$FrisbeeMatchEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FrisbeeMatchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventCountArgs} args - Arguments to filter FrisbeeMatchEvents to count.
     * @example
     * // Count the number of FrisbeeMatchEvents
     * const count = await prisma.frisbeeMatchEvent.count({
     *   where: {
     *     // ... the filter for the FrisbeeMatchEvents we want to count
     *   }
     * })
    **/
    count<T extends FrisbeeMatchEventCountArgs>(args?: Prisma.Subset<T, FrisbeeMatchEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FrisbeeMatchEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FrisbeeMatchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrisbeeMatchEventAggregateArgs>(args: Prisma.Subset<T, FrisbeeMatchEventAggregateArgs>): Prisma.PrismaPromise<GetFrisbeeMatchEventAggregateType<T>>;
    /**
     * Group by FrisbeeMatchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrisbeeMatchEventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FrisbeeMatchEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FrisbeeMatchEventGroupByArgs['orderBy'];
    } : {
        orderBy?: FrisbeeMatchEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FrisbeeMatchEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrisbeeMatchEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FrisbeeMatchEvent model
     */
    readonly fields: FrisbeeMatchEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FrisbeeMatchEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FrisbeeMatchEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    match<T extends Prisma.MatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatchDefaultArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    player<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    secondaryPlayer<T extends Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the FrisbeeMatchEvent model
 */
export interface FrisbeeMatchEventFieldRefs {
    readonly id: Prisma.FieldRef<"FrisbeeMatchEvent", 'String'>;
    readonly matchId: Prisma.FieldRef<"FrisbeeMatchEvent", 'String'>;
    readonly playerId: Prisma.FieldRef<"FrisbeeMatchEvent", 'String'>;
    readonly secondaryPlayerId: Prisma.FieldRef<"FrisbeeMatchEvent", 'String'>;
    readonly actionType: Prisma.FieldRef<"FrisbeeMatchEvent", 'FrisbeeActionType'>;
    readonly minute: Prisma.FieldRef<"FrisbeeMatchEvent", 'Int'>;
    readonly videoTimestampSeconds: Prisma.FieldRef<"FrisbeeMatchEvent", 'Int'>;
    readonly period: Prisma.FieldRef<"FrisbeeMatchEvent", 'Int'>;
    readonly scoreUsAtEvent: Prisma.FieldRef<"FrisbeeMatchEvent", 'Int'>;
    readonly scoreThemAtEvent: Prisma.FieldRef<"FrisbeeMatchEvent", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"FrisbeeMatchEvent", 'DateTime'>;
}
/**
 * FrisbeeMatchEvent findUnique
 */
export type FrisbeeMatchEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FrisbeeMatchEvent to fetch.
     */
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
};
/**
 * FrisbeeMatchEvent findUniqueOrThrow
 */
export type FrisbeeMatchEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FrisbeeMatchEvent to fetch.
     */
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
};
/**
 * FrisbeeMatchEvent findFirst
 */
export type FrisbeeMatchEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FrisbeeMatchEvent to fetch.
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeeMatchEvents to fetch.
     */
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithRelationInput | Prisma.FrisbeeMatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FrisbeeMatchEvents.
     */
    cursor?: Prisma.FrisbeeMatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeeMatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeeMatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FrisbeeMatchEvents.
     */
    distinct?: Prisma.FrisbeeMatchEventScalarFieldEnum | Prisma.FrisbeeMatchEventScalarFieldEnum[];
};
/**
 * FrisbeeMatchEvent findFirstOrThrow
 */
export type FrisbeeMatchEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FrisbeeMatchEvent to fetch.
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeeMatchEvents to fetch.
     */
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithRelationInput | Prisma.FrisbeeMatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FrisbeeMatchEvents.
     */
    cursor?: Prisma.FrisbeeMatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeeMatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeeMatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FrisbeeMatchEvents.
     */
    distinct?: Prisma.FrisbeeMatchEventScalarFieldEnum | Prisma.FrisbeeMatchEventScalarFieldEnum[];
};
/**
 * FrisbeeMatchEvent findMany
 */
export type FrisbeeMatchEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FrisbeeMatchEvents to fetch.
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FrisbeeMatchEvents to fetch.
     */
    orderBy?: Prisma.FrisbeeMatchEventOrderByWithRelationInput | Prisma.FrisbeeMatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FrisbeeMatchEvents.
     */
    cursor?: Prisma.FrisbeeMatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FrisbeeMatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FrisbeeMatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FrisbeeMatchEvents.
     */
    distinct?: Prisma.FrisbeeMatchEventScalarFieldEnum | Prisma.FrisbeeMatchEventScalarFieldEnum[];
};
/**
 * FrisbeeMatchEvent create
 */
export type FrisbeeMatchEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a FrisbeeMatchEvent.
     */
    data: Prisma.XOR<Prisma.FrisbeeMatchEventCreateInput, Prisma.FrisbeeMatchEventUncheckedCreateInput>;
};
/**
 * FrisbeeMatchEvent createMany
 */
export type FrisbeeMatchEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FrisbeeMatchEvents.
     */
    data: Prisma.FrisbeeMatchEventCreateManyInput | Prisma.FrisbeeMatchEventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FrisbeeMatchEvent createManyAndReturn
 */
export type FrisbeeMatchEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeeMatchEvent
     */
    select?: Prisma.FrisbeeMatchEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeeMatchEvent
     */
    omit?: Prisma.FrisbeeMatchEventOmit<ExtArgs> | null;
    /**
     * The data used to create many FrisbeeMatchEvents.
     */
    data: Prisma.FrisbeeMatchEventCreateManyInput | Prisma.FrisbeeMatchEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeeMatchEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FrisbeeMatchEvent update
 */
export type FrisbeeMatchEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a FrisbeeMatchEvent.
     */
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateInput, Prisma.FrisbeeMatchEventUncheckedUpdateInput>;
    /**
     * Choose, which FrisbeeMatchEvent to update.
     */
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
};
/**
 * FrisbeeMatchEvent updateMany
 */
export type FrisbeeMatchEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FrisbeeMatchEvents.
     */
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateManyMutationInput, Prisma.FrisbeeMatchEventUncheckedUpdateManyInput>;
    /**
     * Filter which FrisbeeMatchEvents to update
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * Limit how many FrisbeeMatchEvents to update.
     */
    limit?: number;
};
/**
 * FrisbeeMatchEvent updateManyAndReturn
 */
export type FrisbeeMatchEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrisbeeMatchEvent
     */
    select?: Prisma.FrisbeeMatchEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FrisbeeMatchEvent
     */
    omit?: Prisma.FrisbeeMatchEventOmit<ExtArgs> | null;
    /**
     * The data used to update FrisbeeMatchEvents.
     */
    data: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateManyMutationInput, Prisma.FrisbeeMatchEventUncheckedUpdateManyInput>;
    /**
     * Filter which FrisbeeMatchEvents to update
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * Limit how many FrisbeeMatchEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FrisbeeMatchEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FrisbeeMatchEvent upsert
 */
export type FrisbeeMatchEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the FrisbeeMatchEvent to update in case it exists.
     */
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
    /**
     * In case the FrisbeeMatchEvent found by the `where` argument doesn't exist, create a new FrisbeeMatchEvent with this data.
     */
    create: Prisma.XOR<Prisma.FrisbeeMatchEventCreateInput, Prisma.FrisbeeMatchEventUncheckedCreateInput>;
    /**
     * In case the FrisbeeMatchEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FrisbeeMatchEventUpdateInput, Prisma.FrisbeeMatchEventUncheckedUpdateInput>;
};
/**
 * FrisbeeMatchEvent delete
 */
export type FrisbeeMatchEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which FrisbeeMatchEvent to delete.
     */
    where: Prisma.FrisbeeMatchEventWhereUniqueInput;
};
/**
 * FrisbeeMatchEvent deleteMany
 */
export type FrisbeeMatchEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FrisbeeMatchEvents to delete
     */
    where?: Prisma.FrisbeeMatchEventWhereInput;
    /**
     * Limit how many FrisbeeMatchEvents to delete.
     */
    limit?: number;
};
/**
 * FrisbeeMatchEvent.secondaryPlayer
 */
export type FrisbeeMatchEvent$secondaryPlayerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PlayerWhereInput;
};
/**
 * FrisbeeMatchEvent without action
 */
export type FrisbeeMatchEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=FrisbeeMatchEvent.d.ts.map