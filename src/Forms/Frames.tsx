/* eslint-disable react-dom/no-missing-iframe-sandbox */
import { useReducer } from 'react';

interface IframeState {
  wide: boolean;
  direct: boolean;
  anotherDirect: boolean;
  small1: boolean;
  small2: boolean;
  small3: boolean;
}

interface IframeAction {
  type: 'TOGGLE_NAV';
  payload: keyof IframeState;
}

const initialState: IframeState = {
  wide: false,
  direct: false,
  anotherDirect: false,
  small1: false,
  small2: false,
  small3: false,
};

const iframeReducer = (state: IframeState, action: IframeAction): IframeState => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
};

export const Frames = () => {
  const [iframeStates, dispatch] = useReducer(iframeReducer, initialState);

  const toggleNav = (key: keyof IframeState) => {
    dispatch({ type: 'TOGGLE_NAV', payload: key });
  };

  const getIframeSrc = (showNav: boolean) => showNav ? '/autofill-samples/#/' : '/autofill-samples/#/?nav=hide';

  return (
    <div className="p-6 space-y-8">
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Wide</h2>
          <button
            type="button"
            onClick={() => toggleNav('wide')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              iframeStates.wide
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {iframeStates.wide ? 'Hide Nav' : 'Show Nav'}
          </button>
        </div>
        <iframe
          src={getIframeSrc(iframeStates.wide)}
          className="w-full h-80 border rounded"
          title="Level 2 container"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Direct</h2>
            <button
              type="button"
              onClick={() => toggleNav('direct')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                iframeStates.direct
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {iframeStates.direct ? 'Hide Nav' : 'Show Nav'}
            </button>
          </div>
          <iframe
            src={getIframeSrc(iframeStates.direct)}
            className="w-full h-64 border rounded"
            title="Level 1 iframe"
          />
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Another Direct</h2>
            <button
              type="button"
              onClick={() => toggleNav('anotherDirect')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                iframeStates.anotherDirect
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {iframeStates.anotherDirect ? 'Hide Nav' : 'Show Nav'}
            </button>
          </div>
          <iframe
            src={getIframeSrc(iframeStates.anotherDirect)}
            className="w-full h-64 border rounded"
            title="Level 1 iframe 2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-md font-semibold">Small - 1</h3>
            <button
              type="button"
              onClick={() => toggleNav('small1')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                iframeStates.small1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {iframeStates.small1 ? 'Hide' : 'Show'}
            </button>
          </div>
          <iframe
            src={getIframeSrc(iframeStates.small1)}
            className="w-full h-48 border rounded"
            title="Small level 1"
            allow="same-origin"
          />
        </div>

        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-md font-semibold">Small - 2</h3>
            <button
              type="button"
              onClick={() => toggleNav('small2')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                iframeStates.small2
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {iframeStates.small2 ? 'Hide' : 'Show'}
            </button>
          </div>
          <iframe
            src={getIframeSrc(iframeStates.small2)}
            className="w-full h-48 border rounded"
            title="Small level 2"
          />
        </div>

        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-md font-semibold">Small - 3</h3>
            <button
              type="button"
              onClick={() => toggleNav('small3')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                iframeStates.small3
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {iframeStates.small3 ? 'Hide' : 'Show'}
            </button>
          </div>
          <iframe
            src={getIframeSrc(iframeStates.small3)}
            className="w-full h-48 border rounded"
            title="Small level 3"
          />
        </div>
      </div>
    </div>
  );
};
