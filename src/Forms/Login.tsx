import { useRef } from 'react';

export const Login = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col items-center ml-3">
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
        onClick={() => {
          username.current!.value = 'naruto.uzumaki@gmail.com';
          password.current!.value = '12345';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          username.current!.value = 'brucewayne33112@gmail.com';
          password.current!.value = 'alfredthebutler123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          username.current!.value = 'dragonBorn33112@gmail.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline mt-3"
        type="button"
        onClick={() => {
          username.current!.value = '';
          password.current!.value = '';
        }}
      >
        Clear
      </button>
    </form>
  );
};
