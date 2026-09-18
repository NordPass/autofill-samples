import type { Dispatch, SetStateAction } from 'react';
import type { ILoginSettings, IRegistrationSettings } from './types';

export const Timeout = <T extends ILoginSettings | IRegistrationSettings>({
  settings,
  setSettings,
}: {
  settings: T;
  setSettings: Dispatch<SetStateAction<T>>;
}) => (
  <div className="flex flex-col">
    Timeout (ms)
    <input
      type="number"
      min={0}
      step={1000}
      value={settings.timeout}
      onChange={event =>
        setSettings(prevSettings => ({
          ...prevSettings,
          timeout: Number.parseInt(event.target.value, 10) || 0,
        }))}
      className="bg-slate-900 border border-slate-700 rounded-lg p-2"
    />
  </div>
);
