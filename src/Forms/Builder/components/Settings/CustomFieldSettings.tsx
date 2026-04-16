import type { ICustomField, TCustomFieldSettings } from '../../interfaces/interfaces';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { INPUT_TYPE } from '../../interfaces/interfaces';

interface ICustomFieldSettingsProps {
  settings: TCustomFieldSettings;
  setSettings: (fields: TCustomFieldSettings) => void;
}

export const CustomFieldSettings = ({ settings, setSettings }: ICustomFieldSettingsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const writeToParams = (fields: ICustomField[]) => {
    const newParams = new URLSearchParams(searchParams);
    [...newParams.keys()]
      .filter(key => key.startsWith('customField['))
      .forEach(key => newParams.delete(key));

    fields.forEach((field, index) => {
      Object.entries(field).forEach(([key, value]) => {
        if (value !== undefined) {
          newParams.set(`customField[${index}][${key}]`, String(value));
        }
      });
    });
    setSearchParams(newParams);
  };

  useEffect(() => {
    const entries = [...searchParams.entries()].filter(([key]) => key.startsWith('customField['));

    if (entries.length > 0) {
      const fieldsMap: Record<number, Partial<ICustomField>> = {};
      entries.forEach(([key, value]) => {
        // eslint-disable-next-line e18e/prefer-static-regex
        const match = key.match(/^customField\[(\d+)\]\[(\w+)\]$/);
        if (match) {
          const index = Number(match[1]);
          const field = match[2] as keyof ICustomField;
          if (!fieldsMap[index]) {
            fieldsMap[index] = { type: 'text' };
          }
          (fieldsMap[index] as Record<string, string>)[field] = value;
        }
      });
      setSettings(Object.values(fieldsMap) as ICustomField[]);
    }
    else if (settings.length > 0) {
      writeToParams(settings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleFieldChange = (index: number, changed: keyof ICustomField, value: string) => {
    const newFields = settings.map((field, i) =>
      i === index ? { ...field, [changed]: value } : field,
    );
    setSettings(newFields);
    writeToParams(newFields);
  };

  const addField = () => {
    const newFields = [...settings, { type: 'text' } as const];
    setSettings(newFields);
    writeToParams(newFields);
  };

  const removeField = (index: number) => {
    const newFields = settings.filter((_, i) => i !== index);
    setSettings(newFields);
    writeToParams(newFields);
  };

  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
      <input type="checkbox" defaultChecked />
      <div className="collapse-title font-semibold">Custom Fields</div>
      <div className="collapse-content">
        <div className="flex flex-col gap-2 pt-2">
          {settings.length > 0 && (
            <div className="grid grid-cols-5 gap-3 px-3">
              <span className="text-xs text-base-content/50">ID & Name</span>
              <span className="text-xs text-base-content/50">Placeholder</span>
              <span className="text-xs text-base-content/50">Label</span>
              <span className="text-xs text-base-content/50">Type</span>
            </div>
          )}

          {settings.map((field, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-3 items-center border border-base-300 rounded-lg p-3"
            >
              <input
                type="text"
                placeholder="ID & Name"
                className="input input-bordered input-sm w-full"
                value={field.id ?? ''}
                onChange={e => handleFieldChange(index, 'id', e.target.value)}
              />
              <input
                type="text"
                placeholder="Placeholder"
                className="input input-bordered input-sm w-full"
                value={field.placeholder ?? ''}
                onChange={e => handleFieldChange(index, 'placeholder', e.target.value)}
              />
              <input
                type="text"
                placeholder="Label"
                className="input input-bordered input-sm w-full"
                value={field.label ?? ''}
                onChange={e => handleFieldChange(index, 'label', e.target.value)}
              />
              <select
                className="select select-bordered select-sm w-full"
                value={field.type}
                onChange={e =>
                  handleFieldChange(index, 'type', e.target.value as ICustomField['type'])}
              >
                {INPUT_TYPE.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-ghost btn-sm text-error w-fit"
                onClick={() => removeField(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <button className="btn btn-outline btn-sm mt-1 w-fit" onClick={addField}>
            + Add Field
          </button>
        </div>
      </div>
    </div>
  );
};
