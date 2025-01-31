import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "../utils/toasts";

export const RightToLeft = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [phoneLogin, setPhoneLogin] = useState(false);

  return (
    <div className="mr-6" dir="rtl">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          if (!phoneLogin) {
            username.current!.value = 'naruto.uzumaki@gmail.com';
            password.current!.value = '12345';

            return;
          }
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
        }}
      >
        Clear
      </button>
      <button
        className="btn btn-outline btn-secondary ml-3"
        type="button"
        onClick={() => setPhoneLogin(!phoneLogin)}
      >
        {phoneLogin ? 'Email/Username Login' : 'Phone Login'}
      </button>

      <h1 className="text-4xl mt-3">Login Form</h1>
      <form className="flex flex-col items-start mt-3">
        <p className='pb-2'>!Welcome</p>
        <p className='pb-2'>.Enter your credentials to login</p>

        <input
          ref={username}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email Address/Username"
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
          onClick={event => {
            if (username.current?.value === 'error@gmail.com') {
              errorToast();
              event.preventDefault();

              return;
            }
            successToast();
          }}
        >Sign In
        </button>
        <Link className='pt-2 underline' to="/forgotPassword">?Forgot your password</Link>
        <Link className='pt-2 underline' to="/register">Sign up</Link>
        <ToastContainer />
      </form>
    </div>
  )
};