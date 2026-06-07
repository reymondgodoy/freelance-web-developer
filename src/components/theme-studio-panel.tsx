'use client';

import { themeFonts, themeModes, themePrimaries, themeSkins, useThemeSettings } from '@/lib/theme-settings';

const primarySwatches: Record<(typeof themePrimaries)[number], string> = {
  green: 'oklch(0.8348 0.1302 160.908)',
  slate: 'hsl(222.2 47.4% 11.2%)',
  emerald: 'hsl(142.1 76.2% 36.3%)',
  sky: 'hsl(199.7 89.2% 48.2%)',
  amber: 'hsl(37.7 92.1% 50.2%)',
  default: 'hsl(346.8 77.2% 49.8%)',
  violet: 'hsl(262.1 83.3% 57.8%)',
};

function OptionButton({
  active,
  children,
  onClick,
  title,
  subtitle,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  subtitle?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-12 w-full items-center justify-between rounded-2xl border px-3 py-2 text-left text-sm transition-colors ${
        active ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-background text-muted-foreground hover:bg-muted'
      }`}
    >
      <span className="flex flex-col gap-0.5">
        <span className="font-medium text-foreground">{title}</span>
        {subtitle ? <span className="text-xs text-muted-foreground">{subtitle}</span> : null}
      </span>
      {children}
    </button>
  );
}

export function ThemeStudioPanel() {
  const { mode, skin, font, primary, setMode, setSkin, setFont, setPrimary, reset } = useThemeSettings();

  const activeSummary = `${mode} / ${skin} / ${font} / ${primary}`;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Theme studio</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">Change the look live</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Switch the theme, skin, font, and primary color without touching the layout.</p>
        </div>

        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
        >
          Reset
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
        Active: <span className="font-medium text-foreground">{activeSummary}</span>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Theme</p>
          <div className="grid gap-2">
            {themeModes.map(option => (
              <OptionButton
                key={option}
                active={mode === option}
                onClick={() => setMode(option)}
                title={option.charAt(0).toUpperCase() + option.slice(1)}
                subtitle={
                  option === 'system'
                    ? 'Follow the device setting'
                    : option === 'dark'
                      ? 'High contrast in dark environments'
                      : 'Bright neutral presentation'
                }
              >
                <span className={`h-3 w-3 rounded-full border ${mode === option ? 'border-primary bg-primary' : 'border-border bg-background'}`} />
              </OptionButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Skin</p>
          <div className="grid gap-2">
            {themeSkins.map(option => (
              <OptionButton
                key={option}
                active={skin === option}
                onClick={() => setSkin(option)}
                title={option.charAt(0).toUpperCase() + option.slice(1)}
                subtitle={
                  option === 'default'
                    ? 'Your default CSS theme'
                    : option === 'paper'
                      ? 'Clean and minimal'
                      : option === 'studio'
                        ? 'Balanced with a subtle polish'
                        : option === 'warm'
                          ? 'Editorial and softer'
                          : 'Sharper contrast and stronger edges'
                }
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full border border-border bg-muted" />
                  <span className="h-3 w-3 rounded-full border border-border bg-background" />
                </span>
              </OptionButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Font</p>
          <div className="grid gap-2">
            {themeFonts.map(option => (
              <OptionButton
                key={option}
                active={font === option}
                onClick={() => setFont(option)}
                title={option.charAt(0).toUpperCase() + option.slice(1)}
                subtitle={
                  option === 'default'
                    ? 'Use the default CSS font'
                    : option === 'sans'
                      ? 'Neutral and modern'
                      : option === 'serif'
                        ? 'Editorial and classic'
                        : 'Compact and technical'
                }
              >
                <span className="rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Aa
                </span>
              </OptionButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Primary color</p>
          <div className="grid grid-cols-2 gap-2">
            {themePrimaries.map(option => {
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPrimary(option)}
                  className={`flex items-center gap-3 rounded-2xl border px-3 py-2 text-left text-sm transition-colors ${
                    primary === option
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-background text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <span className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: primarySwatches[option] }} />
                  <span className="font-medium capitalize text-foreground">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
