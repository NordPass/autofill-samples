import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MobileNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const style = toggleMenu ? 'hidden' : 'auto';
  document.body.style.overflow = style;

  return (
    <nav className={`fixed ${toggleMenu && 'block fixed h-full flex-wrap bg-base-100 overflow-auto'}`}>
      <button
        type="button"
        className="btn btn-square btn-ghost transition-transform duration-300 ease-in-out"
        onClick={() => setToggleMenu(prev => !prev)}
      >
        {!toggleMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {toggleMenu && (
        <button
          type="button"
          className="flex justify-around flex-wrap h-[90%]"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <Link className="btn w-2/5" to="/all">All Forms</Link>
          <Link className="btn w-2/5" to="/login">Login</Link>
          <Link className="btn w-2/5" to="/loginTotp">Login with TOTP</Link>
          <Link className="btn w-2/5" to="/loginSixFieldsTotp>">Login with Totp 2</Link>
          <Link className="btn w-2/5" to="/register">Register</Link>
          <Link className="btn w-2/5" to="/forgotPassword">Forgot Password</Link>
          <Link className="btn w-2/5" to="/changePassword">Change Password</Link>
          <Link className="btn w-2/5" to="/changeEmail">Change Email</Link>
          <Link className="btn w-2/5" to="/changeEmailWithPassword">Change Email 2</Link>
          <Link className="btn w-2/5" to="/creditCard">Credit Card</Link>
          <Link className="btn w-2/5" to="/identity">Personal Info</Link>
          <Link className="btn w-2/5" to="/identitySelects">Personal Info 2</Link>
          <Link className="btn w-2/5" to="/identityPhone">Personal Info 3</Link>
          <Link className="btn w-2/5" to="/other">Other</Link>
          <Link className="btn w-2/5" to="/subscribe">Subscribe</Link>
          <Link className="btn w-2/5" to="/mfa">One Time Password</Link>
          <Link className="btn w-2/5" to="/totp">TOTP</Link>
          <Link className="btn w-2/5" to="/totpOneField">TOTPOneField</Link>
          <Link className="btn w-2/5" to="/loginRegister">Login/Register</Link>
          <Link className="btn w-2/5" to="/builder">Builder</Link>
          <Link className="btn w-2/5" to="/customLogin">Custom Login</Link>
          <Link className="btn w-2/5" to="/customLoginTwoFields">Custom Login 2</Link>
          <Link className="btn w-2/5" to="/secondStepLogin">Second Step Login</Link>
          <Link className="btn w-2/5" to="/hiddenSecondStepLogin">Second Step Login 2</Link>
          <Link className='btn w-2/5' to="/secondStepLoginTotp">Second Step Login Totp</Link>
          <Link className='btn w-2/5' to="/threeStepLoginTotp">Three Step Login Totp</Link>
          <Link className="btn w-2/5" to="/twoLogin">Two Login</Link>
          <Link className="btn w-2/5" to="/modalLogin">Modal Login</Link>
          <Link className="btn w-2/5" to="/checkoutForm">Modal Login</Link>
        </button>
      )}
    </nav>
  );
};
