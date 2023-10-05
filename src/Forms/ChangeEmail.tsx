import { useRef } from 'react';

export const ChangeEmail = () => {
  const email = useRef<HTMLInputElement>(null);
  const newEmail = useRef<HTMLInputElement>(null);
  const confirmNewEmail = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col items-center ml-3">
      <h1 className="text-4xl mb-3">Change Email</h1>
      <input
        ref={email}
        className="input input-bordered w-full max-w-xs"
        type="email"
        placeholder="Current email"
      />
      <input
        ref={newEmail}
        className="input input-bordered w-full max-w-xs"
        type="email"
        placeholder="New Email"
      />
      <input
        ref={confirmNewEmail}
        className="input input-bordered w-full max-w-xs"
        type="email"
        placeholder="Repeat New Email"
      />
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          email.current!.value = 'naruto.uzumaki@gmail.com';
          newEmail.current!.value = 'sasukeComeBack@gmail.com';
          confirmNewEmail.current!.value = 'sasukeComeBack@gmail.com';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          email.current!.value = 'brucewayne33112@gmail.com';
          newEmail.current!.value = 'waynemanor@gmail.com';
          confirmNewEmail.current!.value = 'waynemanor@gmail.com';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          email.current!.value = 'dragonBorn33112@gmail.com';
          newEmail.current!.value = 'bladesarealive@yahoo.com';
          confirmNewEmail.current!.value = 'bladesarealive@yahoo.com';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          email.current!.value = '';
          newEmail.current!.value = '';
          confirmNewEmail.current!.value = '';
        }}
      >
        Clear
      </button>
    </form>
  );
};
