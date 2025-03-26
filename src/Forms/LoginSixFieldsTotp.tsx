import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { errorTotpToast, successToast } from '../utils/toasts';

export const LoginSixFieldsTotp = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const totp = useRef<Array<HTMLInputElement | null>>([]);

  return (
    <div className="ml-3 justify-items-start">
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
        <p className="pb-2">Enter your credentials to login into your account</p>

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
        <div className="flex justify-around gap-3 totp-form pt-3 flex-col">
          Code from authenticator app
          <div className="gap-3 flex">
            {[...Array.from({ length: 6 })].map((_, index) => (
              <label key={index} htmlFor={`totp-${index}`}>
                <input
                  type="text"
                  autoComplete="off"
                  maxLength={1}
                  className="input input-bordered w-[45px]"
                  ref={(el) => {
                    totp.current[index] = el;
                  }}
                />
              </label>
            ))}
          </div>
        </div>
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={(event) => {
            event.preventDefault();

            if (totp.current.some(el => !el?.value)) {
              errorTotpToast();

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
