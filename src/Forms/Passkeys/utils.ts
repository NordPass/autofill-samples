import type { ILoginSettings, IRegistrationSettings, IStoredCredential } from './types';
import { CoseAlgorithm } from './types';

const STORED_CREDENTIALS_KEY = 'demoStoredCredentials';

export const randomBytes = (length = 32) => {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);

  return bytes;
};

export const getStoredCredentials = (): IStoredCredential[] => {
  try {
    const stored = localStorage.getItem(STORED_CREDENTIALS_KEY);
    return stored ? JSON.parse(stored) : [];
  }
  catch {
    return [];
  }
};

export const saveCredential = (credential: IStoredCredential): void => {
  const credentials = getStoredCredentials();
  credentials.push(credential);
  localStorage.setItem(STORED_CREDENTIALS_KEY, JSON.stringify(credentials));
};

export const deleteCredential = (id: string): void => {
  const credentials = getStoredCredentials();
  const filtered = credentials.filter(c => c.id !== id);
  localStorage.setItem(STORED_CREDENTIALS_KEY, JSON.stringify(filtered));
};

export const getLatestCredential = (): IStoredCredential | null => {
  const credentials = getStoredCredentials();
  return credentials.length > 0 ? credentials[credentials.length - 1] : null;
};

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
  const rpId = window.location.hostname;

  if (pubKeyCredParams.length === 0) {
    setOutput('❌ Select at least one algorithm');
    return;
  }

  const publicKey: CredentialCreationOptions['publicKey'] = {
    challenge: randomBytes(),
    rp: {
      name: 'Algorithm Tester',
      ...(rpId ? { id: rpId } : {}),
    },
    user: {
      id: randomBytes(16),
      name: username,
      displayName: username,
    },
    pubKeyCredParams,
    timeout: 60000,
    authenticatorSelection: {
      userVerification: options.userVerification,
      authenticatorAttachment: options.attachment === 'all' ? undefined : (options.attachment as Exclude<AuthenticatorAttachment, 'all'>),
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

    // @ts-expect-error -- TypeScript types does not include this function
    const credIdBase64 = new Uint8Array(credential.rawId).toBase64();
    const alg = (
      credential.response as AuthenticatorAttestationResponse
    ).getPublicKeyAlgorithm?.();

    const storedCredential: IStoredCredential = {
      id: crypto.randomUUID(),
      username,
      credentialId: credIdBase64,
      algorithm: alg,
      timestamp: Date.now(),
      settings: options,
    };

    saveCredential(storedCredential);
    const allCredentials = getStoredCredentials();

    setOutput(
      `✅ Registration successful!\n\n`
      + `Username: ${username}\n`
      + `Credential ID: ${credIdBase64}\n`
      + `Algorithm used: ${alg}\n`
      + `Total credentials stored: ${allCredentials.length}\n\n${JSON.stringify(credential, null, 2)}`,
    );
  }
  catch (err) {
    setOutput(`❌ Registration error:\n${err}`);
  }
};

export const login = async (
  setOutput: (output: string) => void,
  options: ILoginSettings,
  username?: string,
) => {
  const allCredentials = getStoredCredentials();
  const rpId = window.location.hostname;

  if (allCredentials.length === 0) {
    setOutput('❌ No credentials registered yet');
    return;
  }

  // Filter credentials by username if provided, otherwise use all
  const credentialsToUse = username?.trim()
    ? allCredentials.filter(c => c.username === username.trim())
    : allCredentials;

  if (credentialsToUse.length === 0) {
    setOutput(
      `❌ No credentials found for username: "${username}"\n\n`
      + `Available usernames:\n${allCredentials.map(c => `- ${c.username}`).join('\n')}`,
    );
    return;
  }

  const publicKey: CredentialRequestOptions['publicKey'] = {
    challenge: randomBytes(),
    allowCredentials: credentialsToUse.map(cred => ({
      // @ts-expect-error -- TypeScript types does not include this function
      id: Uint8Array.fromBase64(cred.credentialId),
      type: 'public-key' as const,
    })),
    userVerification: options.userVerification,
    timeout: 60000,
    ...(rpId ? { rpId } : {}),
    ...(options.hints.length > 0 && { hints: options.hints }),
  };

  try {
    setOutput('⏳ Requesting assertion...');

    const assertion = await navigator.credentials.get({ publicKey });

    // Find which credential was used for this assertion
    const usedCredential = credentialsToUse.find(
      cred => cred.credentialId === (assertion as any)?.id,
    ) || credentialsToUse[0];

    setOutput(
      `✅ Login successful!\n\n`
      + `Username: ${usedCredential.username}\n`
      + `Credential ID: ${usedCredential.credentialId}\n`
      + `Algorithm: ${usedCredential.algorithm}\n`
      + `Created: ${new Date(usedCredential.timestamp).toLocaleString()}\n`
      + `Credentials used in this login: ${credentialsToUse.length}\n`
      + `Total credentials available: ${allCredentials.length}\n\n${JSON.stringify(
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
