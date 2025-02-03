import { useRef } from 'react';

export const ChangeEmailWithPassword = () => {
  const newEmail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-6">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          newEmail.current!.value = 'sasukeComeBack@gmail.com';
          password.current!.value = '123456';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          newEmail.current!.value = 'waynemanor@gmail.com';
          password.current!.value = 'alfredthebutler123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          newEmail.current!.value = 'bladesarealive@yahoo.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          newEmail.current!.value = '';
          password.current!.value = '';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl pt-2">Change Email Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p>To change your email,</p>
        <p className="pb-2">
          enter your
          <b>new email</b>
          {' '}
          and then your
          <b>password</b>
          .
        </p>

        <input
          ref={newEmail}
          className="input input-bordered w-full max-w-xs"
          type="email"
          placeholder="New Email"
        />
        <input
          ref={password}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Enter password"
        />
        <button className="btn btn-outline mt-3" type="button">Change Email</button>
      </form>
    </div>
  );
};
