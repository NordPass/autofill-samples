import type { ReactNode } from 'react';
import { useLayoutEffect, useMemo, useState } from 'react';
import { DirectionContext } from './DirectionContext';

export type TDirection = 'ltr' | 'rtl';

interface IDirectionContext {
  direction: TDirection;
  updateDirection: (direction: TDirection) => void;
}

export const DirectionProvider = ({ children }: { children?: ReactNode }) => {
  const [direction, setDirection] = useState<TDirection>('ltr');

  useLayoutEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const directionParam = urlParams.get('direction');

    if (directionParam === 'ltr' || directionParam === 'rtl') {
      setDirection(directionParam);
      document.documentElement.dir = directionParam;
    }
  }, []);

  const updateDirection = (newDirection: TDirection) => {
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
  };

  const value = useMemo<IDirectionContext>(
    () => ({
      direction,
      updateDirection,
    }),
    [direction],
  );

  return <DirectionContext value={value}>{children}</DirectionContext>;
};
