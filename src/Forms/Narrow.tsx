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

  return (
    <div className="w-full px-4">
      <h1 className="text-4xl mt-3">Narrow Inputs Form</h1>

      <div className="sticky top-0 z-10 pb-4 border-b border-gray-600 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-2 w-full">
            <div className="w-full">
              <label className="label" htmlFor="widthRange">
                <span className="label-text">
                  Width:
                  {controlWidth}
                  px
                </span>
              </label>
              <input
                id="widthRange"
                type="range"
                min={10}
                max={200}
                value={controlWidth}
                onChange={e => setControlWidth(Number(e.target.value))}
                className="w-full accent-blue-400 bg-gray-600 rounded-lg h-2"
              />
            </div>
            <div className="w-full">
              <label className="label" htmlFor="heightRange">
                <span className="label-text">
                  Height:
                  {controlHeight}
                  px
                </span>
              </label>
              <input
                id="heightRange"
                type="range"
                min={10}
                max={56}
                value={controlHeight}
                onChange={e => setControlHeight(Number(e.target.value))}
                className="w-full accent-blue-400 bg-gray-600 rounded-lg h-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="grid grid-cols-1 gap-2 w-full" onSubmit={event => event.preventDefault()}>
          <label className="label" htmlFor="firstName">
            <span className="label-text">First Name</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="firstName" />
          <label className="label" htmlFor="lastName">
            <span className="label-text">Last Name</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="lastName" />
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="email" />

          <label className="label" htmlFor="phoneNumber">
            <span className="label-text">Phone number</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="phoneNumber" />
          <label className="label" htmlFor="address1">
            <span className="label-text">Address 1</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="address1" />
          <label className="label" htmlFor="address2">
            <span className="label-text">Address 2</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="address2" />

          <label className="label" htmlFor="city">
            <span className="label-text">City</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="city" />
          <label className="label" htmlFor="state">
            <span className="label-text">State</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="state" />
          <label className="label" htmlFor="zip">
            <span className="label-text">Zip or Postal code</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" id="zip" />
          <label className="label" htmlFor="country">
            <span className="label-text">Country</span>
          </label>
          <input style={{ width: controlWidth, height: `${controlHeight}px`, lineHeight: `${controlHeight}px` }} className="outline-1 rounded" type="text" />
        </form>

        <form className="grid grid-cols-1 gap-2 w-full" onSubmit={event => event.preventDefault()}>
          <label className="label" htmlFor="firstName2">
            <span className="label-text">First Name</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="firstName2" />
          <label className="label" htmlFor="lastName2">
            <span className="label-text">Last Name</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="lastName2" />
          <label className="label" htmlFor="email2">
            <span className="label-text">Email</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="email2" />

          <label className="label" htmlFor="phoneNumber2">
            <span className="label-text">Phone number</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="phoneNumber2" />
          <label className="label" htmlFor="address12">
            <span className="label-text">Address 1</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="address12" />
          <label className="label" htmlFor="address22">
            <span className="label-text">Address 2</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="address22" />

          <label className="label" htmlFor="city2">
            <span className="label-text">City</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="city2" />
          <label className="label" htmlFor="state2">
            <span className="label-text">State</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="state2" />
          <label className="label" htmlFor="zip2">
            <span className="label-text">Zip or Postal code</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="zip2" />
          <label className="label" htmlFor="country2">
            <span className="label-text">Country</span>
          </label>
          <input className="border rounded px-3 py-2 w-full" type="text" id="country2" />
        </form>
      </div>
    </div>
  );
};
