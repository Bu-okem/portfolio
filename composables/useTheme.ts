export default function useTheme() {
  const setLight = () => {
    const vars = {
      background: 'oklch(0.98 0 0)',
      foreground: 'oklch(0.2 0 0)',
      accent: 'oklch(0.72 0 0)',
      'secondary-text': 'oklch(0.556 0 0)',
      border: 'oklch(0.85 0 0)',
    };
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    applyThemeVars(vars);
  };
  const setDark = () => {
    const vars = {
      background: 'oklch(0.23 0 0)',
      foreground: 'oklch(0.985 0 0)',
      accent: 'oklch(0.47 0 0)',
      'secondary-text': 'oklch(0.7 0 0)',
      border: 'oklch(0.47 0 0)',
    };
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    applyThemeVars(vars);
  };

  const allThemes = [
    {
      name: 'sepia',
      vars: {
        background: 'oklch(0.97 0.03 83.4)',
        foreground: 'oklch(0.2 0.03 83.4)',
        accent: 'oklch(0.85 0.12 83.4)',
        'secondary-text': 'oklch(0.5 0.03 83.4)',
        border: 'oklch(0.85 0.03 83.4)',
      },
    },
    {
      name: 'ocean',
      vars: {
        background: 'oklch(0.96 0.03 220)',
        foreground: 'oklch(0.2 0.06 220)',
        accent: 'oklch(0.85 0.12 220)',
        'secondary-text': 'oklch(0.5 0.06 220)',
        border: 'oklch(0.85 0.03 220)',
      },
    },
    {
      name: 'lavender',
      vars: {
        background: 'oklch(0.94 0.04 300)',
        foreground: 'oklch(0.2 0.06 300)',
        accent: 'oklch(0.85 0.12 300)',
        'secondary-text': 'oklch(0.5 0.06 300)',
        border: 'oklch(0.85 0.03 300)',
      },
    },
    {
      name: 'green',
      vars: {
        background: 'oklch(0.32 0.0229 173.56)',
        foreground: 'oklch(0.94 0.0225 151.64)',
        accent: 'oklch(0.58 0.0753 153.78)',
        'secondary-text': 'oklch(0.63 0.06 161.59)',
        border: 'oklch(0.58 0.0753 153.78)',
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
