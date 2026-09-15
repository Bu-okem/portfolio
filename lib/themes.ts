export interface Theme {
  name: string;
  /**
   * Adds the `dark` class to <html>. Tailwind's `dark:` utilities key off it,
   * and the shadcn components in components/ui use them - so a dark-looking
   * palette must set this or those components stay in their light variant.
   */
  dark?: boolean;
  vars: Record<string, string>;
}

export const THEME_STORAGE_KEY = "theme";

/**
 * The single source of truth for themes - the picker, the composable and the
 * inline boot script in app.vue/error.vue all read from here.
 *
 * Deleting a theme is safe: anyone still holding its name in localStorage falls
 * back to their system preference on the next load and the stale name is
 * cleared. Keep the entries named "light" and "dark" - they are the fallbacks.
 */
export const themes: Theme[] = [
  {
    name: "light",
    vars: {
      background: "oklch(0.98 0 0)",
      foreground: "oklch(0.2 0 0)",
      heading: "oklch(0.2 0 0)",
      body: "oklch(0.2 0 0)",
      accent: "oklch(0.642 0 0)",
      "secondary-text": "oklch(0.549 0 0)",
      border: "oklch(0.642 0 0)",
    },
  },
  {
    name: "ocean",
    vars: {
      background: "oklch(0.96 0.01 220)",
      foreground: "oklch(0.2 0.06 220)",
      heading: "oklch(0.2 0.06 220)",
      body: "oklch(0.2 0.06 220)",
      accent: "oklch(0.6193 0.108 220)",
      "secondary-text": "oklch(0.5 0.06 220)",
      border: "oklch(0.6253 0.03 220)",
    },
  },
  {
    name: "lavender",
    vars: {
      background: "oklch(0.94 0.04 300)",
      foreground: "oklch(0.2 0.06 300)",
      heading: "oklch(0.2 0.06 300)",
      body: "oklch(0.2 0.06 300)",
      accent: "oklch(0.6205 0.12 300)",
      "secondary-text": "oklch(0.5 0.06 300)",
      border: "oklch(0.6116 0.03 300)",
    },
  },
  {
    name: "soft-paper",
    vars: {
      background: "oklch(0.96 0.03 85)",
      foreground: "oklch(0.25 0.04 50)",
      heading: "oklch(0.25 0.04 50)",
      body: "oklch(0.25 0.04 50)",
      accent: "oklch(0.6441 0.15 30)",
      "secondary-text": "oklch(0.539 0.05 50)",
      border: "oklch(0.6275 0.05 85)",
    },
  },
  {
    name: "terracotta-cream",
    vars: {
      background: "oklch(0.944 0.0156 86.43)",
      foreground: "oklch(0.4913 0.1344 36.35)",
      heading: "oklch(0.158 0.004 106.863)",
      body: "oklch(0.4095 0.1344 36.35)",
      accent: "oklch(0.45 0.15 35)",
      "secondary-text": "oklch(0.525 0.03 70)",
      border: "oklch(0.6154 0.02 85)",
    },
  },
  {
    name: "green",
    dark: true,
    vars: {
      background: "oklch(0.18 0.018 180)",
      foreground: "oklch(0.96 0.03 110)",
      heading: "oklch(0.96 0.03 110)",
      body: "oklch(0.96 0.03 110)",
      accent: "oklch(0.492 0.08 180)",
      "secondary-text": "oklch(0.75 0.05 140)",
      border: "oklch(0.4932 0.08 150)",
    },
  },
  {
    name: "deep-midnight",
    dark: true,
    vars: {
      background: "oklch(0.20 0.018 260)",
      foreground: "oklch(0.97 0.02 260)",
      heading: "oklch(0.97 0.02 260)",
      body: "oklch(0.97 0.02 260)",
      accent: "oklch(0.51 0.018 260)",
      "secondary-text": "oklch(0.70 0.05 260)",
      border: "oklch(0.5108 0.08 260)",
    },
  },
  {
    name: "cyberpunk-neon",
    dark: true,
    vars: {
      background: "oklch(0.1 0.03 200)",
      foreground: "oklch(0.95 0.02 200)",
      heading: "oklch(0.95 0.02 200)",
      body: "oklch(0.95 0.02 200)",
      accent: "oklch(0.75 0.18 190)",
      "secondary-text": "oklch(0.6 0.05 200)",
      border: "oklch(0.4756 0.05 200)",
    },
  },
  {
    name: "espresso",
    dark: true,
    vars: {
      background: "oklch(0.22 0.03 45)",
      foreground: "oklch(0.92 0.02 60)",
      heading: "oklch(0.92 0.02 60)",
      body: "oklch(0.92 0.02 60)",
      accent: "oklch(0.70 0.12 50)",
      "secondary-text": "oklch(0.65 0.03 55)",
      border: "oklch(0.5214 0.03 48)",
    },
  },
  {
    name: "dark",
    dark: true,
    vars: {
      background: "oklch(0.23 0 0)",
      foreground: "oklch(0.985 0 0)",
      heading: "oklch(0.985 0 0)",
      body: "oklch(0.985 0 0)",
      accent: "oklch(0.5264 0 0)",
      "secondary-text": "oklch(0.7 0 0)",
      border: "oklch(0.5264 0 0)",
    },
  },
];

/** Every CSS variable any theme defines, so switching fully resets the last one. */
export const themeVarNames = [
  ...new Set(themes.flatMap((theme) => Object.keys(theme.vars))),
];

export function findTheme(name: string | null | undefined): Theme | undefined {
  if (!name) return undefined;
  return themes.find((theme) => theme.name === name);
}

/** Used when nothing is stored, or when the stored theme no longer exists. */
export function systemTheme(prefersDark: boolean): Theme | undefined {
  return findTheme(prefersDark ? "dark" : "light") ?? themes[0];
}

/**
 * Runs inline in <head> before first paint, so the stored theme is applied
 * without a flash. Generated from `themes` above so it can never drift out of
 * sync with the picker.
 */
export function themeBootstrapScript(): string {
  const map = Object.fromEntries(
    themes.map((theme) => [theme.name, { dark: !!theme.dark, vars: theme.vars }])
  );

  return `(function(){try{
var T=${JSON.stringify(map)},K=${JSON.stringify(THEME_STORAGE_KEY)},R=document.documentElement,n=null;
try{n=localStorage.getItem(K)}catch(e){}
var t=n&&Object.prototype.hasOwnProperty.call(T,n)?T[n]:null;
if(n&&!t){try{localStorage.removeItem(K)}catch(e){}}
if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?T.dark:T.light}
if(!t)return;
for(var k in t.vars){R.style.setProperty("--"+k,t.vars[k])}
R.classList.toggle("dark",!!t.dark)
}catch(e){}})();`;
}
