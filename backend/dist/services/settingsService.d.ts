export interface UpdateSettingsInput {
    theme?: string;
    language?: string;
    nameFormat?: string;
    defaultCaptureMode?: string;
}
export declare function getOrCreateSettings(userId: string): Promise<object>;
export declare function updateSettings(userId: string, input: UpdateSettingsInput): Promise<object>;
//# sourceMappingURL=settingsService.d.ts.map