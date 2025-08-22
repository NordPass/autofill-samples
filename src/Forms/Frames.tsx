/* eslint-disable react-dom/no-missing-iframe-sandbox */
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Frames = () => {
  const iframeSrc = '/autofill-samples/#/?nav=hide';
  const [searchParams] = useSearchParams();
  const GRID_SIZE = Number.parseInt(searchParams.get('grid') || '3', 10);

  const gridStyle = useMemo(() => ({
    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
  }), [GRID_SIZE]);

  const createGrid = () => {
    const grid = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        grid.push(
          <iframe
            key={`${i}-${j}`}
            src={iframeSrc}
            className="w-full h-48 border rounded"
            title={`Iframe ${i * 5 + j + 1}`}
          />,
        );
      }
    }
    return grid;
  };

  return (
    <div className="p-6">
      <div className="grid gap-4" style={gridStyle}>
        {createGrid()}
      </div>
    </div>
  );
};
