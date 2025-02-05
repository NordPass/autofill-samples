import { isMobile } from 'react-device-detect';
import { COUNTRY_OPTIONS, PREFIX_OPTIONS, STATES_OPTIONS } from '../utils/constants';

export const AllForms = () => (
  <div className={`flex flex-wrap justify-around ${isMobile && 'text-center'}`}>
    <form className="flex text-center flex-col">
      <h1 className="text-4xl mb-3">Login</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email Address/Username" />
      <input
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <button className="btn btn-outline mt-3" type="button">Sign In</button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <p className="pb-2">Welcome!</p>
      <p className="pb-2">Enter your credentials to login.</p>

      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Email Address/Username"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <button
        className="btn btn-outline mt-3"
        type="button"
      >
        Sign In
      </button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <p className="pb-2">Welcome!</p>
      <p className="pb-2">Enter your credentials to login.</p>

      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Phone number"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Code from phone"
      />
      <button
        className="btn btn-outline mt-3"
        type="button"
      >
        Sign In
      </button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Register</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email Address/Username" />
      <input
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />
      <button className="btn btn-outline mt-3" type="button">Sign Up</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Change Password</h1>
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Current password" />
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="New Password" />
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Repeat New Password" />
      <button className="btn btn-outline mt-3" type="button">Change Password</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Forgot Password</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email Address" />
      <button className="btn btn-outline mt-3" type="button">Get Password</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Change Email</h1>
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Current email" />
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="New Email" />
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Repeat New Email" />
      <button className="btn btn-outline mt-3" type="button">Change Email</button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <p>To change your email,</p>
      <p className="pb-2">
        enter your
        <b>new email</b>
        {' '}
        and then your
        <b>password</b>
        .
      </p>

      <input
        className="input input-bordered w-full max-w-xs"
        type="email"
        placeholder="New Email"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Enter password"
      />
      <button className="btn btn-outline mt-3" type="button">Change Email</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Credit Card</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Full Name" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="CC number" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="MM/YY" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="CVV" />
      <button className="btn btn-outline mt-3" type="button">Submit Credit Card</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Personal Info</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="First Name" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Last Name" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Phone number" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Address 1" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Address 2" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="City" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="State" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Zip or Postal code" />
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Country" />
      <button className="btn btn-outline mt-3" type="button">Save</button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <p className="pb-2">Save your credentials for future transactions.</p>

      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="First Name"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Email"
      />
      <div className="flex items-center">
        <input
          className="input input-bordered w-[80px] max-w-xs mr-2"
          type="text"
          name="phonePrefix"
          placeholder="Prefix"
        />
        <input
          className="input input-bordered w-[80px] max-w-xs mr-2"
          type="text"
          name="phoneArea"
          placeholder="(Area)"
        />
        <input
          className="input input-bordered max-w-xs mr-2"
          type="text"
          placeholder="Phone number"
        />
        {' '}
        Ext:
        {' '}
        <input
          className="input input-bordered w-[70px] max-w-xs ml-2"
          type="text"
          name="phoneExtension"
        />
      </div>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Address 1"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Address 2"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="City"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="State"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Zip or Postal code"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Country"
      />
      <button className="btn btn-outline mt-3" type="button">Save</button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <p className="pb-2">Save your address for future transactions.</p>

      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="First Name"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Email"
      />
      <div className="phone number">
        <select
          name="phone-prefix"
          id="select-phone-prefix"
          className="select select-bordered max-w-xs"
        >
          {PREFIX_OPTIONS.map(prefixOption => (
            <option key={prefixOption} value={prefixOption}>
              {prefixOption}
            </option>
          ))}
        </select>
        <input
          className="input input-bordered max-w-xs"
          type="text"
          placeholder="Phone number"
        />
      </div>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Address 1"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Address 2"
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="City"
      />
      <select
        name="states"
        id="select-state"
        className="select select-bordered w-full max-w-xs"
      >
        {STATES_OPTIONS.map((stateOption, index) => (
          <option key={index} value={stateOption}>
            {stateOption}
          </option>
        ))}
      </select>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Zip or Postal code"
      />
      <select
        name="countries"
        id="select-country"
        className="select select-bordered w-full max-w-xs"
      >
        {COUNTRY_OPTIONS.map(countryOption => (
          <option key={countryOption} value={countryOption}>
            {countryOption}
          </option>
        ))}
      </select>
      <button className="btn btn-outline mt-3" type="button">Save</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Search</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter question..." />
      <button className="btn btn-outline mt-3" type="button">Search</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Subscribe to our newsletters!</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter email" />
      <button className="btn btn-outline mt-3" type="button">Submit</button>
    </form>
    <form className="flex flex-col items-start ml-3">
      <p className="pb-2">Enter code from email to enter your account.</p>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Activation code" />
      <button className="btn btn-outline mt-3" type="button">Get access</button>
    </form>
    <form className="flex items-center justify-center mt-3 flex-col">
      <fieldset className="TotpInput__loginFieldset flex items-center justify-center mt-3 flex-col">
        <label className="TotpInput__loginTextFieldLabel text-4xl mb-3 mt-3"> Enter code from your mobile authenticator app: </label>
        <div className="TotpInput__totpInputContainer flex justify-around w-[300px]">
          <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
          <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
          <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
          <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
          <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
          <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
        </div>
      </fieldset>
      <button className="btn btn-outline mt-3 w-[15%]" type="button">Submit</button>
    </form>
    <form className="gl-show-field-errors js-2fa-form flex items-center justify-center mt-3 flex-col" aria-live="assertive" action="/users/sign_in" accept-charset="UTF-8" method="post">
      <input type="hidden" name="authenticity_token" value="b7NGhc4zZ4o6OsmTX7e_tdLsFoI92Vrqbv410JjU2miRg-bVxyyetxKk7zG6ij-V3528_j6wfJ681mU-U95VQQ" autoComplete="off" />
      <div className="form-group flex justify-around w-[500px] flex-col">
        <label htmlFor="user_otp_attempt" className="text-4xl mb-2">Enter verification code</label>
        <input className="form-control gl-form-input input input-bordered" title="This field is required." data-testid="two-fa-code-field" type="text" name="user[otp_attempt]" id="user_otp_attempt" />
        <p className="gl-field-error hidden">This field is required.</p>
        <p className="form-text text-muted hint mt-4">
          Enter the code from your two-factor authenticator app.
          If you've lost your device, you can enter one of your recovery codes.
        </p>
        <input value="0" autoComplete="off" type="hidden" name="user[remember_me]" id="user_remember_me" />
      </div>
      <button data-testid="verify-code-button" type="submit" className="btn btn-outline mt-3 w-[7%]">
        <span className="gl-button-text"> Verify code </span>
      </button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Enter email to sign in or sign up!</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter email" />
      <button className="btn btn-outline mt-3" type="button">Login/Register</button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <p className="pb-2">Enter your credentials to login into your corporate account.</p>

      <input
        id="email"
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Login email"
      />
      <input
        id="loginPassword"
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <input
        id="companyID"
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Company ID"
      />
      <button
        className="btn btn-outline mt-3"
        type="button"
      >
        Sign In
      </button>
    </form>
    <form className="flex flex-col items-start mt-3">

      <p className="pb-2">Enter your credentials to login into your corporate account.</p>

      <input
        id="email"
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Email"
      />
      <input
        id="loginPassword"
        className="input input-bordered w-full max-w-xs"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <input
        id="companyID"
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Company ID"
      />
      <input
        id="website"
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Website"
      />
      <button className="btn btn-outline mt-3" type="button">Sign In</button>
    </form>
    <form className="flex flex-col items-start mt-3">
      <h1 className="text-4xl mt-3">Checkout Form</h1>

      <section className="flex flex-col items-start mt-3">
        <p className="pb-2">To finish buying the product - enter your credentials.</p>

        <h1 className="text-3xl mb-3">Credit Card</h1>
        <label htmlFor="ccFullName">Name on Card</label>
        <input
          id="ccFullName"
          className="input input-bordered w-full max-w-xs"
          type="text"
        />
        <label htmlFor="ccNumber">Credit card number</label>
        <input
          id="ccNumber"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
          placeholder="0000 0000 0000 0000"
        />
        <label htmlFor="ccExpirationFull">Expiration Date</label>
        <input
          id="ccExpirationFull"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
          placeholder="MM/YY"
        />
        <label htmlFor="ccCVV">Security Code</label>
        <input
          id="ccCVV"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
          placeholder="000"
        />
        <label htmlFor="ccZipCode">Zip Code</label>
        <input
          id="ccZipCode"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
        />
      </section>

      <section className="flex flex-col items-start mt-3">
        <h1 className="text-3xl mb-3">Billing & Shipping Address</h1>

        <p className="pb-2">We will send your delivery directly to the address.</p>

        <label htmlFor="select-country">Country</label>
        <select
          name="countries"
          id="select-country"
          className="select select-bordered w-full max-w-xs"
        >
          {COUNTRY_OPTIONS.map((countryOption, index) => (
            <option key={index} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
        <label htmlFor="city">City</label>
        <input
          id="city"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
        />
        <label htmlFor="address">Street Address</label>
        <input
          id="address"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
        />
        <label htmlFor="address2">Apt/Suite/Other (Optional)</label>
        <input
          id="address2"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
        />
        <label htmlFor="billingZipCode">Zip or Postal Code</label>
        <input
          id="billingZipCode"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
        />
        <label htmlFor="billingFullName">Full Name</label>
        <input
          id="billingFullName"
          className="input input-bordered w-full max-w-xs mb-1"
          type="text"
        />
      </section>
      <button className="btn btn-outline mt-3" type="button">Submit checkout</button>
    </form>
  </div>
);
