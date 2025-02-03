import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="flex justify-around m-3 flex-wrap gap-2">
    <Link className="btn" to="/all">All Forms</Link>
    <Link className="btn" to="/login">Login</Link>
    <Link className="btn" to="/loginPhone">Login 2</Link>
    <Link className="btn" to="/loginTotp">Login with TOTP</Link>
    <Link className="btn" to="/loginSixFieldsTotp">Login with Totp 2</Link>
    <Link className="btn" to="/rightToLeft">Right to Left Login</Link>
    <Link className="btn" to="/register">Register</Link>
    <Link className="btn" to="/forgotPassword">Forgot Password</Link>
    <Link className="btn" to="/changePassword">Change Password</Link>
    <Link className="btn" to="/changeEmail">Change Email</Link>
    <Link className="btn" to="/changeEmailWithPassword">Change Email 2</Link>
    <Link className="btn" to="/creditCard">Credit Card</Link>
    <Link className="btn" to="/identity">Personal Info</Link>
    <Link className="btn" to="/identitySelects">Personal Info 2</Link>
    <Link className="btn" to="/identityPhone">Personal Info 3</Link>
    <Link className="btn" to="/other">Other</Link>
    <Link className="btn" to="/subscribe">Subscribe</Link>
    <Link className="btn" to="/mfa">One Time Password</Link>
    <Link className="btn" to="/totp">TOTP</Link>
    <Link className="btn" to="/totpOneField">TOTP 2</Link>
    <Link className="btn" to="/loginRegister">Login/Register</Link>
    <Link className="btn" to="/builder">Builder</Link>
    <Link className="btn" to="/customLogin">Custom Login</Link>
    <Link className="btn" to="/customLoginTwoFields">Custom Login 2</Link>
    <Link className="btn" to="/secondStepLogin">Second Step Login</Link>
    <Link className="btn" to="/hiddenSecondStepLogin">Second Step Login 2</Link>
    <Link className="btn" to="/secondStepLoginTotp">Second Step Login Totp</Link>
    <Link className="btn" to="/threeStepLoginTotp">Three Step Login Totp</Link>
    <Link className="btn" to="/twoLogin">Two Login</Link>
    <Link className="btn" to="/modalLogin">Modal Login</Link>
    <Link className="btn" to="/checkoutForm">Checkout Form</Link>
  </nav>
);
