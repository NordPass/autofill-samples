import type { ILoginSettings, IRegistrationSettings } from './types';
import { useState } from 'react';
import { LoginSettings } from './LoginSettings';
import { RegistrationSettings } from './RegistrationSettings';
import {
  Attestation,
  AuthenticatorAttachment,
  CoseAlgorithm,
  ResidentKey,
  UserVerification,
} from './types';
import { login, register } from './utils';

export const Passkeys = () => {
  const [username, setUsername] = useState('');
  const [output, setOutput] = useState('Waiting...');

  const [registrationSettings, setRegistrationSettings]
    = useState<IRegistrationSettings>({
      userVerification: UserVerification.Preferred,
      attachment: AuthenticatorAttachment.All,
      residentKey: ResidentKey.Preferred,
      attestation: Attestation.None,
      algorithms: {
        [CoseAlgorithm.ES256]: true,
        [CoseAlgorithm.ES384]: false,
        [CoseAlgorithm.ES512]: false,
        [CoseAlgorithm.EDDSA]: false,
        [CoseAlgorithm.RS256]: false,
      },
      hints: [],
    });

  const [loginSettings, setLoginSettings]
    = useState<ILoginSettings>({
      userVerification: UserVerification.Preferred,
      hints: [],
    });

  return (
    <div className="text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        <div className="bg-slate-800 rounded-xl p-5 space-y-4 shadow">
          <h1 className="text-xl font-semibold">WebAuthn Algorithm Tester</h1>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Username</label>
            <input
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <RegistrationSettings
            registrationSettings={registrationSettings}
            setRegistrationSettings={setRegistrationSettings}
          />

          <LoginSettings loginSettings={loginSettings} setLoginSettings={setLoginSettings} />

          <div className="flex gap-3 pt-2">
            <button
              onClick={() =>
                register(setOutput, registrationSettings, username)}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
            >
              Register
            </button>

            <button
              onClick={() => login(setOutput, loginSettings)}
              className="bg-slate-700 px-4 py-2 rounded-lg text-sm"
            >
              Login
            </button>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 shadow">
          <pre className="text-xs whitespace-pre-wrap break-all">{output}</pre>
        </div>
      </div>
    </div>
  );
};
