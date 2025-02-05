import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';

export const LoginTotp = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3" style={{ justifyItems: 'left'}}>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          email.current!.value = 'naruto.uzumaki@gmail.com';
          password.current!.value = '12345';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'brucewayne33112@gmail.com';
          password.current!.value = 'alfredthebutler123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'dragonBorn33112@gmail.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'error@gmail.com';
          password.current!.value = 'password123';
        }}
      >
        Failed login
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = '';
          password.current!.value = '';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mt-3">Login form with Totp</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Enter your credentials to login into your account.</p>

        <input
          id="email"
          ref={email}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Login email"
        />
        <input
          id="loginPassword"
          ref={password}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <input
          id="totp"
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Code from authenticator app"
        />
        <button
          className="btn btn-outline mt-3"
          type="button"
          onClick={(event) => {
            if (email.current?.value === 'error@gmail.com') {
              errorToast();
              event.preventDefault();

              return;
            }
            successToast();
          }}
        >
          Sign In
        </button>
        <Link className="pt-2 underline" to="/forgotPassword">Forgot your password?</Link>
        <Link className="pt-2 underline" to="/register">Sign up</Link>
        <ToastContainer />
      </form>
    </div>
  );
};
