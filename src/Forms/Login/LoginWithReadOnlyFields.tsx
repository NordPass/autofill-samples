import { useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../../utils/toasts';

export const LoginWithReadOnlyFields = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isReadOnly, setIsReadOnly] = useState(true);

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
        {isMobile ? 'Failed' : 'Failed login'}
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = '';
          password.current!.value = '';
        }}
      >
        Clear
      </button>
      <button
        className="btn btn-outline ml-3 btn-accent"
        type="button"
        onClick={() => setIsReadOnly(!isReadOnly)}
      >
        {!isReadOnly ? 'Enable Read Only' : 'Disable Read Only'}
      </button>

      <h1 className="text-4xl mt-3">Login Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Welcome!</p>
        <p className="pb-2">Enter your credentials to login.</p>

        <input
          ref={username}
          name="username"
          autoComplete="username"
          className={`input w-full max-w-xs ${isReadOnly ? 'input-accent' : ''}`}
          type="text"
          placeholder="Email Address/Username"
          readOnly={isReadOnly}
        />
        <input
          ref={password}
          name="password"
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
        <button
          className="btn btn-outline mt-3 btn-success"
          type="button"
          onClick={() => navigate('/loginSuccess')}
        >
          Successful Login to next page
        </button>
        <Link className="pt-2 underline" to="/forgotPassword">Forgot your password?</Link>
        <Link className="pt-2 underline" to="/register">Sign up</Link>
        <ToastContainer />
      </form>
    </div>
  );
};
