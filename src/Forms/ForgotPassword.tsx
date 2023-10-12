import { useRef } from 'react';

export const ForgotPassword = () => {
  const email = useRef<HTMLInputElement>(null);

  return (
    <div className='ml-6'>
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
      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mb-3">Forgot Password</h1>
        <label>
          <input
            ref={email}
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Email Address"
          />
        </label>
        <button className="btn btn-outline mt-3" type="button">Get Password</button>
      </form>
    </div>
  );
};
