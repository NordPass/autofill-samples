import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="flex justify-around m-3 flex-wrap">
    <Link className="btn ml-2" to="/all">All Forms</Link>
    <Link className="btn ml-2" to="/login">Login</Link>
    <Link className="btn ml-2" to="/register">Register</Link>
    <Link className="btn ml-2" to="/forgotPassword">Forgot Password</Link>
    <Link className="btn ml-2" to="/changePassword">Change Password</Link>
    <Link className="btn ml-2" to="/changeEmail">Change Email</Link>
    <Link className="btn ml-2" to="/creditCard">Credit Card</Link>
    <Link className="btn ml-2" to="/identity">Personal Info</Link>
    <Link className="btn ml-2" to="/other">Other</Link>
    <Link className="btn ml-2" to="/subscribe">Subscribe</Link>
    <Link className="btn ml-2" to="/mfa">One Time Password</Link>
    <Link className="btn ml-2" to="/loginRegister">Login/Register</Link>
    <Link className="btn ml-2" to="/builder">Builder</Link>
    <Link className="btn ml-2" to="/customLogin">Custom Login</Link>
    <Link className="btn mt-2" to="/personalInfoSelects">Personal Info 2</Link>
  </nav>
);
