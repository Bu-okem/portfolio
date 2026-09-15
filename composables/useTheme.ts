import {
  THEME_STORAGE_KEY,
  findTheme,
  systemTheme,
  themeVarNames,
  themes,
  type Theme,
} from "~/lib/themes";

export default function useTheme() {
  // Name of the theme currently applied, or null before the client has read
  // localStorage. Shared so any picker instance agrees.
  const activeTheme = useState<string | null>("active-theme", () => null);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;

    // Clear every variable any theme defines first, so a theme that omits one
    // does not inherit the previous theme's value.
    themeVarNames.forEach((name) => root.style.removeProperty(`--${name}`));
    Object.entries(theme.vars).forEach(([name, value]) =>
      root.style.setProperty(`--${name}`, value)
    );

    root.classList.toggle("dark", !!theme.dark);
    activeTheme.value = theme.name;

    // Private-mode browsers can throw here; a theme that fails to persist is
    // not worth breaking the switch over.
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme.name);
    } catch {
      /* ignore */
    }
  };

  /**
   * Resolves what should be showing right now, and self-heals when a stored
   * theme has since been removed from `themes`: the stale name is dropped and
   * the system preference takes over. Mirrors themeBootstrapScript().
   */
  const resolveStoredTheme = (): Theme | undefined => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      /* ignore */
    }

    const theme = findTheme(stored);

    if (stored && !theme) {
      try {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } catch {
        /* ignore */
      }
    }

    return (
      theme ??
      systemTheme(window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  };

  return { themes, activeTheme, applyTheme, resolveStoredTheme };
}
