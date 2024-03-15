import { useState } from "react";

export const ModalLogin = () => {
  const [modal, setModal] = useState(false);

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
          >Sign In</button>
        </form>
      )}
    </div>
  );
};
