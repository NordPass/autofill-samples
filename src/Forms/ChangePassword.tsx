import { useRef } from 'react';

export const ChangePassword = () => {
  const password = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);
  const confirmNewPassword = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col items-center ml-3">
      <h1 className="text-4xl mb-3">Change Password</h1>
      <input
        ref={password}
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Current password"
      />
      <input
        ref={newPassword}
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="New Password"
      />
      <input
        ref={confirmNewPassword}
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Repeat New Password"
      />
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          password.current!.value = '12345';
          newPassword.current!.value = 'qwerty';
          confirmNewPassword.current!.value = 'qwerty';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          password.current!.value = 'IamNotJoker123';
          newPassword.current!.value = 'gothamIsSafe';
          confirmNewPassword.current!.value = 'gothamIsSafe';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
          newPassword.current!.value = 'skyrimisisafeforknow_123';
          confirmNewPassword.current!.value = 'skyrimisisafeforknow_123';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          password.current!.value = '';
          newPassword.current!.value = '';
          confirmNewPassword.current!.value = '';
        }}
      >
        Clear
      </button>
    </form>
  );
};
