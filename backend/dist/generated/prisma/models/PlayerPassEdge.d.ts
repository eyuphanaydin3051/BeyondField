import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PlayerPassEdge
 * Pass connection graph — upserted on each COMPLETION / ASSIST event.
 */
export type PlayerPassEdgeModel = runtime.Types.Result.DefaultSelection<Prisma.$PlayerPassEdgePayload>;
export type AggregatePlayerPassEdge = {
    _count: PlayerPassEdgeCountAggregateOutputType | null;
    _avg: PlayerPassEdgeAvgAggregateOutputType | null;
    _sum: PlayerPassEdgeSumAggregateOutputType | null;
    _min: PlayerPassEdgeMinAggregateOutputType | null;
    _max: PlayerPassEdgeMaxAggregateOutputType | null;
};
export type PlayerPassEdgeAvgAggregateOutputType = {
    count: number | null;
};
export type PlayerPassEdgeSumAggregateOutputType = {
    count: number | null;
};
export type PlayerPassEdgeMinAggregateOutputType = {
    id: string | null;
    fromPlayerId: string | null;
    toPlayerId: string | null;
    count: number | null;
};
export type PlayerPassEdgeMaxAggregateOutputType = {
    id: string | null;
    fromPlayerId: string | null;
    toPlayerId: string | null;
    count: number | null;
};
export type PlayerPassEdgeCountAggregateOutputType = {
    id: number;
    fromPlayerId: number;
    toPlayerId: number;
    count: number;
    _all: number;
};
export type PlayerPassEdgeAvgAggregateInputType = {
    count?: true;
};
export type PlayerPassEdgeSumAggregateInputType = {
    count?: true;
};
export type PlayerPassEdgeMinAggregateInputType = {
    id?: true;
    fromPlayerId?: true;
    toPlayerId?: true;
    count?: true;
};
export type PlayerPassEdgeMaxAggregateInputType = {
    id?: true;
    fromPlayerId?: true;
    toPlayerId?: true;
    count?: true;
};
export type PlayerPassEdgeCountAggregateInputType = {
    id?: true;
    fromPlayerId?: true;
    toPlayerId?: true;
    count?: true;
    _all?: true;
};
export type PlayerPassEdgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPassEdge to aggregate.
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerPassEdges to fetch.
     */
    orderBy?: Prisma.PlayerPassEdgeOrderByWithRelationInput | Prisma.PlayerPassEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlayerPassEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerPassEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerPassEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PlayerPassEdges
    **/
    _count?: true | PlayerPassEdgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlayerPassEdgeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlayerPassEdgeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlayerPassEdgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlayerPassEdgeMaxAggregateInputType;
};
export type GetPlayerPassEdgeAggregateType<T extends PlayerPassEdgeAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayerPassEdge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayerPassEdge[P]> : Prisma.GetScalarType<T[P], AggregatePlayerPassEdge[P]>;
};
export type PlayerPassEdgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayerPassEdgeWhereInput;
    orderBy?: Prisma.PlayerPassEdgeOrderByWithAggregationInput | Prisma.PlayerPassEdgeOrderByWithAggregationInput[];
    by: Prisma.PlayerPassEdgeScalarFieldEnum[] | Prisma.PlayerPassEdgeScalarFieldEnum;
    having?: Prisma.PlayerPassEdgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayerPassEdgeCountAggregateInputType | true;
    _avg?: PlayerPassEdgeAvgAggregateInputType;
    _sum?: PlayerPassEdgeSumAggregateInputType;
    _min?: PlayerPassEdgeMinAggregateInputType;
    _max?: PlayerPassEdgeMaxAggregateInputType;
};
export type PlayerPassEdgeGroupByOutputType = {
    id: string;
    fromPlayerId: string;
    toPlayerId: string;
    count: number;
    _count: PlayerPassEdgeCountAggregateOutputType | null;
    _avg: PlayerPassEdgeAvgAggregateOutputType | null;
    _sum: PlayerPassEdgeSumAggregateOutputType | null;
    _min: PlayerPassEdgeMinAggregateOutputType | null;
    _max: PlayerPassEdgeMaxAggregateOutputType | null;
};
export type GetPlayerPassEdgeGroupByPayload<T extends PlayerPassEdgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayerPassEdgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayerPassEdgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayerPassEdgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayerPassEdgeGroupByOutputType[P]>;
}>>;
export type PlayerPassEdgeWhereInput = {
    AND?: Prisma.PlayerPassEdgeWhereInput | Prisma.PlayerPassEdgeWhereInput[];
    OR?: Prisma.PlayerPassEdgeWhereInput[];
    NOT?: Prisma.PlayerPassEdgeWhereInput | Prisma.PlayerPassEdgeWhereInput[];
    id?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    fromPlayerId?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    toPlayerId?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    count?: Prisma.IntFilter<"PlayerPassEdge"> | number;
    fromPlayer?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    toPlayer?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
};
export type PlayerPassEdgeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fromPlayerId?: Prisma.SortOrder;
    toPlayerId?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    fromPlayer?: Prisma.PlayerOrderByWithRelationInput;
    toPlayer?: Prisma.PlayerOrderByWithRelationInput;
};
export type PlayerPassEdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    fromPlayerId_toPlayerId?: Prisma.PlayerPassEdgeFromPlayerIdToPlayerIdCompoundUniqueInput;
    AND?: Prisma.PlayerPassEdgeWhereInput | Prisma.PlayerPassEdgeWhereInput[];
    OR?: Prisma.PlayerPassEdgeWhereInput[];
    NOT?: Prisma.PlayerPassEdgeWhereInput | Prisma.PlayerPassEdgeWhereInput[];
    fromPlayerId?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    toPlayerId?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    count?: Prisma.IntFilter<"PlayerPassEdge"> | number;
    fromPlayer?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    toPlayer?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
}, "id" | "fromPlayerId_toPlayerId">;
export type PlayerPassEdgeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fromPlayerId?: Prisma.SortOrder;
    toPlayerId?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    _count?: Prisma.PlayerPassEdgeCountOrderByAggregateInput;
    _avg?: Prisma.PlayerPassEdgeAvgOrderByAggregateInput;
    _max?: Prisma.PlayerPassEdgeMaxOrderByAggregateInput;
    _min?: Prisma.PlayerPassEdgeMinOrderByAggregateInput;
    _sum?: Prisma.PlayerPassEdgeSumOrderByAggregateInput;
};
export type PlayerPassEdgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlayerPassEdgeScalarWhereWithAggregatesInput | Prisma.PlayerPassEdgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlayerPassEdgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlayerPassEdgeScalarWhereWithAggregatesInput | Prisma.PlayerPassEdgeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlayerPassEdge"> | string;
    fromPlayerId?: Prisma.StringWithAggregatesFilter<"PlayerPassEdge"> | string;
    toPlayerId?: Prisma.StringWithAggregatesFilter<"PlayerPassEdge"> | string;
    count?: Prisma.IntWithAggregatesFilter<"PlayerPassEdge"> | number;
};
export type PlayerPassEdgeCreateInput = {
    id?: string;
    count?: number;
    fromPlayer: Prisma.PlayerCreateNestedOneWithoutPassEdgesFromInput;
    toPlayer: Prisma.PlayerCreateNestedOneWithoutPassEdgesToInput;
};
export type PlayerPassEdgeUncheckedCreateInput = {
    id?: string;
    fromPlayerId: string;
    toPlayerId: string;
    count?: number;
};
export type PlayerPassEdgeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    fromPlayer?: Prisma.PlayerUpdateOneRequiredWithoutPassEdgesFromNestedInput;
    toPlayer?: Prisma.PlayerUpdateOneRequiredWithoutPassEdgesToNestedInput;
};
export type PlayerPassEdgeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    toPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeCreateManyInput = {
    id?: string;
    fromPlayerId: string;
    toPlayerId: string;
    count?: number;
};
export type PlayerPassEdgeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    toPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeListRelationFilter = {
    every?: Prisma.PlayerPassEdgeWhereInput;
    some?: Prisma.PlayerPassEdgeWhereInput;
    none?: Prisma.PlayerPassEdgeWhereInput;
};
export type PlayerPassEdgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlayerPassEdgeFromPlayerIdToPlayerIdCompoundUniqueInput = {
    fromPlayerId: string;
    toPlayerId: string;
};
export type PlayerPassEdgeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromPlayerId?: Prisma.SortOrder;
    toPlayerId?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type PlayerPassEdgeAvgOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type PlayerPassEdgeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromPlayerId?: Prisma.SortOrder;
    toPlayerId?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type PlayerPassEdgeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromPlayerId?: Prisma.SortOrder;
    toPlayerId?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type PlayerPassEdgeSumOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type PlayerPassEdgeCreateNestedManyWithoutFromPlayerInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyFromPlayerInputEnvelope;
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
};
export type PlayerPassEdgeCreateNestedManyWithoutToPlayerInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutToPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyToPlayerInputEnvelope;
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
};
export type PlayerPassEdgeUncheckedCreateNestedManyWithoutFromPlayerInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyFromPlayerInputEnvelope;
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
};
export type PlayerPassEdgeUncheckedCreateNestedManyWithoutToPlayerInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutToPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyToPlayerInputEnvelope;
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
};
export type PlayerPassEdgeUpdateManyWithoutFromPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput[];
    upsert?: Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutFromPlayerInput | Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutFromPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyFromPlayerInputEnvelope;
    set?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    disconnect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    delete?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    update?: Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutFromPlayerInput | Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutFromPlayerInput[];
    updateMany?: Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutFromPlayerInput | Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutFromPlayerInput[];
    deleteMany?: Prisma.PlayerPassEdgeScalarWhereInput | Prisma.PlayerPassEdgeScalarWhereInput[];
};
export type PlayerPassEdgeUpdateManyWithoutToPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutToPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput[];
    upsert?: Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutToPlayerInput | Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutToPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyToPlayerInputEnvelope;
    set?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    disconnect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    delete?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    update?: Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutToPlayerInput | Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutToPlayerInput[];
    updateMany?: Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutToPlayerInput | Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutToPlayerInput[];
    deleteMany?: Prisma.PlayerPassEdgeScalarWhereInput | Prisma.PlayerPassEdgeScalarWhereInput[];
};
export type PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput[];
    upsert?: Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutFromPlayerInput | Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutFromPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyFromPlayerInputEnvelope;
    set?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    disconnect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    delete?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    update?: Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutFromPlayerInput | Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutFromPlayerInput[];
    updateMany?: Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutFromPlayerInput | Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutFromPlayerInput[];
    deleteMany?: Prisma.PlayerPassEdgeScalarWhereInput | Prisma.PlayerPassEdgeScalarWhereInput[];
};
export type PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput> | Prisma.PlayerPassEdgeCreateWithoutToPlayerInput[] | Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput[];
    connectOrCreate?: Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput | Prisma.PlayerPassEdgeCreateOrConnectWithoutToPlayerInput[];
    upsert?: Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutToPlayerInput | Prisma.PlayerPassEdgeUpsertWithWhereUniqueWithoutToPlayerInput[];
    createMany?: Prisma.PlayerPassEdgeCreateManyToPlayerInputEnvelope;
    set?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    disconnect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    delete?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    connect?: Prisma.PlayerPassEdgeWhereUniqueInput | Prisma.PlayerPassEdgeWhereUniqueInput[];
    update?: Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutToPlayerInput | Prisma.PlayerPassEdgeUpdateWithWhereUniqueWithoutToPlayerInput[];
    updateMany?: Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutToPlayerInput | Prisma.PlayerPassEdgeUpdateManyWithWhereWithoutToPlayerInput[];
    deleteMany?: Prisma.PlayerPassEdgeScalarWhereInput | Prisma.PlayerPassEdgeScalarWhereInput[];
};
export type PlayerPassEdgeCreateWithoutFromPlayerInput = {
    id?: string;
    count?: number;
    toPlayer: Prisma.PlayerCreateNestedOneWithoutPassEdgesToInput;
};
export type PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput = {
    id?: string;
    toPlayerId: string;
    count?: number;
};
export type PlayerPassEdgeCreateOrConnectWithoutFromPlayerInput = {
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput>;
};
export type PlayerPassEdgeCreateManyFromPlayerInputEnvelope = {
    data: Prisma.PlayerPassEdgeCreateManyFromPlayerInput | Prisma.PlayerPassEdgeCreateManyFromPlayerInput[];
    skipDuplicates?: boolean;
};
export type PlayerPassEdgeCreateWithoutToPlayerInput = {
    id?: string;
    count?: number;
    fromPlayer: Prisma.PlayerCreateNestedOneWithoutPassEdgesFromInput;
};
export type PlayerPassEdgeUncheckedCreateWithoutToPlayerInput = {
    id?: string;
    fromPlayerId: string;
    count?: number;
};
export type PlayerPassEdgeCreateOrConnectWithoutToPlayerInput = {
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput>;
};
export type PlayerPassEdgeCreateManyToPlayerInputEnvelope = {
    data: Prisma.PlayerPassEdgeCreateManyToPlayerInput | Prisma.PlayerPassEdgeCreateManyToPlayerInput[];
    skipDuplicates?: boolean;
};
export type PlayerPassEdgeUpsertWithWhereUniqueWithoutFromPlayerInput = {
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayerPassEdgeUpdateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedUpdateWithoutFromPlayerInput>;
    create: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutFromPlayerInput>;
};
export type PlayerPassEdgeUpdateWithWhereUniqueWithoutFromPlayerInput = {
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateWithoutFromPlayerInput, Prisma.PlayerPassEdgeUncheckedUpdateWithoutFromPlayerInput>;
};
export type PlayerPassEdgeUpdateManyWithWhereWithoutFromPlayerInput = {
    where: Prisma.PlayerPassEdgeScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateManyMutationInput, Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerInput>;
};
export type PlayerPassEdgeScalarWhereInput = {
    AND?: Prisma.PlayerPassEdgeScalarWhereInput | Prisma.PlayerPassEdgeScalarWhereInput[];
    OR?: Prisma.PlayerPassEdgeScalarWhereInput[];
    NOT?: Prisma.PlayerPassEdgeScalarWhereInput | Prisma.PlayerPassEdgeScalarWhereInput[];
    id?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    fromPlayerId?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    toPlayerId?: Prisma.StringFilter<"PlayerPassEdge"> | string;
    count?: Prisma.IntFilter<"PlayerPassEdge"> | number;
};
export type PlayerPassEdgeUpsertWithWhereUniqueWithoutToPlayerInput = {
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayerPassEdgeUpdateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedUpdateWithoutToPlayerInput>;
    create: Prisma.XOR<Prisma.PlayerPassEdgeCreateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedCreateWithoutToPlayerInput>;
};
export type PlayerPassEdgeUpdateWithWhereUniqueWithoutToPlayerInput = {
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateWithoutToPlayerInput, Prisma.PlayerPassEdgeUncheckedUpdateWithoutToPlayerInput>;
};
export type PlayerPassEdgeUpdateManyWithWhereWithoutToPlayerInput = {
    where: Prisma.PlayerPassEdgeScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateManyMutationInput, Prisma.PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerInput>;
};
export type PlayerPassEdgeCreateManyFromPlayerInput = {
    id?: string;
    toPlayerId: string;
    count?: number;
};
export type PlayerPassEdgeCreateManyToPlayerInput = {
    id?: string;
    fromPlayerId: string;
    count?: number;
};
export type PlayerPassEdgeUpdateWithoutFromPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    toPlayer?: Prisma.PlayerUpdateOneRequiredWithoutPassEdgesToNestedInput;
};
export type PlayerPassEdgeUncheckedUpdateWithoutFromPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeUncheckedUpdateManyWithoutFromPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeUpdateWithoutToPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    fromPlayer?: Prisma.PlayerUpdateOneRequiredWithoutPassEdgesFromNestedInput;
};
export type PlayerPassEdgeUncheckedUpdateWithoutToPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeUncheckedUpdateManyWithoutToPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromPlayerId?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayerPassEdgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromPlayerId?: boolean;
    toPlayerId?: boolean;
    count?: boolean;
    fromPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    toPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playerPassEdge"]>;
