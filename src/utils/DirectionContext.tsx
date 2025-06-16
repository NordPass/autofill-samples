import { createContext } from 'react';

export type TDirection = 'ltr' | 'rtl';

interface IDirectionContext {
  direction: TDirection;
  updateDirection: (direction: TDirection) => void;
}

export const DirectionContext = createContext<IDirectionContext>({
  direction: 'ltr',
  updateDirection: () => undefined,
});
