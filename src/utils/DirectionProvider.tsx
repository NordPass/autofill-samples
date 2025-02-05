import { useState, useMemo, type ReactNode, createContext, useLayoutEffect } from 'react';

export type TDirection = 'ltr' | 'rtl';

interface IDirectionContext {
  direction: TDirection;
  setDirection: (direction: TDirection) => void;
}


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

  return <DirectionContext.Provider value={value}>{children}</DirectionContext.Provider>;
};

export const DirectionContext = createContext<IDirectionContext>({
  direction: 'ltr',
  setDirection: () => undefined,
});