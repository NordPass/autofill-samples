import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const successNotification = () => toast.success('Logged in successfully', {
    position: 'top-center',
    autoClose: 5000,
  });

  const errorNotification = () => {toast.error('Error in login', {
    position: 'top-center',
    autoClose: 5000,
  })};

  return (
    <div className='ml-6'>
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
        }}
      >
        Clear
      </button>
      <form className="flex flex-col items-start mt-3">
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
              errorNotification();
              e.preventDefault();
              return;
            }
            successNotification();
          }}
        >Sign In</button>
        <ToastContainer />
      </form>
    </div>
  );
};
