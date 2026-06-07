"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  defaultSettings,
  resolveTheme,
  type ThemeFont,
  type ThemeMode,
  type ThemePrimary,
  type ThemeSettings,
  type ThemeSkin,
  themeFonts,
  themeModes,
  themePrimaries,
  themeSkins,
} from "@/lib/theme-config";

type ThemeStore = ThemeSettings & {
  setMode: (mode: ThemeMode) => void;
  setSkin: (skin: ThemeSkin) => void;
  setFont: (font: ThemeFont) => void;
  setPrimary: (primary: ThemePrimary) => void;
  reset: () => void;
};

export {
  defaultSettings,
  resolveTheme,
  themeFonts,
  themeModes,
  themePrimaries,
  themeSkins,
  type ThemeFont,
  type ThemeMode,
  type ThemePrimary,
  type ThemeSettings,
  type ThemeSkin,
};

export function applyThemeSettings(
  settings: ThemeSettings,
  resolvedTheme: "light" | "dark",
) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  root.dataset.theme = resolvedTheme;
  root.dataset.skin = settings.skin;
  root.dataset.font = settings.font;
  root.dataset.primary = settings.primary;
  root.classList.toggle("dark", resolvedTheme === "dark");
  root.style.colorScheme = resolvedTheme;
}

export const useThemeSettings = create<ThemeStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      setMode: (mode) => set({ mode }),
      setSkin: (skin) => set({ skin }),
      setFont: (font) => set({ font }),
      setPrimary: (primary) => set({ primary }),
      reset: () => set(defaultSettings),
    }),
    {
      name: "freelance-theme-settings",
      storage: createJSONStorage(() => localStorage),
      version: 2,
      migrate: (persistedState) => {
        const state = persistedState as Partial<ThemeSettings>;

        if (state.skin === "paper" && state.font === "sans" && state.primary === "slate") {
          return {
            ...state,
            skin: defaultSettings.skin,
            font: defaultSettings.font,
            primary: defaultSettings.primary,
          };
        }

        return state;
      },
    },
  ),
);
