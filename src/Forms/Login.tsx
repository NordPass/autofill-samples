import { useRef, useState } from 'react';
import { errorToast, successToast } from '../utils/toasts';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export const Login = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const [phoneLogin, setPhoneLogin] = useState(false);

  return (
    <div className='ml-6'>
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
          if(!phoneLogin) {
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
        onClick={() => setPhoneLogin(!phoneLogin)}
      >
        {phoneLogin ? 'Email/Username Login' : 'Phone Login'}
      </button>
      {!phoneLogin && (<form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mb-3">Login</h1>
        <label>
          <input
            ref={username}
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Email Address/Username"
          />
        </label>
        <label>
          <input
            ref={password}
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </label>
        <button
          className="btn btn-outline mt-3"
          type="button"
          onClick={(e) => {
            if (username.current!.value === 'error@gmail.com') {
              errorToast();
              e.preventDefault();
              return;
            }
            successToast();
          }}
        >Sign In</button>
        <ToastContainer />
      </form>)}
      {phoneLogin && (
        <form className="flex flex-col items-start mt-3">
          <h1 className="text-4xl mb-3">Login</h1>
          <label>
            <input
              ref={phone}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Phone number"
            />
          </label>
          <label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Code from phone"
            />
          </label>
          <button
            className="btn btn-outline mt-3"
            type="button"
            onClick={(e) => {
              if (phone.current!.value === '111111111') {
                errorToast();
                e.preventDefault();
                return;
              }
              successToast();
            }}
          >Sign In</button>
          <ToastContainer />
        </form>
      )}
    </div>
  );
};
