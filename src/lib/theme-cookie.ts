import {
  defaultSettings,
  resolveTheme,
  type ThemeSettings,
  themeFonts,
  themeModes,
  themePrimaries,
  themeSkins,
} from "@/lib/theme-config";

export const themeCookieName = "freelance-theme-settings";
export const resolvedThemeCookieName = "freelance-theme-resolved";

function isThemeMode(value: unknown): value is ThemeSettings["mode"] {
  return typeof value === "string" && themeModes.includes(value as ThemeSettings["mode"]);
}

function isThemeSkin(value: unknown): value is ThemeSettings["skin"] {
  return typeof value === "string" && themeSkins.includes(value as ThemeSettings["skin"]);
}

function isThemeFont(value: unknown): value is ThemeSettings["font"] {
  return typeof value === "string" && themeFonts.includes(value as ThemeSettings["font"]);
}

function isThemePrimary(value: unknown): value is ThemeSettings["primary"] {
  return typeof value === "string" && themePrimaries.includes(value as ThemeSettings["primary"]);
}

export function parseThemeCookie(value: string | undefined | null): ThemeSettings {
  if (!value) {
    return defaultSettings;
  }

  try {
    const parsed = JSON.parse(value) as Partial<ThemeSettings>;
    const mode = isThemeMode(parsed.mode) ? parsed.mode : defaultSettings.mode;
    const skin = isThemeSkin(parsed.skin) ? parsed.skin : defaultSettings.skin;
    const font = isThemeFont(parsed.font) ? parsed.font : defaultSettings.font;
    const primary = isThemePrimary(parsed.primary)
      ? parsed.primary
      : defaultSettings.primary;

    if (skin === "paper" && font === "sans" && primary === "slate") {
      return {
        mode,
        skin: defaultSettings.skin,
        font: defaultSettings.font,
        primary: defaultSettings.primary,
      };
    }

    return {
      mode,
      skin,
      font,
      primary,
    };
  } catch {
    return defaultSettings;
  }
}

export function serializeThemeCookie(settings: ThemeSettings) {
  return JSON.stringify(settings);
}

export function resolveCookieTheme(
  settings: ThemeSettings,
  resolvedCookie: string | undefined | null,
) {
  if (resolvedCookie === "light" || resolvedCookie === "dark") {
    return resolvedCookie;
  }

  return resolveTheme(settings.mode);
}
