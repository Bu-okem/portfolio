export default function useTheme() {
  const setLight = () => {
    const vars = {
      background: "oklch(0.98 0 0)",
      foreground: "oklch(0.2 0 0)",
      accent: "oklch(0.72 0 0)",
      "secondary-text": "oklch(0.556 0 0)",
      border: "oklch(0.85 0 0)",
    };
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    applyThemeVars(vars);
  };
  const setDark = () => {
    const vars = {
      background: "oklch(0.23 0 0)",
      foreground: "oklch(0.985 0 0)",
      accent: "oklch(0.47 0 0)",
      "secondary-text": "oklch(0.7 0 0)",
      border: "oklch(0.47 0 0)",
    };
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    applyThemeVars(vars);
  };

  const allThemes = [
    {
      name: "ocean",
      vars: {
        background: "oklch(0.96 0.01 220)",
        foreground: "oklch(0.2 0.06 220)",
        accent: "oklch(0.85 0.12 220)",
        "secondary-text": "oklch(0.5 0.06 220)",
        border: "oklch(0.85 0.03 220)",
      },
    },
    {
      name: "lavender",
      vars: {
        background: "oklch(0.94 0.04 300)",
        foreground: "oklch(0.2 0.06 300)",
        accent: "oklch(0.85 0.12 300)",
        "secondary-text": "oklch(0.5 0.06 300)",
        border: "oklch(0.85 0.03 300)",
      },
    },
    {
      name: "soft-paper",
      vars: {
        background: "oklch(0.96 0.03 85)",
        foreground: "oklch(0.25 0.04 50)",
        accent: "oklch(0.96 0.15 30)",
        "secondary-text": "oklch(0.60 0.05 50)",
        border: "oklch(0.85 0.05 85)",
      },
    },
    // background: "oklch(0.97 0.03 90)" /* Warm Sand Beige */,
    {
      name: "green",
      vars: {
        background: "oklch(0.18 0.018 180)",
        foreground: "oklch(0.96 0.03 110)",
        accent: "oklch(0.36 0.16 180)",
        "secondary-text": "oklch(0.75 0.05 140)",
        border: "oklch(0.40 0.08 150)",
      },
    },
    {
      name: "deep-midnight",
      vars: {
        background: "oklch(0.20 0.018 260)",
        foreground: "oklch(0.97 0.02 260)",
        accent: "oklch(0.36 0.018 260)",
        "secondary-text": "oklch(0.70 0.05 260)",
        border: "oklch(0.35 0.08 260)",
      },
    },
    {
      name: "cyberpunk-neon",
      vars: {
        background: "oklch(0.1 0.03 200)",
        foreground: "oklch(0.95 0.02 200)",
        accent: "oklch(0.75 0.18 190)",
        "secondary-text": "oklch(0.6 0.05 200)",
        border: "oklch(0.25 0.05 200)",
      },
    },
    {
      name: "espresso",
      vars: {
        background: "oklch(0.19 0.02 50)",
        foreground: "oklch(0.95 0.04 50)",
        accent: "oklch(0.9 0.05 50)",
        "secondary-text": "oklch(0.75 0.05 50)",
        border: "oklch(0.35 0.05 50)",
      },
    },
  ];
  const applyThemeVars = (vars: object) => {
    // Reset all existing variables first
    allThemes.forEach((theme) => {
      Object.keys(theme.vars).forEach((key) => {
        document.documentElement.style.removeProperty(`--${key}`);
      });
    });

    // Apply the new variables
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  return {
    setLight,
    setDark,
    allThemes,
    applyThemeVars,
  };
}
