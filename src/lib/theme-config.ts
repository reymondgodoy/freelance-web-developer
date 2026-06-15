export const themeModes = ['light', 'dark', 'system'] as const;
export const themeSkins = ['default', 'studio', 'warm', 'contrast', 'paper'] as const;
export const themeFonts = ['default', 'sans', 'serif', 'mono'] as const;
export const themePrimaries = ['default', 'slate', 'emerald', 'sky', 'amber', 'green', 'violet'] as const;

export type ThemeMode = (typeof themeModes)[number];
export type ThemeSkin = (typeof themeSkins)[number];
export type ThemeFont = (typeof themeFonts)[number];
export type ThemePrimary = (typeof themePrimaries)[number];
export type ResolvedTheme = 'light' | 'dark';

export type ThemeSettings = {
  mode: ThemeMode;
  skin: ThemeSkin;
  font: ThemeFont;
  primary: ThemePrimary;
};

export const defaultSettings: ThemeSettings = {
  mode: 'system',
  skin: 'default',
  font: 'default',
  primary: 'default',
};

export function resolveTheme(mode: ThemeMode, prefersDark?: boolean): ResolvedTheme {
  if (mode !== 'system') {
    return mode;
  }

  if (typeof prefersDark === 'boolean') {
    return prefersDark ? 'dark' : 'light';
  }

  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
