import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DirectionContext } from './utils/DirectionProvider';

export const Navigation = () => {
  const { direction } = useContext(DirectionContext);

  return (
    <div style={{ justifyItems: 'left' }}>
      <nav className="flex justify-around m-3 flex-wrap gap-2">
        <Link className="btn btn-neutral" to="/all">All Forms</Link>
        <Link className="btn btn-neutral" to="/login">Login</Link>
        <Link className="btn btn-neutral" to="/loginPhone">Login 2</Link>
        <Link className="btn btn-neutral" to="/loginTotp">Login with TOTP</Link>
        <Link className="btn btn-neutral" to="/loginSixFieldsTotp">Login with Totp 2</Link>
        <Link className="btn btn-neutral" to="/register">Register</Link>
        <Link className="btn btn-neutral" to="/forgotPassword">Forgot Password</Link>
        <Link className="btn btn-neutral" to="/changePassword">Change Password</Link>
        <Link className="btn btn-neutral" to="/changeEmail">Change Email</Link>
        <Link className="btn btn-neutral" to="/changeEmailWithPassword">Change Email 2</Link>
        <Link className="btn btn-neutral" to="/creditCard">Credit Card</Link>
        <Link className="btn btn-neutral" to="/identity">Personal Info</Link>
        <Link className="btn btn-neutral" to="/identitySelects">Personal Info 2</Link>
        <Link className="btn btn-neutral" to="/identityPhone">Personal Info 3</Link>
        <Link className="btn btn-neutral" to="/other">Other</Link>
        <Link className="btn btn-neutral" to="/subscribe">Subscribe</Link>
        <Link className="btn btn-neutral" to="/mfa">One Time Password</Link>
        <Link className="btn btn-neutral" to="/totp">TOTP</Link>
        <Link className="btn btn-neutral" to="/totpOneField">TOTP 2</Link>
        <Link className="btn btn-neutral" to="/loginRegister">Login/Register</Link>
        <Link className="btn btn-neutral" to="/builder">Builder</Link>
        <Link className="btn btn-neutral" to="/customLogin">Custom Login</Link>
        <Link className="btn btn-neutral" to="/customLoginTwoFields">Custom Login 2</Link>
        <Link className="btn btn-neutral" to="/secondStepLogin">Second Step Login</Link>
        <Link className="btn btn-neutral" to="/hiddenSecondStepLogin">Second Step Login 2</Link>
        <Link className='btn btn-neutral' to="/secondStepLoginTotp">Second Step Login Totp</Link>
        <Link className='btn btn-neutral' to="/threeStepLoginTotp">Three Step Login Totp</Link>
        <Link className="btn btn-neutral" to="/twoLogin">Two Login</Link>
        <Link className="btn btn-neutral" to="/modalLogin">Modal Login</Link>
        <Link className="btn btn-neutral" to="/checkoutForm">Checkout Form</Link>
      </nav>

      <button
        className={`btn ml-3 mb-3 ${direction === 'ltr' ? 'btn-secondary' : 'btn-accent'}`}
        onClick={() => {
            location.assign(location.href.split('?')[0] + `?direction=${direction === 'rtl' ? 'ltr' : 'rtl'}`);
            location.reload();
        }}
      >
        Change direction
      </button>
    </div>
  );
}
