import { use } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DirectionContext } from './utils/DirectionContext';

export const Navigation = () => {
  const { direction, updateDirection } = use(DirectionContext);

  const [searchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('nav') === 'hide' || searchParams.get('nav') === 'hide') {
    return null;
  }

  return (
    <div className="bg-base-200 p-2 shadow-lg border-b border-base-300">
      <nav className="text-sm w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {/* Authentication Group */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Authentication</h2>
            <div className="flex flex-wrap gap-1">
              <Link className="btn btn-xs btn-primary hover:scale-105 transition-transform" to="/login">Login</Link>
              <Link className="btn btn-xs btn-primary hover:scale-105 transition-transform" to="/register">Register</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-primary" to="/loginRegister">Combined</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-primary" to="/forgotPassword">Forgot</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-primary" to="/secondStepLogin">Second Step</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-primary" to="/hiddenSecondStepLogin">Hidden Second Step</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-primary" to="/loginPhone">With Phone</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-primary" to="/twoLogin">2 Forms</Link>
            </div>
          </div>

          {/* Multi-factor Authentication */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors">
            <h2 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1.5">2FA</h2>
            <div className="flex flex-wrap gap-1">
              <Link className="btn btn-xs btn-secondary hover:scale-105 transition-transform" to="/mfa">OTP</Link>
              <Link className="btn btn-xs btn-secondary hover:scale-105 transition-transform" to="/totp">TOTP</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-secondary" to="/totpOneField">Simple</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-secondary" to="/loginTotp">Combo</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-secondary" to="/loginSixFieldsTotp">Combo 6 Fields</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-secondary" to="/secondStepLoginTotp">Combo 2 Step</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-secondary" to="/threeStepLoginTotp">Combo 3 Step</Link>
            </div>
          </div>

          {/* User Information */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors">
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent mb-1.5">User Info</h2>
            <div className="flex flex-wrap gap-1">
              <Link className="btn btn-xs btn-accent hover:scale-105 transition-transform" to="/identity">Profile</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-accent" to="/identitySelects">+Select</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-accent" to="/identityPhone">+Phone</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-accent" to="/changeEmail">Email</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-accent" to="/changePassword">Password</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-accent" to="/changeEmailWithPassword">Email + Password</Link>
            </div>
          </div>

          {/* Advanced Forms */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors">
            <h2 className="text-xs font-bold uppercase tracking-wider text-info mb-1.5">Advanced</h2>
            <div className="flex flex-wrap gap-1">
              <Link className="btn btn-xs btn-info hover:scale-105 transition-transform" to="/creditCard">Payment</Link>
              <Link className="btn btn-xs btn-info hover:scale-105 transition-transform" to="/checkoutForm">Checkout</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-info" to="/subscribe">Subscribe</Link>
            </div>
          </div>

          {/* Other Examples */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors">
            <h2 className="text-xs font-bold uppercase tracking-wider text-error mb-1.5">More</h2>
            <div className="flex flex-wrap gap-1">
              <Link className="btn btn-xs hover:scale-105 transition-transform" to="/customLogin">Custom</Link>
              <Link className="btn btn-xs hover:scale-105 transition-transform" to="/customLoginTwoFields">Custom 2</Link>
              <Link className="btn btn-xs hover:scale-105 transition-transform" to="/modalLogin">Modal</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-neutral" to="/all">All</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-neutral" to="/other">Other</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-neutral" to="/narrow">Narrow</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-neutral" to="/frames">Frames</Link>
            </div>
          </div>

          {/* Direction Toggle */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors flex items-center">
            <div className="flex gap-1 flex-wrap w-full">
              <Link className="btn btn-xs flex-1 btn-neutral hover:scale-105 transition-transform" to="/builder">🔨 Builder</Link>
              <button
                type="button"
                className="btn btn-xs flex-1 btn-neutral hover:scale-105 transition-transform"
                onClick={() => {
                  const newDirection = direction === 'rtl' ? 'ltr' : 'rtl';
                  const url = new URL(window.location.href);
                  url.searchParams.set('direction', newDirection);
                  window.history.pushState({}, '', url);
                  updateDirection(newDirection);
                }}
              >

                {direction === 'ltr' ? 'RTL ⬅️' : 'LTR ➡️'}
              </button>
              <button
                type="button"
                className="btn btn-xs flex-1 btn-neutral hover:scale-105 transition-transform"
                onClick={() => {
                  document.querySelectorAll('input').forEach((input) => {
                    input.setAttribute('data-np-skip', '');
                  });
                }}
              >
                Skip Autofill ⏭️️
              </button>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <input type="checkbox" value="emerald" className="toggle theme-controller" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
