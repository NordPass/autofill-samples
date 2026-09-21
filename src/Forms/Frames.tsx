import { useMemo, useState } from 'react';

export const Frames = () => {
  const iframeSrc = '/autofill-samples/#/?nav=hide';
  const [frameCount, setFrameCount] = useState(3);

  const gridStyle = useMemo(() => ({
    gridTemplateColumns: `repeat(${Math.min(frameCount, 3)}, 1fr)`,
  }), [frameCount]);

  const frameHeight = frameCount === 1 ? 'h-[75vh]' : frameCount <= 3 ? 'h-[60vh]' : 'h-96';

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4 justify-center items-center">
        <button className="btn btn-outline" onClick={() => setFrameCount(1)}>One Iframe</button>
        <button className="btn btn-outline" onClick={() => setFrameCount(3)}>Three Iframes</button>
        <button className="btn btn-outline" onClick={() => setFrameCount(9)}>Nine Iframes</button>
      </div>
      <div className="flex gap-4 mb-4 justify-center items-center">
        <label className="flex items-center gap-2" htmlFor="frame-count">
          <span>Custom number of iframes:</span>
          <input
            id="frame-count"
            type="number"
            min={1}
            max={25}
            value={frameCount}
            className="input input-bordered w-24"
            onChange={e => setFrameCount(Math.max(1, Number(e.target.value) || 1))}
          />
        </label>
      </div>
      <div className="grid gap-4" style={gridStyle}>
        {Array.from({ length: frameCount }, (_, i) => (
          <iframe
            key={i}
            src={iframeSrc}
            className={`w-full ${frameHeight} border rounded`}
            title={`Iframe ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
