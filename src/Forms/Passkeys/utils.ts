import type { ILoginSettings, IRegistrationSettings } from './types';
import { CoseAlgorithm } from './types';

export const randomBytes = (length = 32) => {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);

  return bytes;
};

export const bufferToBase64 = (buffer: ArrayBuffer) =>
  // @ts-expect-error -- TypeScript types does not include this function
  new Uint8Array(buffer).toBase64();

export const base64ToBuffer = (base64: string) =>
  // @ts-expect-error -- TypeScript types does not include this function
  Uint8Array.fromBase64(base64);

export const buildPubKeyCredParams = (
  options: IRegistrationSettings,
): PublicKeyCredentialParameters[] =>
  Object.values(CoseAlgorithm)
    .filter((alg): alg is CoseAlgorithm => typeof alg === 'number')
    .filter(alg => options.algorithms[alg])
    .map(alg => ({
      type: 'public-key',
      alg,
    }));

export const register = async (
  setOutput: (output: string) => void,
  options: IRegistrationSettings,
  username: string,
) => {
  if (!username.trim()) {
    setOutput('❌ Please enter a username');
    return;
  }

  const pubKeyCredParams = buildPubKeyCredParams(options);

  if (pubKeyCredParams.length === 0) {
    setOutput('❌ Select at least one algorithm');
    return;
  }

  const publicKey: CredentialCreationOptions['publicKey'] = {
    challenge: randomBytes(),
    rp: { name: 'Algorithm Tester' },
    user: {
      id: randomBytes(16),
      name: username,
      displayName: username,
    },
    pubKeyCredParams,
    timeout: 60000,
    authenticatorSelection: {
      userVerification: options.userVerification,
      authenticatorAttachment:
				options.attachment === 'all'
				  ? undefined
				  : (options.attachment as Exclude<AuthenticatorAttachment, 'all'>),
      residentKey: options.residentKey,
    },
    attestation: options.attestation,
    ...(options.hints.length > 0 && { hints: options.hints }),
  };

  try {
    setOutput('⏳ Creating credential...');

    const credential = (await navigator.credentials.create({
      publicKey,
    })) as PublicKeyCredential | null;

    if (!credential) {
      setOutput('❌ Credential creation was not successful');
      return;
    }

    const credIdBase64 = bufferToBase64(credential.rawId);
    const alg = (
      credential.response as AuthenticatorAttestationResponse
    ).getPublicKeyAlgorithm?.();

    setOutput(
      `✅ Registration successful!\n\n`
      + `Username: ${username}\n`
      + `Credential ID: ${credIdBase64}\n`
      + `Algorithm used: ${alg}\n\n${JSON.stringify(credential, null, 2)}`,
    );
  }
  catch (err) {
    setOutput(`❌ Registration error:\n${err}`);
  }
};

export const login = async (
  setOutput: (output: string) => void,
  options: ILoginSettings,
) => {
  const credIdBase64 = localStorage.getItem('demoCredentialId');
  const storedUsername = localStorage.getItem('demoUsername');

  if (!credIdBase64) {
    setOutput('❌ No credential registered yet');
    return;
  }

  const publicKey: CredentialRequestOptions['publicKey'] = {
    challenge: randomBytes(),
    allowCredentials: [
      { id: base64ToBuffer(credIdBase64), type: 'public-key' },
    ],
    userVerification: options.userVerification,
    timeout: 60000,
    ...(options.hints.length > 0 && { hints: options.hints }),
  };

  try {
    setOutput('⏳ Requesting assertion...');

    const assertion = await navigator.credentials.get({ publicKey });

    setOutput(
      `✅ Login successful!\n\n`
      + `Username: ${storedUsername}\n`
      + `Credential ID: ${credIdBase64}\n\n${JSON.stringify(
        assertion,
        null,
        2,
      )}`,
    );
  }
  catch (err) {
    setOutput(`❌ Login error:\n${err}`);
  }
};
