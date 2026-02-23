import type { Dispatch, SetStateAction } from 'react';
import type { ILoginSettings, IRegistrationSettings } from './types';
import { Hint } from './types';

export const Hints = <T extends ILoginSettings | IRegistrationSettings>({
  settings,
  setSettings,
}: {
  settings: T;
  setSettings: Dispatch<SetStateAction<T>>;
}) => {
  const toggleHint = (hint: Hint) => {
    setSettings((prevSettings) => {
      const hints = prevSettings.hints.includes(hint)
        ? prevSettings.hints.filter(h => h !== hint)
        : [...prevSettings.hints, hint];

      return { ...prevSettings, hints };
    });
  };

  return (
    <div>
      Hints (most → least preferred)
      <div className="grid grid-cols-3 gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.hints.includes(Hint.SecurityKey)}
            onChange={() => toggleHint(Hint.SecurityKey)}
          />
          Security Key
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.hints.includes(Hint.ClientDevice)}
            onChange={() => toggleHint(Hint.ClientDevice)}
          />
          Client Device
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.hints.includes(Hint.Hybrid)}
            onChange={() => toggleHint(Hint.Hybrid)}
          />
          Hybrid
        </label>
      </div>
      Current order:
      {` [${settings.hints.join(', ')}]`}
    </div>
  );
};
