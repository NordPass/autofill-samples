import { useRef } from 'react';

export const ChangeEmail = () => {
  const email = useRef<HTMLInputElement>(null);
  const newEmail = useRef<HTMLInputElement>(null);
  const confirmNewEmail = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-6">
      <button
        className="btn btn-outline"
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
        className="btn btn-outline ml-3"
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
        className="btn btn-outline ml-3"
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
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = '';
          newEmail.current!.value = '';
          confirmNewEmail.current!.value = '';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl pt-2">Change Email Form</h1>

      <form className="flex flex-col items-start mt-3">
      <p>If you want to change your email, </p>
      <p className='pb-2'>enter your <b>current email</b> and then your <b>new email</b>.</p>

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
        <button className="btn btn-outline mt-3" type="button">Change Email</button>
      </form>
    </div>
  );
};
