"use client";

import { useLayoutEffect } from "react";

import {
  applyThemeSettings,
  resolveTheme,
  useThemeSettings,
} from "@/lib/theme-settings";
import {
  resolvedThemeCookieName,
  serializeThemeCookie,
  themeCookieName,
} from "@/lib/theme-cookie";

function writeThemeCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
}

export function ThemeSync() {
  const { mode, skin, font, primary } = useThemeSettings();

  useLayoutEffect(() => {
    const settings = { mode, skin, font, primary };
    const resolvedTheme = resolveTheme(mode);
    applyThemeSettings(settings, resolvedTheme);
    writeThemeCookie(themeCookieName, serializeThemeCookie(settings));
    writeThemeCookie(resolvedThemeCookieName, resolvedTheme);

    if (mode !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const nextTheme = resolveTheme("system");
      applyThemeSettings(settings, nextTheme);
      writeThemeCookie(resolvedThemeCookieName, nextTheme);
    };

    media.addEventListener("change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
    };
  }, [mode, skin, font, primary]);

  return null;
}
