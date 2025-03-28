import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';

export const LoginPhone = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const [phoneLogin, setPhoneLogin] = useState(false);

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          if (!phoneLogin) {
            username.current!.value = 'naruto.uzumaki@gmail.com';
            password.current!.value = '12345';

            return;
          }
          phone.current!.value = '01234741231';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          if (!phoneLogin) {
            username.current!.value = 'brucewayne33112@gmail.com';
            password.current!.value = 'alfredthebutler123';

            return;
          }
          phone.current!.value = '+36097123123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          if (!phoneLogin) {
            username.current!.value = 'dragonBorn33112@gmail.com';
            password.current!.value = 'afterdarknessAlwaysComesLight_1';

            return;
          }
          phone.current!.value = '+12023431233';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          if (!phoneLogin) {
            username.current!.value = 'error@gmail.com';
            password.current!.value = 'password123';

            return;
          }
          phone.current!.value = '111111111';
        }}
      >
        Failed login
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          if (!phoneLogin) {
            username.current!.value = '';
            password.current!.value = '';

            return;
          }
          phone.current!.value = '';
        }}
      >
        Clear
      </button>
      <button
        className="btn btn-outline btn-secondary ml-3"
        type="button"
        onClick={() => setPhoneLogin(prev => !prev)}
      >
        {phoneLogin ? 'Phone Login' : 'Email/Username Login'}
      </button>
      <h1 className="text-4xl mt-3">Login Form</h1>

      {phoneLogin && (
        <form className="flex flex-col items-start mt-3">
          <p className="pb-2">Welcome!</p>
          <p className="pb-2">Enter your credentials to login.</p>

          <input
            ref={username}
            className="input w-full max-w-xs"
            type="text"
            placeholder="Email Address/Username"
          />
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
            onClick={(event) => {
              event.preventDefault();

              if (username.current?.value === 'error@gmail.com') {
                errorToast();

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
      )}
      {!phoneLogin && (
        <form className="flex flex-col items-start mt-3">
          <p className="pb-2">Welcome!</p>
          <p className="pb-2">Enter your credentials to login.</p>

          <input
            ref={phone}
            className="input w-full max-w-xs"
            type="text"
            placeholder="Phone number"
          />
          <input
            className="input w-full max-w-xs"
            type="text"
            placeholder="Code from phone"
          />
          <button
            className="btn btn-outline mt-3"
            type="submit"
            onClick={(event) => {
              event.preventDefault();

              if (phone.current?.value === '111111111') {
                errorToast();

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
      )}
    </div>
  );
};
