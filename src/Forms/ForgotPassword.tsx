import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const email = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => email.current!.value = 'naruto.uzumaki@gmail.com'}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => email.current!.value = 'brucewayne33112@gmail.com'}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => email.current!.value = 'dragonBorn33112@gmail.com'}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => email.current!.value = ''}
      >
        Clear
      </button>
      <h1 className="text-4xl mt-3">Forgot Password Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Enter your email address and we will send you a link to change your password.</p>

        <input
          ref={email}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Email Address"
        />
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Get Password
        </button>
        <Link className="underline pt-2" to="/login">Log in into your account</Link>
      </form>
    </div>
  );
};