export type PlayerPassEdgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromPlayerId?: boolean;
    toPlayerId?: boolean;
    count?: boolean;
    fromPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    toPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playerPassEdge"]>;
export type PlayerPassEdgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromPlayerId?: boolean;
    toPlayerId?: boolean;
    count?: boolean;
    fromPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    toPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playerPassEdge"]>;
export type PlayerPassEdgeSelectScalar = {
    id?: boolean;
    fromPlayerId?: boolean;
    toPlayerId?: boolean;
    count?: boolean;
};
export type PlayerPassEdgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fromPlayerId" | "toPlayerId" | "count", ExtArgs["result"]["playerPassEdge"]>;
export type PlayerPassEdgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    toPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type PlayerPassEdgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    toPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type PlayerPassEdgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    toPlayer?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type $PlayerPassEdgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlayerPassEdge";
    objects: {
        fromPlayer: Prisma.$PlayerPayload<ExtArgs>;
        toPlayer: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fromPlayerId: string;
        toPlayerId: string;
        count: number;
    }, ExtArgs["result"]["playerPassEdge"]>;
    composites: {};
};
export type PlayerPassEdgeGetPayload<S extends boolean | null | undefined | PlayerPassEdgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload, S>;
export type PlayerPassEdgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlayerPassEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayerPassEdgeCountAggregateInputType | true;
};
export interface PlayerPassEdgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlayerPassEdge'];
        meta: {
            name: 'PlayerPassEdge';
        };
    };
    /**
     * Find zero or one PlayerPassEdge that matches the filter.
     * @param {PlayerPassEdgeFindUniqueArgs} args - Arguments to find a PlayerPassEdge
     * @example
     * // Get one PlayerPassEdge
     * const playerPassEdge = await prisma.playerPassEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerPassEdgeFindUniqueArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PlayerPassEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerPassEdgeFindUniqueOrThrowArgs} args - Arguments to find a PlayerPassEdge
     * @example
     * // Get one PlayerPassEdge
     * const playerPassEdge = await prisma.playerPassEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerPassEdgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayerPassEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeFindFirstArgs} args - Arguments to find a PlayerPassEdge
     * @example
     * // Get one PlayerPassEdge
     * const playerPassEdge = await prisma.playerPassEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerPassEdgeFindFirstArgs>(args?: Prisma.SelectSubset<T, PlayerPassEdgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayerPassEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeFindFirstOrThrowArgs} args - Arguments to find a PlayerPassEdge
     * @example
     * // Get one PlayerPassEdge
     * const playerPassEdge = await prisma.playerPassEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerPassEdgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlayerPassEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PlayerPassEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerPassEdges
     * const playerPassEdges = await prisma.playerPassEdge.findMany()
     *
     * // Get first 10 PlayerPassEdges
     * const playerPassEdges = await prisma.playerPassEdge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playerPassEdgeWithIdOnly = await prisma.playerPassEdge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayerPassEdgeFindManyArgs>(args?: Prisma.SelectSubset<T, PlayerPassEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PlayerPassEdge.
     * @param {PlayerPassEdgeCreateArgs} args - Arguments to create a PlayerPassEdge.
     * @example
     * // Create one PlayerPassEdge
     * const PlayerPassEdge = await prisma.playerPassEdge.create({
     *   data: {
     *     // ... data to create a PlayerPassEdge
     *   }
     * })
     *
     */
    create<T extends PlayerPassEdgeCreateArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeCreateArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PlayerPassEdges.
     * @param {PlayerPassEdgeCreateManyArgs} args - Arguments to create many PlayerPassEdges.
     * @example
     * // Create many PlayerPassEdges
     * const playerPassEdge = await prisma.playerPassEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayerPassEdgeCreateManyArgs>(args?: Prisma.SelectSubset<T, PlayerPassEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PlayerPassEdges and returns the data saved in the database.
     * @param {PlayerPassEdgeCreateManyAndReturnArgs} args - Arguments to create many PlayerPassEdges.
     * @example
     * // Create many PlayerPassEdges
     * const playerPassEdge = await prisma.playerPassEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PlayerPassEdges and only return the `id`
     * const playerPassEdgeWithIdOnly = await prisma.playerPassEdge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayerPassEdgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlayerPassEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PlayerPassEdge.
     * @param {PlayerPassEdgeDeleteArgs} args - Arguments to delete one PlayerPassEdge.
     * @example
     * // Delete one PlayerPassEdge
     * const PlayerPassEdge = await prisma.playerPassEdge.delete({
     *   where: {
     *     // ... filter to delete one PlayerPassEdge
     *   }
     * })
     *
     */
    delete<T extends PlayerPassEdgeDeleteArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeDeleteArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PlayerPassEdge.
     * @param {PlayerPassEdgeUpdateArgs} args - Arguments to update one PlayerPassEdge.
     * @example
     * // Update one PlayerPassEdge
     * const playerPassEdge = await prisma.playerPassEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayerPassEdgeUpdateArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeUpdateArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PlayerPassEdges.
     * @param {PlayerPassEdgeDeleteManyArgs} args - Arguments to filter PlayerPassEdges to delete.
     * @example
     * // Delete a few PlayerPassEdges
     * const { count } = await prisma.playerPassEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayerPassEdgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlayerPassEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayerPassEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerPassEdges
     * const playerPassEdge = await prisma.playerPassEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayerPassEdgeUpdateManyArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayerPassEdges and returns the data updated in the database.
     * @param {PlayerPassEdgeUpdateManyAndReturnArgs} args - Arguments to update many PlayerPassEdges.
     * @example
     * // Update many PlayerPassEdges
     * const playerPassEdge = await prisma.playerPassEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PlayerPassEdges and only return the `id`
     * const playerPassEdgeWithIdOnly = await prisma.playerPassEdge.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerPassEdgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PlayerPassEdge.
     * @param {PlayerPassEdgeUpsertArgs} args - Arguments to update or create a PlayerPassEdge.
     * @example
     * // Update or create a PlayerPassEdge
     * const playerPassEdge = await prisma.playerPassEdge.upsert({
     *   create: {
     *     // ... data to create a PlayerPassEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerPassEdge we want to update
     *   }
     * })
     */
    upsert<T extends PlayerPassEdgeUpsertArgs>(args: Prisma.SelectSubset<T, PlayerPassEdgeUpsertArgs<ExtArgs>>): Prisma.Prisma__PlayerPassEdgeClient<runtime.Types.Result.GetResult<Prisma.$PlayerPassEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PlayerPassEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeCountArgs} args - Arguments to filter PlayerPassEdges to count.
     * @example
     * // Count the number of PlayerPassEdges
     * const count = await prisma.playerPassEdge.count({
     *   where: {
     *     // ... the filter for the PlayerPassEdges we want to count
     *   }
     * })
    **/
    count<T extends PlayerPassEdgeCountArgs>(args?: Prisma.Subset<T, PlayerPassEdgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayerPassEdgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PlayerPassEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerPassEdgeAggregateArgs>(args: Prisma.Subset<T, PlayerPassEdgeAggregateArgs>): Prisma.PrismaPromise<GetPlayerPassEdgeAggregateType<T>>;
    /**
     * Group by PlayerPassEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPassEdgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PlayerPassEdgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlayerPassEdgeGroupByArgs['orderBy'];
    } : {
        orderBy?: PlayerPassEdgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlayerPassEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerPassEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PlayerPassEdge model
     */
    readonly fields: PlayerPassEdgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PlayerPassEdge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlayerPassEdgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fromPlayer<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    toPlayer<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PlayerPassEdge model
 */
export interface PlayerPassEdgeFieldRefs {
    readonly id: Prisma.FieldRef<"PlayerPassEdge", 'String'>;
    readonly fromPlayerId: Prisma.FieldRef<"PlayerPassEdge", 'String'>;
    readonly toPlayerId: Prisma.FieldRef<"PlayerPassEdge", 'String'>;
    readonly count: Prisma.FieldRef<"PlayerPassEdge", 'Int'>;
}
/**
 * PlayerPassEdge findUnique
 */
export type PlayerPassEdgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PlayerPassEdge to fetch.
     */
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
};
/**
 * PlayerPassEdge findUniqueOrThrow
 */
