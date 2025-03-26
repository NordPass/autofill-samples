import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const username = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3" style={{ justifyItems: 'left' }}>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          username.current!.value = 'naruto.uzumaki@gmail.com';
          newPassword.current!.value = '12345';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'brucewayne33112@gmail.com';
          newPassword.current!.value = 'alfredthebutler123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'dragonBorn33112@gmail.com';
          newPassword.current!.value = 'afterdarknessAlwaysComesLight_1';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = '';
          newPassword.current!.value = '';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mb-3">Register Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">To access your account you need to register on our website.</p>

        <input
          ref={username}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email Address or Username"
        />
        <input
          ref={newPassword}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Sign Up
        </button>
        <Link to="/login" className="underline pt-2">Already have an account?</Link>
      </form>
    </div>
  );
};
