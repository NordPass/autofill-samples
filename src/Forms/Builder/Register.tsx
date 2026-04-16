import type { IAllSettings } from './interfaces/interfaces';
import { useRef } from 'react';
import { CustomFields } from './components/CustomFields';
import { FillActions } from './components/FillActions/Login';
import { getTranslations } from './translations/getTranslations';
import { applyDeformation } from './utils/common';

export const Register = ({
  formSettings,
  fieldSettings,
  customFieldSettings,
}: IAllSettings) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const customFieldsRef = useRef<Array<HTMLInputElement | null>>([]);

  const { withLabel, deformation } = fieldSettings;

  const emailId = applyDeformation('email', deformation);
  const newPasswordId = applyDeformation('new-password', deformation);
  const customFieldId = (originalId?: string) => applyDeformation(originalId ?? '', deformation);

  const translations = getTranslations(formSettings.language);

  return (
    <div className="ml-3 justify-items-start">
      <FillActions username={emailRef} password={newPasswordRef} customFields={customFieldsRef} />

      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl py-2">{translations.registerFormTitle}</h1>
        <h2 className="mb-2">{translations.registerFormDescription}</h2>

        <div className="flex flex-col w-full max-w-xs">
          {withLabel && (
            <label htmlFor={emailId} className="text-sm mb-1">
              {translations.registerEmailLabel}
            </label>
          )}
          <input
            ref={emailRef}
            id={emailId}
            name={emailId}
            className="input w-full"
            type="text"
            placeholder={translations.registerEmailLabel}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs mt-1">
          {withLabel && (
            <label htmlFor={newPasswordId} className="text-sm mb-1">
              {translations.registerPasswordLabel}
            </label>
          )}
          <input
            ref={newPasswordRef}
            id={newPasswordId}
            name={newPasswordId}
            className="input w-full"
            type="password"
            placeholder={translations.registerPasswordLabel}
          />
        </div>

        <CustomFields
          customFieldSettings={customFieldSettings}
          customFieldsRef={customFieldsRef}
          withLabel={withLabel}
          deformation={deformation}
          customFieldId={customFieldId}
        />

        <div className="mt-3">
          <button
            className="btn btn-outline mr-3"
            type="submit"
            onClick={event => event.preventDefault()}
          >
            {translations.registerSubmit}
          </button>
        </div>
      </form>
    </div>
  );
};
