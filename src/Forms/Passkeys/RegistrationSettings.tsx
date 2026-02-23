import type { Dispatch, SetStateAction } from 'react';
import type {
  IRegistrationSettings,
} from './types';
import { Hints } from './Hints';
import { Algorithms } from './registrationSettings/Algorithms';
import {
  Attestation,
  AuthenticatorAttachment,
  ResidentKey,
  UserVerification,
} from './types';

export const RegistrationSettings = ({
  registrationSettings,
  setRegistrationSettings,
}: {
  registrationSettings: IRegistrationSettings;
  setRegistrationSettings: Dispatch<SetStateAction<IRegistrationSettings>>;
}) => {
  return (
    <div className="space-y-2">
      <h1 className="text-lg underline">Registration Settings </h1>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          User Verification
          <select
            value={registrationSettings.userVerification}
            onChange={event =>
              setRegistrationSettings(prev => ({
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

        <div className="flex flex-col">
          Attachment
          <select
            value={registrationSettings.attachment}
            onChange={event =>
              setRegistrationSettings(prev => ({
                ...prev,
                attachment: event.target.value as AuthenticatorAttachment,
              }))}
            className="bg-slate-900 border border-slate-700 rounded-lg p-2"
          >
            <option value={AuthenticatorAttachment.All}>All supported</option>
            <option value={AuthenticatorAttachment.CrossPlatform}>
              Cross-Platform
            </option>
            <option value={AuthenticatorAttachment.Platform}>Platform</option>
          </select>
        </div>

        <div className="flex flex-col">
          Discoverable Credential
          <select
            value={registrationSettings.residentKey}
            onChange={event =>
              setRegistrationSettings(prev => ({
                ...prev,
                residentKey: event.target.value as ResidentKey,
              }))}
            className="bg-slate-900 border border-slate-700 rounded-lg p-2"
          >
            <option value={ResidentKey.Discouraged}>Discouraged</option>
            <option value={ResidentKey.Preferred}>Preferred</option>
            <option value={ResidentKey.Required}>Required</option>
          </select>
        </div>

        <div className="flex flex-col">
          Attestation
          <select
            value={registrationSettings.attestation}
            onChange={event =>
              setRegistrationSettings(prev => ({
                ...prev,
                attestation: event.target.value as Attestation,
              }))}
            className="bg-slate-900 border border-slate-700 rounded-lg p-2"
          >
            <option value={Attestation.None}>None</option>
            <option value={Attestation.Direct}>Direct</option>
          </select>
        </div>
      </div>

      <Algorithms
        registrationSettings={registrationSettings}
        setRegistrationSettings={setRegistrationSettings}
      />

      <Hints<IRegistrationSettings> settings={registrationSettings} setSettings={setRegistrationSettings} />

    </div>
  );
};
