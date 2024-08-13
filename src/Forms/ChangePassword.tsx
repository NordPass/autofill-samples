import { useRef } from 'react';

export const ChangePassword = () => {
  const password = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);
  const confirmNewPassword = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-6">
      <button
        className="btn btn-outline"
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
        className="btn btn-outline ml-3"
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
        className="btn btn-outline ml-3"
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
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          password.current!.value = '';
          newPassword.current!.value = '';
          confirmNewPassword.current!.value = '';
        }}
      >
        Clear
      </button>
      <h1 className="text-4xl pb-2">Change Password Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p>If you want to change your password, </p>
        <p className='pb-2'>enter your <b>current password</b> and then your <b>new password</b>.</p>

        <input
          ref={password}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Current password"
          autoComplete="current-password"
        />
        <input
          ref={newPassword}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="New Password"
          autoComplete="new-password"
        />
        <input
          ref={confirmNewPassword}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Repeat New Password"
          autoComplete="new-password"
        />
        <button className="btn btn-outline mt-3" type="button">Change Password</button>
      </form>
    </div>
  );
};
