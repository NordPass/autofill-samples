import { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';
import { Link } from 'react-router-dom';

export const SecondStepLogin = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="ml-6">
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
      
      <h1 className="text-4xl mb-3">Login form with password field that is not in DOM</h1>

      <form className="flex flex-col items-start mt-3">
        <p className='pb-2'>Enter your credentials to login.</p>

        <input
          ref={username}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email or username"
        />
        {!submit &&
          <button
            className="btn btn-outline mt-3"
            type="button"
            onClick={() => setSubmit(true)}>
            Continue to sign in
          </button>}
        {submit && (
          <>
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
                  event.preventDefault();
                  errorToast();
                } else {
                  successToast();
                }
              }}
            >
              Sign In
            </button>
            <ToastContainer />
          </>
        )}
        <Link className='pt-2 underline' to="/forgotPassword">Forgot your password?</Link>
        <Link className='pt-2 underline' to="/register">Sign up</Link>
      </form>
    </div>
  );
};
