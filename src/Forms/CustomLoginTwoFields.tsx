import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const CustomLoginTwoFields = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const companyID = useRef<HTMLInputElement>(null);
  const website = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          email.current!.value = 'naruto.uzumaki@gmail.com';
          password.current!.value = '12345';
          companyID.current!.value = '9871234123';
          website.current!.value = '123';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'brucewayne33112@gmail.com';
          password.current!.value = 'alfredthebutler123';
          companyID.current!.value = '111111231111';
          website.current!.value = '456';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'dragonBorn33112@gmail.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
          companyID.current!.value = '09998881231';
          website.current!.value = '789';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = '';
          password.current!.value = '';
          companyID.current!.value = '';
          website.current!.value = '';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mt-3">Custom Login Form 2</h1>

      <form className="flex flex-col items-start mt-3">

        <p className="pb-2">Enter your credentials to login into your corporate account.</p>

        <input
          id="email"
          ref={email}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Email"
        />
        <input
          id="loginPassword"
          ref={password}
          className="input w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <input
          id="companyID"
          ref={companyID}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Company ID"
        />
        <input
          id="website"
          ref={website}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Website"
        />
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={event => event.preventDefault()}
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
      </form>
    </div>
  );
};
