export default function useTheme() {
  const setLight = () => {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  };
  const setDark = () => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  };

  return {
    setLight,
    setDark,
  };
}
