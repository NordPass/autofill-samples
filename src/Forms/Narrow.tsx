import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Narrow = () => {
  const [searchParams] = useSearchParams();

  const [controlWidth, setControlWidth] = useState<number>(() => {
    const w = Number.parseInt(searchParams.get('w') ?? '200', 10);
    return Number.isNaN(w) ? 200 : w;
  });
  const [controlHeight, setControlHeight] = useState<number>(() => {
    const height = Number.parseInt(searchParams.get('h') ?? '32', 10);
    return Number.isNaN(height) ? 32 : height;
  });
  const [controlPadding, setControlPadding] = useState<number>(() => {
    const padding = Number.parseInt(searchParams.get('p') ?? '8', 10);
    return Number.isNaN(padding) ? 8 : padding;
  });
  const [controlMargin, setControlMargin] = useState<number>(() => {
    const margin = Number.parseInt(searchParams.get('m') ?? '4', 10);
    return Number.isNaN(margin) ? 4 : margin;
  });

  return (
    <div className="w-full px-4">
      <h1 className="text-4xl mt-3">Adjustable Inputs Form</h1>

      <div className="pb-4 border-b border-gray-600 mb-4">
        <div className="grid grid-cols-1 gap-4 my-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="w-full">
              <label className="label flex flex-col">
                <span className="label-text">
                  Width:
                  {controlWidth}
                  px
                </span>
                <input
                  type="range"
                  min={10}
                  max={200}
                  value={controlWidth}
                  onChange={e => setControlWidth(Number(e.target.value))}
                  className="w-full accent-gray-400 bg-gray-700 rounded-lg h-2"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="label flex flex-col">
                <span className="label-text">
                  Height:
                  {controlHeight}
                  px
                </span>
                <input
                  type="range"
                  min={10}
                  max={56}
                  value={controlHeight}
                  onChange={e => setControlHeight(Number(e.target.value))}
                  className="w-full accent-gray-400 bg-gray-700 rounded-lg h-2"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="label flex flex-col">
                <span className="label-text">
                  Padding:
                  {controlPadding}
                  px
                </span>
                <input
                  type="range"
                  min={0}
                  max={20}
                  value={controlPadding}
                  onChange={e => setControlPadding(Number(e.target.value))}
                  className="w-full accent-gray-400 bg-gray-700 rounded-lg h-2"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="label flex flex-col">
                <span className="label-text">
                  Margin:
                  {controlMargin}
                  px
                </span>
                <input
                  type="range"
                  min={0}
                  max={20}
                  value={controlMargin}
                  onChange={e => setControlMargin(Number(e.target.value))}
                  className="w-full accent-gray-400 bg-gray-700 rounded-lg h-2"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <h2 className="text-2xl mb-4">Controlled Form</h2>
          <form className="grid grid-cols-1 gap-2 w-full" onSubmit={event => event.preventDefault()}>
            <label className="label flex flex-col">
              <span className="label-text">First Name</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Last Name</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Email</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>

            <label className="label flex flex-col">
              <span className="label-text">Phone number</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Address 1</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Address 2</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>

            <label className="label flex flex-col">
              <span className="label-text">City</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">State</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Zip or Postal code</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Country</span>
              <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px`, padding: `${controlPadding}px`, margin: `${controlMargin}px` }} className="outline-1 rounded" type="text" />
            </label>
          </form>
        </div>

        <div className="w-full">
          <h2 className="text-2xl mb-4">Reference Form</h2>
          <form className="grid grid-cols-1 gap-2 w-full" onSubmit={event => event.preventDefault()}>
            <label className="label flex flex-col">
              <span className="label-text">First Name</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Last Name</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Email</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>

            <label className="label flex flex-col">
              <span className="label-text">Phone number</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Address 1</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Address 2</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>

            <label className="label flex flex-col">
              <span className="label-text">City</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">State</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Zip or Postal code</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
            <label className="label flex flex-col">
              <span className="label-text">Country</span>
              <input className="border rounded px-3 py-2 w-full" type="text" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
