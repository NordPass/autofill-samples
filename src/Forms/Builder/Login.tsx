import type { IAllSettings } from './interfaces/interfaces';
import { useRef } from 'react';
import { CustomFields } from './components/CustomFields';
import { FillActions } from './components/FillActions/Login';
import { getTranslations } from './translations/getTranslations';
import { applyDeformation } from './utils/common';

export const Login = ({
  formSettings,
  fieldSettings,
  customFieldSettings,
}: IAllSettings) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const customFieldsRef = useRef<Array<HTMLInputElement | null>>([]);

  const { withLabel, deformation } = fieldSettings;

  const usernameId = applyDeformation('username', deformation);
  const passwordId = applyDeformation('password', deformation);
  const customFieldId = (originalId?: string) => applyDeformation(originalId ?? '', deformation);

  const translations = getTranslations(formSettings.language);

  return (
    <div className="ml-3 justify-items-start">
      <FillActions username={usernameRef} password={passwordRef} customFields={customFieldsRef} />

      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl py-2">{translations.loginFormTitle}</h1>
        <h2 className="mb-2">{translations.loginFormDescription}</h2>

        <div className="flex flex-col w-full max-w-xs">
          {withLabel && (
            <label htmlFor={usernameId} className="text-sm mb-1">
              {translations.loginUsernameLabel}
            </label>
          )}
          <input
            ref={usernameRef}
            id={usernameId}
            name={usernameId}
            className="input w-full"
            type="text"
            placeholder={translations.loginUsernameLabel}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs mt-1">
          {withLabel && (
            <label htmlFor={passwordId} className="text-sm mb-1">
              {translations.loginPasswordLabel}
            </label>
          )}
          <input
            ref={passwordRef}
            id={passwordId}
            name={passwordId}
            className="input w-full"
            type="password"
            placeholder={translations.loginPasswordLabel}
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
            {translations.loginSubmit}
          </button>
        </div>
      </form>
    </div>
  );
};
