import { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';

export const ModalLogin = () => {
  const [modal, setModal] = useState(false);
  const email = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-6">

      <h1 className="text-4xl mb-3">Modal Login Form</h1>

      <button type="button" className="btn btn-outline" onClick={() => setModal(!modal)}>{modal ? 'Hide modal' : 'Show modal'}</button>
      {modal && (
        <form className="flex flex-col justify-center items-center">
          <p className="mb-3">Enter your credentials to login.</p>

          <input
            className="input input-bordered w-full max-w-xs"
            ref={email}
            type="text"
            placeholder="Email Address/Username"
          />
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
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
          <ToastContainer />
        </form>
      )}
    </div>
  );
};