export type PlayerPassEdgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PlayerPassEdge to fetch.
     */
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
};
/**
 * PlayerPassEdge findFirst
 */
export type PlayerPassEdgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PlayerPassEdge to fetch.
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerPassEdges to fetch.
     */
    orderBy?: Prisma.PlayerPassEdgeOrderByWithRelationInput | Prisma.PlayerPassEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayerPassEdges.
     */
    cursor?: Prisma.PlayerPassEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerPassEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerPassEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayerPassEdges.
     */
    distinct?: Prisma.PlayerPassEdgeScalarFieldEnum | Prisma.PlayerPassEdgeScalarFieldEnum[];
};
/**
 * PlayerPassEdge findFirstOrThrow
 */
export type PlayerPassEdgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PlayerPassEdge to fetch.
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerPassEdges to fetch.
     */
    orderBy?: Prisma.PlayerPassEdgeOrderByWithRelationInput | Prisma.PlayerPassEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayerPassEdges.
     */
    cursor?: Prisma.PlayerPassEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerPassEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerPassEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayerPassEdges.
     */
    distinct?: Prisma.PlayerPassEdgeScalarFieldEnum | Prisma.PlayerPassEdgeScalarFieldEnum[];
};
/**
 * PlayerPassEdge findMany
 */
