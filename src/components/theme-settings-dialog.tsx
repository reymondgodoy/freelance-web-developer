"use client";

import { Settings2 } from "lucide-react";

import { ThemeStudioPanel } from "@/components/theme-studio-panel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ThemeSettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
          aria-label="Open settings"
          title="Settings"
        >
          <Settings2 className="h-4 w-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[calc(100vh-2rem)] bg-sidebar overflow-y-auto sm:max-w-180">
        <DialogHeader>
          <DialogTitle>Theme studio</DialogTitle>
          <DialogDescription>
            Change the theme mode, skin, font, and primary color without touching the layout.
          </DialogDescription>
        </DialogHeader>

        <ThemeStudioPanel />
      </DialogContent>
    </Dialog>
  );
}
