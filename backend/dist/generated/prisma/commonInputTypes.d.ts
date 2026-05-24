import * as $Enums from "./enums";
import type * as Prisma from "./internal/prismaNamespace";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumSportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SportType | Prisma.EnumSportTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSportTypeFilter<$PrismaModel> | $Enums.SportType;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumSportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SportType | Prisma.EnumSportTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSportTypeWithAggregatesFilter<$PrismaModel> | $Enums.SportType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSportTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSportTypeFilter<$PrismaModel>;
};
export type EnumPlayerPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPosition | Prisma.EnumPlayerPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlayerPositionFilter<$PrismaModel> | $Enums.PlayerPosition;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumPlayerPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPosition | Prisma.EnumPlayerPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlayerPositionWithAggregatesFilter<$PrismaModel> | $Enums.PlayerPosition;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlayerPositionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlayerPositionFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumFrisbeeActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FrisbeeActionType | Prisma.EnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrisbeeActionTypeFilter<$PrismaModel> | $Enums.FrisbeeActionType;
};
export type EnumFrisbeeActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FrisbeeActionType | Prisma.EnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrisbeeActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.FrisbeeActionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFrisbeeActionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFrisbeeActionTypeFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | Prisma.EnumThemeFieldRefInput<$PrismaModel>;
    in?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme;
};
export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | Prisma.EnumLanguageFieldRefInput<$PrismaModel>;
    in?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language;
};
export type EnumNameFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.NameFormat | Prisma.EnumNameFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNameFormatFilter<$PrismaModel> | $Enums.NameFormat;
};
export type EnumCaptureModeFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptureMode | Prisma.EnumCaptureModeFieldRefInput<$PrismaModel>;
    in?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCaptureModeFilter<$PrismaModel> | $Enums.CaptureMode;
};
export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | Prisma.EnumThemeFieldRefInput<$PrismaModel>;
    in?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumThemeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumThemeFilter<$PrismaModel>;
};
export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | Prisma.EnumLanguageFieldRefInput<$PrismaModel>;
    in?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLanguageFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLanguageFilter<$PrismaModel>;
};
export type EnumNameFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NameFormat | Prisma.EnumNameFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNameFormatWithAggregatesFilter<$PrismaModel> | $Enums.NameFormat;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNameFormatFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNameFormatFilter<$PrismaModel>;
};
export type EnumCaptureModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptureMode | Prisma.EnumCaptureModeFieldRefInput<$PrismaModel>;
    in?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCaptureModeWithAggregatesFilter<$PrismaModel> | $Enums.CaptureMode;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCaptureModeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCaptureModeFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumSportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SportType | Prisma.EnumSportTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSportTypeFilter<$PrismaModel> | $Enums.SportType;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumSportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SportType | Prisma.EnumSportTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SportType[] | Prisma.ListEnumSportTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSportTypeWithAggregatesFilter<$PrismaModel> | $Enums.SportType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSportTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSportTypeFilter<$PrismaModel>;
};
export type NestedEnumPlayerPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPosition | Prisma.EnumPlayerPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlayerPositionFilter<$PrismaModel> | $Enums.PlayerPosition;
};
export type NestedEnumPlayerPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPosition | Prisma.EnumPlayerPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerPosition[] | Prisma.ListEnumPlayerPositionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlayerPositionWithAggregatesFilter<$PrismaModel> | $Enums.PlayerPosition;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlayerPositionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlayerPositionFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumFrisbeeActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FrisbeeActionType | Prisma.EnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrisbeeActionTypeFilter<$PrismaModel> | $Enums.FrisbeeActionType;
};
export type NestedEnumFrisbeeActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FrisbeeActionType | Prisma.EnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FrisbeeActionType[] | Prisma.ListEnumFrisbeeActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrisbeeActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.FrisbeeActionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFrisbeeActionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFrisbeeActionTypeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | Prisma.EnumThemeFieldRefInput<$PrismaModel>;
    in?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme;
};
export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | Prisma.EnumLanguageFieldRefInput<$PrismaModel>;
    in?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language;
};
export type NestedEnumNameFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.NameFormat | Prisma.EnumNameFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNameFormatFilter<$PrismaModel> | $Enums.NameFormat;
};
export type NestedEnumCaptureModeFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptureMode | Prisma.EnumCaptureModeFieldRefInput<$PrismaModel>;
    in?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCaptureModeFilter<$PrismaModel> | $Enums.CaptureMode;
};
export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | Prisma.EnumThemeFieldRefInput<$PrismaModel>;
    in?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Theme[] | Prisma.ListEnumThemeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumThemeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumThemeFilter<$PrismaModel>;
};
export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | Prisma.EnumLanguageFieldRefInput<$PrismaModel>;
    in?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Language[] | Prisma.ListEnumLanguageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLanguageFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLanguageFilter<$PrismaModel>;
};
export type NestedEnumNameFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NameFormat | Prisma.EnumNameFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NameFormat[] | Prisma.ListEnumNameFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNameFormatWithAggregatesFilter<$PrismaModel> | $Enums.NameFormat;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNameFormatFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNameFormatFilter<$PrismaModel>;
};
export type NestedEnumCaptureModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptureMode | Prisma.EnumCaptureModeFieldRefInput<$PrismaModel>;
    in?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CaptureMode[] | Prisma.ListEnumCaptureModeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCaptureModeWithAggregatesFilter<$PrismaModel> | $Enums.CaptureMode;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCaptureModeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCaptureModeFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map