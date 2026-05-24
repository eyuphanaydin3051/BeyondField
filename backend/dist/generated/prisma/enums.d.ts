export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly COACH: "COACH";
    readonly VIEWER: "VIEWER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SportType: {
    readonly ULTIMATE_FRISBEE: "ULTIMATE_FRISBEE";
};
export type SportType = (typeof SportType)[keyof typeof SportType];
export declare const MatchStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly FINISHED: "FINISHED";
};
export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus];
export declare const FrisbeeActionType: {
    readonly GOAL: "GOAL";
    readonly ASSIST: "ASSIST";
    readonly BLOCK: "BLOCK";
    readonly THROWAWAY: "THROWAWAY";
    readonly DROP: "DROP";
    readonly CALLAHAN: "CALLAHAN";
    readonly DEFENSE: "DEFENSE";
    readonly COMPLETION: "COMPLETION";
    readonly OPPONENT_GOAL: "OPPONENT_GOAL";
    readonly SUBSTITUTION: "SUBSTITUTION";
    readonly PULL_SUCCESS: "PULL_SUCCESS";
    readonly PULL_FAIL: "PULL_FAIL";
    readonly TIMEOUT_START: "TIMEOUT_START";
    readonly POINT_START: "POINT_START";
    readonly POINT_END: "POINT_END";
};
export type FrisbeeActionType = (typeof FrisbeeActionType)[keyof typeof FrisbeeActionType];
export declare const PlayerPosition: {
    readonly HANDLER: "HANDLER";
    readonly CUTTER: "CUTTER";
    readonly HYBRID: "HYBRID";
};
export type PlayerPosition = (typeof PlayerPosition)[keyof typeof PlayerPosition];
export declare const Theme: {
    readonly LIGHT: "LIGHT";
    readonly DARK: "DARK";
    readonly SYSTEM: "SYSTEM";
};
export type Theme = (typeof Theme)[keyof typeof Theme];
export declare const Language: {
    readonly TR: "TR";
    readonly EN: "EN";
};
export type Language = (typeof Language)[keyof typeof Language];
export declare const NameFormat: {
    readonly FIRST_LAST: "FIRST_LAST";
    readonly LAST_FIRST: "LAST_FIRST";
};
export type NameFormat = (typeof NameFormat)[keyof typeof NameFormat];
export declare const CaptureMode: {
    readonly SIMPLE: "SIMPLE";
    readonly ADVANCED: "ADVANCED";
    readonly PRO: "PRO";
};
export type CaptureMode = (typeof CaptureMode)[keyof typeof CaptureMode];
//# sourceMappingURL=enums.d.ts.map