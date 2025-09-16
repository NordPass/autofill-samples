import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { errorToast, errorTotpToast, successToast } from '../utils/toasts';

export const ThreeStepLoginTotp = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const totp = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          username.current!.value = 'naruto.uzumaki@gmail.com';
          password.current!.value = '12345';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'brucewayne33112@gmail.com';
          password.current!.value = 'alfredthebutler123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'dragonBorn33112@gmail.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'error@gmail.com';
          password.current!.value = 'password123';
        }}
      >
        Failed login
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = '';
          password.current!.value = '';
          setSubmit(false);
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mb-3">Login form with password and TOTP fields that are not in DOM</h1>

      <form className="flex flex-col items-start mt-3" id={`${submit ? 'totp' : ''}`} onSubmit={event => event.preventDefault()}>

        {!showPassword && !submit
          && (
            <>
              <p className="pb-2">Enter your credentials to login.</p>

              <input
                ref={username}
                className="input w-full max-w-xs"
                type="text"
                placeholder="Email or username"
              />
              <button
                className="btn btn-outline mt-3"
                type="submit"
                onClick={() => setTimeout(() => setShowPassword(true), 1000)}
              >
                Continue
              </button>
            </>
          )}

        {!submit && showPassword
          && (
            <>
              <p className="pb-2">Enter your credentials to login.</p>
              <input
                ref={password}
                className="input w-full max-w-xs"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button
                className="btn btn-outline mt-3"
                type="submit"
                onClick={() => setTimeout(() => setSubmit(true), 2000)}
              >
                Continue
              </button>
            </>
          )}

        {submit && (
          <>
            <p className="pb-2">Enter the code from your authenticator app.</p>
            <label>
              2FA code
              <input
                ref={totp}
                id="totpField"
                className="input w-full max-w-xs"
                type="text"
                placeholder="Code from authenticator app"
              />
            </label>

            <button
              className="btn btn-outline mt-3"
              type="submit"
              onClick={(event) => {
                event.preventDefault();

                if (username.current?.value === 'error@gmail.com') {
                  errorToast();

                  return;
                }
                else if (!totp.current?.value) {
                  errorTotpToast();

                  return;
                }

                successToast();
              }}
            >
              Sign in
            </button>
            <ToastContainer />
          </>
        )}
        {!submit && (
          <>
            <Link className="pt-2 underline" to="/forgotPassword">Forgot your password?</Link>
            <Link className="pt-2 underline" to="/register">Sign up</Link>
          </>
        )}
      </form>
    </div>
  );
};
