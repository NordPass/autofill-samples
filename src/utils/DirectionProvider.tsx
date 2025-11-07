import type { ReactNode } from 'react';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDirection(directionParam);
      document.documentElement.dir = directionParam;
    }
  }, []);

  const updateDirection = useCallback((newDirection: TDirection) => {
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
  }, []);

  const value = useMemo<IDirectionContext>(() => ({
    direction,
    updateDirection,
  }), [direction, updateDirection]);

  return <DirectionContext value={value}>{children}</DirectionContext>;
};
