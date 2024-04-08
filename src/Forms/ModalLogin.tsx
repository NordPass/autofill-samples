import { useState } from "react";
import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';
import "react-toastify/dist/ReactToastify.css";

export const ModalLogin = () => {
  const [modal, setModal] = useState(false);
  const email = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-6">
      <h1 className="text-4xl mb-3">Modal Login</h1>
      <button className="btn btn-outline" onClick={() => setModal(!modal)}>{modal ? 'Hide modal' : 'Show modal'}</button>
      {modal && (
        <form className="flex flex-col justify-center items-center">
          <h1 className="text-4xl mb-3">Login</h1>
          <label>
            <input
              className="input input-bordered w-full max-w-xs"
              ref={email}
              type="text"
              placeholder="Email Address/Username"
            />
          </label>
          <label>
            <input
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
            if (email.current!.value === 'error@gmail.com') {
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
