import type { RefObject } from 'react';
import type { TCustomFieldSettings } from '../interfaces/interfaces';

interface ICustomFieldsProps {
  customFieldSettings: TCustomFieldSettings;
  customFieldsRef: RefObject<Array<HTMLInputElement | null>>;
  withLabel: boolean;
  deformation: string;
  customFieldId: (originalId?: string) => string;
}

export const CustomFields = ({
  customFieldSettings,
  customFieldsRef,
  withLabel,
  customFieldId,
}: ICustomFieldsProps) => (
  <>
    {customFieldSettings.map((customField, index) => {
      const fieldId = customFieldId(customField.id);

      return (
        <div key={customField.id || index} className="flex flex-col w-full max-w-xs mt-1">
          {withLabel && customField.label && (
            <label htmlFor={fieldId} className="text-sm mb-1">
              {customField.label}
            </label>
          )}
          <input
            ref={(el) => {
              customFieldsRef.current[index] = el;
            }}
            className="input w-full"
            name={fieldId}
            id={fieldId}
            {...customField}
          />
        </div>
      );
    })}
  </>
);