export type PlayerPassEdgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PlayerPassEdges to fetch.
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerPassEdges to fetch.
     */
    orderBy?: Prisma.PlayerPassEdgeOrderByWithRelationInput | Prisma.PlayerPassEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PlayerPassEdges.
     */
    cursor?: Prisma.PlayerPassEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerPassEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerPassEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayerPassEdges.
     */
    distinct?: Prisma.PlayerPassEdgeScalarFieldEnum | Prisma.PlayerPassEdgeScalarFieldEnum[];
};
/**
 * PlayerPassEdge create
 */
export type PlayerPassEdgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PlayerPassEdge.
     */
    data: Prisma.XOR<Prisma.PlayerPassEdgeCreateInput, Prisma.PlayerPassEdgeUncheckedCreateInput>;
};
/**
 * PlayerPassEdge createMany
 */
export type PlayerPassEdgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerPassEdges.
     */
    data: Prisma.PlayerPassEdgeCreateManyInput | Prisma.PlayerPassEdgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PlayerPassEdge createManyAndReturn
 */
export type PlayerPassEdgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPassEdge
     */
    select?: Prisma.PlayerPassEdgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerPassEdge
     */
    omit?: Prisma.PlayerPassEdgeOmit<ExtArgs> | null;
    /**
     * The data used to create many PlayerPassEdges.
     */
    data: Prisma.PlayerPassEdgeCreateManyInput | Prisma.PlayerPassEdgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerPassEdgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayerPassEdge update
 */
