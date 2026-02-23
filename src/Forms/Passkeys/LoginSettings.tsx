import type { Dispatch, SetStateAction } from 'react';
import type { ILoginSettings } from './types';
import { Hints } from './Hints';
import { UserVerification } from './types';

export const LoginSettings = ({
  loginSettings,
  setLoginSettings,
}: {
  loginSettings: ILoginSettings;
  setLoginSettings: Dispatch<SetStateAction<ILoginSettings>>;
}) => (
  <div className="space-y-2">
    <h1 className="text-lg underline">Login Settings </h1>
    <div className="grid grid-cols-2 gap-2">

      <div className="flex flex-col">
        User Verification
        <select
          value={loginSettings.userVerification}
          onChange={event =>
            setLoginSettings(prev => ({
              ...prev,
              userVerification: event.target.value as UserVerification,
            }))}
          className="bg-slate-900 border border-slate-700 rounded-lg p-2"
        >
          <option value={UserVerification.Required}>Required</option>
          <option value={UserVerification.Preferred}>Preferred</option>
          <option value={UserVerification.Discouraged}>Discouraged</option>
        </select>
      </div>
    </div>

    <Hints<ILoginSettings> settings={loginSettings} setSettings={setLoginSettings} />
  </div>
);
