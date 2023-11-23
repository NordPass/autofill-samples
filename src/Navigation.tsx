import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="flex justify-around m-3 flex-wrap">
    <Link className="btn" to="/all">All Forms</Link>
    <Link className="btn" to="/login">Login</Link>
    <Link className="btn" to="/register">Register</Link>
    <Link className="btn" to="/forgotPassword">Forgot Password</Link>
    <Link className="btn" to="/changePassword">Change Password</Link>
    <Link className="btn" to="/changeEmail">Change Email</Link>
    <Link className="btn" to="/creditCard">Credit Card</Link>
    <Link className="btn" to="/identity">Personal Info</Link>
    <Link className="btn" to="/other">Other</Link>
    <Link className="btn" to="/subscribe">Subscribe</Link>
    <Link className="btn" to="/mfa">One Time Password</Link>
    <Link className="btn" to="/loginRegister">Login/Register</Link>
    <Link className="btn" to="/custom">Custom</Link>
  </nav>
);
