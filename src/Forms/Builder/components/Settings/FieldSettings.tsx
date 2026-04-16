import type { IFieldSettings } from '../../interfaces/interfaces';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFORMATION } from '../../interfaces/interfaces';

interface IFieldSettingsProps {
  settings: IFieldSettings;
  setSettings: (settings: IFieldSettings) => void;
}

export const FieldSettings = ({ settings, setSettings }: IFieldSettingsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const entries = [...searchParams.entries()]
      .filter(([key]) => key.startsWith('field['))
      .map(([key, value]) => {
        const fieldKey = key.slice('field['.length, -1);
        return [fieldKey, fieldKey === 'deformation' ? value : value === 'true'];
      });

    if (entries.length > 0) {
      setSettings(Object.fromEntries(entries) as IFieldSettings);
    }
    else {
      const newParams = new URLSearchParams(searchParams);
      Object.entries(settings).forEach(([key, value]) => {
        newParams.set(`field[${key}]`, String(value));
      });
      setSearchParams(newParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleLabelChange = (value: boolean) => {
    setSettings({ ...settings, withLabel: value });
    const newParams = new URLSearchParams(searchParams);
    newParams.set('field[withLabel]', String(value));
    setSearchParams(newParams);
  };

  const handleDeformChange = (value: IFieldSettings['deformation']) => {
    setSettings({ ...settings, deformation: value });
    const newParams = new URLSearchParams(searchParams);
    newParams.set('field[deformation]', value);
    setSearchParams(newParams);
  };

  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
      <input type="checkbox" defaultChecked />
      <div className="collapse-title font-semibold">Field Settings</div>
      <div className="collapse-content">
        <div className="flex gap-4 pt-2">
          <div
            className="flex items-center gap-2 border border-base-300 rounded-lg p-3 cursor-pointer"
            onClick={() => handleLabelChange(!settings.withLabel)}
          >
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              checked={settings.withLabel}
              onChange={e => handleLabelChange(e.target.checked)}
            />
            <span className="text-sm">With Label</span>
          </div>
        </div>

        <div className="flex gap-3 pt-3">
          {DEFORMATION.map(value => (
            <label key={value} className="flex items-center gap-2 border border-base-300 rounded-lg p-3 cursor-pointer">
              <input
                type="radio"
                name="field-deform"
                className="radio radio-primary radio-sm"
                checked={settings.deformation === value}
                onChange={() => handleDeformChange(value)}
              />
              <span className="text-sm capitalize">{value}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
