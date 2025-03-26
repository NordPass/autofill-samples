import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { errorToast, errorTotpToast, successToast } from '../utils/toasts';

export const SecondStepLoginTotp = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const totp = useRef<HTMLInputElement>(null);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="ml-3" style={{ justifyItems: 'left' }}>
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
          if (username.current) {
            username.current.value = '';
          }
          if (password.current) {
            password.current.value = '';
          }
          if (totp.current) {
            totp.current.value = '';
          }
          setSubmit(false);
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mb-3">Login form with TOTP field that is not in DOM</h1>

      <form className="flex flex-col items-start mt-3" id={`${submit ? 'totp' : ''}`}>

        {!submit
          && (
            <>
              <p className="pb-2">Enter your credentials to login.</p>

              <input
                ref={username}
                className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Email or username"
              />
              <input
                ref={password}
                className="input input-bordered w-full max-w-xs"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button
                className="btn btn-outline mt-3"
                type="button"
                onClick={() => setTimeout(() => setSubmit(true), 500)}
              >
                Continue
              </button>
            </>
          )}

        {submit && (
          <>
            <p className="pb-2">Enter the code from your authenticator device.</p>
            <label>
              2FA code
              <input
                ref={totp}
                id="totpField"
                className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Code from authenticator app"
              />
            </label>
            <div className="pt-3 gap-2 flex">
              <button
                type="button"
                className="btn btn-outline btn-secondary"
                onClick={() => setSubmit(false)}
              >
                Back
              </button>
              <button
                className="btn btn-outline btn-primary"
                type="submit"
                onClick={(event) => {
                  event.preventDefault();

                  if (username.current?.value === 'error@gmail.com') {
                    errorToast();

                    return;
                  } else if (!totp.current?.value) {
                    errorTotpToast();

                    return;
                  }
                  successToast();
                }}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
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
