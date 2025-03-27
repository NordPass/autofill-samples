import { use } from 'react';
import { Link } from 'react-router-dom';
import { DirectionContext } from './utils/DirectionProvider';

export const Navigation = () => {
  const { direction } = use(DirectionContext);

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
              <Link className='btn btn-xs btn-ghost hover:btn-primary' to="/secondStepLogin">Second Step</Link>
              <Link className='btn btn-xs btn-ghost hover:btn-primary' to="/hiddenSecondStepLogin">Hidden Second Step</Link>
              <Link className='btn btn-xs btn-ghost hover:btn-primary' to="/loginPhone">With Phone</Link>
              <Link className='btn btn-xs btn-ghost hover:btn-primary' to="/twoLogin">2 Forms</Link>
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral mb-1.5">More</h2>
            <div className="flex flex-wrap gap-1">
              <Link className="btn btn-xs hover:scale-105 transition-transform" to="/customLogin">Custom</Link>
              <Link className="btn btn-xs hover:scale-105 transition-transform" to="/customLoginTwoFields">Custom 2</Link>
              <Link className="btn btn-xs hover:scale-105 transition-transform" to="/modalLogin">Modal</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-neutral" to="/all">All</Link>
              <Link className="btn btn-xs btn-ghost hover:btn-neutral" to="/other">Other</Link>
            </div>
          </div>

          {/* Direction Toggle */}
          <div className="card bg-base-300/50 backdrop-blur p-2 hover:bg-base-300 transition-colors flex items-center">
            <div className="flex gap-1 w-full">
              <Link className="btn btn-xs flex-1 btn-neutral hover:scale-105 transition-transform" to="/builder">Builder</Link>
              <button
                type="button"
                className={`btn btn-xs flex-1 ${direction === 'ltr' ? 'btn-secondary' : 'btn-accent'} 
                  hover:scale-105 transition-transform`}
                onClick={() => {
                  location.assign(`${location.href.split('?')[0]}?direction=${direction === 'rtl' ? 'ltr' : 'rtl'}`);
                  location.reload();
                }}
              >
                {direction === 'ltr' ? '→ RTL' : '← LTR'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
