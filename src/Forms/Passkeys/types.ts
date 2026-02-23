export enum CoseAlgorithm {
  ES256 = -7,
  ES384 = -35,
  ES512 = -36,
  EDDSA = -8,
  RS256 = -257,
}

export type TSelectedAlgs = Record<CoseAlgorithm, boolean>;

export enum UserVerification {
  Required = 'required',
  Preferred = 'preferred',
  Discouraged = 'discouraged',
}

export enum AuthenticatorAttachment {
  Platform = 'platform',
  CrossPlatform = 'cross-platform',
  All = 'all',
}

export enum ResidentKey {
  Required = 'required',
  Preferred = 'preferred',
  Discouraged = 'discouraged',
}

export enum Attestation {
  None = 'none',
  Direct = 'direct',
}

export enum Hint {
  SecurityKey = 'security-key',
  ClientDevice = 'client-device',
  Hybrid = 'hybrid',
}

type ValueOf<T> = T[keyof T];

export interface IRegistrationSettings {
  userVerification: UserVerification;
  attachment: AuthenticatorAttachment;
  residentKey: ResidentKey;
  attestation: Attestation;
  algorithms: TSelectedAlgs;
  hints: Array<ValueOf<typeof Hint>>;
}

export interface ILoginSettings {
  userVerification: UserVerification;
  hints: Array<ValueOf<typeof Hint>>;
}
