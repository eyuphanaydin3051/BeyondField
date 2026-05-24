import { prisma } from '../lib/prisma';
import { Theme, Language, NameFormat, CaptureMode } from '../generated/prisma/enums';

type AppError = Error & { statusCode?: number };

function err(status: number, message: string): AppError {
  const e = new Error(message) as AppError;
  e.statusCode = status;
  return e;
}

export interface UpdateSettingsInput {
  theme?: string;
  language?: string;
  nameFormat?: string;
  defaultCaptureMode?: string;
}

const VALID_THEMES = Object.values(Theme) as string[];
const VALID_LANGUAGES = Object.values(Language) as string[];
const VALID_NAME_FORMATS = Object.values(NameFormat) as string[];
const VALID_CAPTURE_MODES = Object.values(CaptureMode) as string[];

function validateInput(input: UpdateSettingsInput): {
  theme?: Theme;
  language?: Language;
  nameFormat?: NameFormat;
  defaultCaptureMode?: CaptureMode;
} {
  const result: {
    theme?: Theme;
    language?: Language;
    nameFormat?: NameFormat;
    defaultCaptureMode?: CaptureMode;
  } = {};

  if (input.theme !== undefined) {
    const v = input.theme.toUpperCase();
    if (!VALID_THEMES.includes(v)) {
      throw err(400, `Invalid theme. Allowed: ${VALID_THEMES.join(', ')}`);
    }
    result.theme = v as Theme;
  }

  if (input.language !== undefined) {
    const v = input.language.toUpperCase();
    if (!VALID_LANGUAGES.includes(v)) {
      throw err(400, `Invalid language. Allowed: ${VALID_LANGUAGES.join(', ')}`);
    }
    result.language = v as Language;
  }

  if (input.nameFormat !== undefined) {
    const v = input.nameFormat.toUpperCase();
    if (!VALID_NAME_FORMATS.includes(v)) {
      throw err(400, `Invalid nameFormat. Allowed: ${VALID_NAME_FORMATS.join(', ')}`);
    }
    result.nameFormat = v as NameFormat;
  }

  if (input.defaultCaptureMode !== undefined) {
    const v = input.defaultCaptureMode.toUpperCase();
    if (!VALID_CAPTURE_MODES.includes(v)) {
      throw err(
        400,
        `Invalid defaultCaptureMode. Allowed: ${VALID_CAPTURE_MODES.join(', ')}`,
      );
    }
    result.defaultCaptureMode = v as CaptureMode;
  }

  return result;
}

export async function getOrCreateSettings(userId: string): Promise<object> {
  return prisma.userSettings.upsert({
    where: { userId },
    create: {
      userId,
      theme: Theme.DARK,
      language: Language.TR,
      nameFormat: NameFormat.FIRST_LAST,
      defaultCaptureMode: CaptureMode.SIMPLE,
    },
    update: {},
  });
}

export async function updateSettings(
  userId: string,
  input: UpdateSettingsInput,
): Promise<object> {
  const validated = validateInput(input);

  return prisma.userSettings.upsert({
    where: { userId },
    create: {
      userId,
      theme: validated.theme ?? Theme.DARK,
      language: validated.language ?? Language.TR,
      nameFormat: validated.nameFormat ?? NameFormat.FIRST_LAST,
      defaultCaptureMode: validated.defaultCaptureMode ?? CaptureMode.SIMPLE,
    },
    update: validated,
  });
}
