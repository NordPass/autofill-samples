import { createContext } from 'react';

export type TTheme = 'dim' | 'emerald';

interface IThemeContext {
  theme: TTheme;
  updateTheme: (theme: TTheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dim',
  updateTheme: () => undefined,
});
