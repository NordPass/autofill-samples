import type { ReactNode } from 'react';
import { createContext, useLayoutEffect, useMemo, useState } from 'react';

export type TDirection = 'ltr' | 'rtl';

interface IDirectionContext {
  direction: TDirection;
  setDirection: (direction: TDirection) => void;
}

export const DirectionContext = createContext<IDirectionContext>({
  direction: 'ltr',
  setDirection: () => undefined,
});

export const DirectionProvider = ({ children }: { children?: ReactNode }) => {
  const [direction, setDirection] = useState<TDirection>('ltr');

  useLayoutEffect(() => {
    const queryParams = window.location.hash.split('?')[1];
    if (queryParams) {
      const params = new URLSearchParams(queryParams);
      const direction = params.get('direction');

      if (direction === 'rtl') {
        setDirection(direction);
        document.documentElement.dir = direction;
      }
    }
  }, []);

  const value = useMemo<IDirectionContext>(
    () => ({
      direction,
      setDirection,
    }),
    [direction, setDirection],
  );

  return <DirectionContext value={value}>{children}</DirectionContext>;
};
