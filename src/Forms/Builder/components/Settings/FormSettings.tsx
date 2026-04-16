import type { IFormSettings } from '../../interfaces/interfaces';
import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import { FORM_TYPES, LANGUAGES } from '../../interfaces/interfaces';

interface IFormSettingsProps {
  settings: IFormSettings;
  setSettings: (settings: IFormSettings) => void;
}

export const FormSettings = ({ settings, setSettings }: IFormSettingsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const entries = [...searchParams.entries()]
      .filter(([key]) => key.startsWith('form['))
      .map(([key, value]) => [key.slice('form['.length, -1), value]);

    if (entries.length > 0) {
      setSettings(Object.fromEntries(entries) as IFormSettings);
    }
    else {
      const newParams = new URLSearchParams(searchParams);
      Object.entries(settings).forEach(([key, value]) => {
        newParams.set(`form[${key}]`, value);
      });
      setSearchParams(newParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleChange = (
    changed: keyof IFormSettings,
    value: IFormSettings[keyof IFormSettings],
  ) => {
    setSettings({ ...settings, [changed]: value });

    const newParams = new URLSearchParams(searchParams);
    newParams.set(`form[${changed}]`, value);
    setSearchParams(newParams);
  };

  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
      <input type="checkbox" defaultChecked />
      <div className="collapse-title font-semibold">Form Settings</div>
      <div className="collapse-content">
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              value={settings.type}
              onChange={e => handleChange('type', e.target.value as IFormSettings['type'])}
              className="select select-bordered w-full"
            >
              {FORM_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Language</span>
            </label>
            <select
              value={settings.language}
              onChange={e =>
                handleChange('language', e.target.value as IFormSettings['language'])}
              className="select select-bordered w-full"
            >
              {LANGUAGES.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
