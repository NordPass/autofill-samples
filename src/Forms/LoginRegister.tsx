import { useRef } from 'react';

export const LoginRegister = () => {
  const email = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3" style={{ justifyItems: 'left'}}>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => { email.current!.value = 'naruto.uzumaki@gmail.com'; }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => { email.current!.value = 'brucewayne33112@gmail.com'; }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => { email.current!.value = 'dragonBorn33112@gmail.com'; }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => { email.current!.value = ''; }}
      >
        Clear
      </button>

      <h1 className="text-4xl mt-3">Login or Register Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Enter email to login or register to your account.</p>

        <input
          ref={email}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email"
        />
        <button className="btn btn-outline mt-3" type="button">Continue</button>
      </form>
    </div>
  );
};
