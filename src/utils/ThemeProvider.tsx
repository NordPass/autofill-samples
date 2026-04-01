import type { ReactNode } from 'react';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import type { TTheme } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>('dim');

  useLayoutEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');

    if (themeParam === 'dim' || themeParam === 'emerald') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(themeParam);
      document.documentElement.setAttribute('data-theme', themeParam);
    }
  }, []);

  const updateTheme = useCallback((newTheme: TTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, []);

  const value = useMemo(() => ({
    theme,
    updateTheme,
  }), [theme, updateTheme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