export type PlayerPassEdgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PlayerPassEdge.
     */
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateInput, Prisma.PlayerPassEdgeUncheckedUpdateInput>;
    /**
     * Choose, which PlayerPassEdge to update.
     */
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
};
/**
 * PlayerPassEdge updateMany
 */
export type PlayerPassEdgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerPassEdges.
     */
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateManyMutationInput, Prisma.PlayerPassEdgeUncheckedUpdateManyInput>;
    /**
     * Filter which PlayerPassEdges to update
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * Limit how many PlayerPassEdges to update.
     */
    limit?: number;
};
/**
 * PlayerPassEdge updateManyAndReturn
 */
export type PlayerPassEdgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPassEdge
     */
    select?: Prisma.PlayerPassEdgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerPassEdge
     */
    omit?: Prisma.PlayerPassEdgeOmit<ExtArgs> | null;
    /**
     * The data used to update PlayerPassEdges.
     */
    data: Prisma.XOR<Prisma.PlayerPassEdgeUpdateManyMutationInput, Prisma.PlayerPassEdgeUncheckedUpdateManyInput>;
    /**
     * Filter which PlayerPassEdges to update
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * Limit how many PlayerPassEdges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerPassEdgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayerPassEdge upsert
 */
export type PlayerPassEdgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PlayerPassEdge to update in case it exists.
     */
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
    /**
     * In case the PlayerPassEdge found by the `where` argument doesn't exist, create a new PlayerPassEdge with this data.
     */
    create: Prisma.XOR<Prisma.PlayerPassEdgeCreateInput, Prisma.PlayerPassEdgeUncheckedCreateInput>;
    /**
     * In case the PlayerPassEdge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlayerPassEdgeUpdateInput, Prisma.PlayerPassEdgeUncheckedUpdateInput>;
};
/**
 * PlayerPassEdge delete
 */
export type PlayerPassEdgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PlayerPassEdge to delete.
     */
    where: Prisma.PlayerPassEdgeWhereUniqueInput;
};
/**
 * PlayerPassEdge deleteMany
 */
export type PlayerPassEdgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPassEdges to delete
     */
    where?: Prisma.PlayerPassEdgeWhereInput;
    /**
     * Limit how many PlayerPassEdges to delete.
     */
    limit?: number;
};
/**
 * PlayerPassEdge without action
 */
export type PlayerPassEdgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=PlayerPassEdge.d.ts.map