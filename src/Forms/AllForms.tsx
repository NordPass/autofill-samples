import { COUNTRY_OPTIONS, PREFIX_OPTIONS, STATES_OPTIONS } from '../utils/constants';

export const AllForms = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Login Form */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <input className="input w-full mb-3" type="text" placeholder="Email Address/Username" />
        <input
          className="input w-full mb-4"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Sign In
        </button>
      </form>

      {/* Login with welcome message */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="text-xl font-semibold mb-1">Welcome!</p>
        <p className="mb-4">Enter your credentials to login.</p>

        <input
          className="input w-full mb-3"
          type="text"
          placeholder="Email Address/Username"
        />
        <input
          className="input w-full mb-4"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Sign In
        </button>
      </form>

      {/* Phone login form */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="text-xl font-semibold mb-1">Welcome!</p>
        <p className="mb-4">Enter your credentials to login.</p>

        <input
          className="input w-full mb-3"
          type="text"
          placeholder="Phone number"
        />
        <input
          className="input w-full mb-4"
          type="text"
          placeholder="Code from phone"
        />
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Sign In
        </button>
      </form>

      {/* Register Form */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <input className="input w-full mb-3" type="text" placeholder="Email Address/Username" />
        <input
          className="input w-full mb-4"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Sign Up
        </button>
      </form>

      {/* Change Password */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Change Password</h1>
        <input className="input w-full mb-3" type="password" placeholder="Current password" />
        <input className="input w-full mb-3" type="password" placeholder="New Password" />
        <input className="input w-full mb-4" type="password" placeholder="Repeat New Password" />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Change Password
        </button>
      </form>

      {/* Forgot Password */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
        <input className="input w-full mb-4" type="text" placeholder="Email Address" />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Get Password
        </button>
      </form>

      {/* Change Email centered */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Change Email</h1>
        <input className="input w-full mb-3" type="password" placeholder="Current email" />
        <input className="input w-full mb-3" type="password" placeholder="New Email" />
        <input className="input w-full mb-4" type="password" placeholder="Repeat New Email" />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Change Email
        </button>
      </form>

      {/* Change Email with instructions */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="mb-1">To change your email,</p>
        <p className="mb-4">
          enter your
          <b> new email </b>
          and then your
          <b> password</b>
          .
        </p>

        <input
          className="input w-full mb-3"
          type="email"
          placeholder="New Email"
        />
        <input
          className="input w-full mb-4"
          type="password"
          placeholder="Enter password"
        />
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Change Email
        </button>
      </form>

      {/* Credit Card */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Credit Card</h1>
        <input className="input w-full mb-3" type="text" placeholder="Full Name" />
        <input className="input w-full mb-3" type="text" placeholder="CC number" />
        <input className="input w-full mb-3" type="text" placeholder="MM/YY" />
        <input className="input w-full mb-4" type="text" placeholder="CVV" />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Submit Credit Card
        </button>
      </form>

      {/* Personal Info */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Personal Info</h1>
        <div className="w-full space-y-3 mb-4">
          <input className="input w-full" type="text" placeholder="First Name" />
          <input className="input w-full" type="text" placeholder="Last Name" />
          <input className="input w-full" type="text" placeholder="Email" />
          <input className="input w-full" type="text" placeholder="Phone number" />
          <input className="input w-full" type="text" placeholder="Address 1" />
          <input className="input w-full" type="text" placeholder="Address 2" />
          <input className="input w-full" type="text" placeholder="City" />
          <input className="input w-full" type="text" placeholder="State" />
          <input className="input w-full" type="text" placeholder="Zip or Postal code" />
          <input className="input w-full" type="text" placeholder="Country" />
        </div>
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Save
        </button>
      </form>

      {/* Personal credentials */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col col-span-1 lg:col-span-2">
        <p className="mb-4">Save your credentials for future transactions.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <input
            className="input w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Email"
          />
          <div className="flex items-center space-x-2">
            <input
              className="input w-20"
              type="text"
              name="phonePrefix"
              placeholder="Prefix"
            />
            <input
              className="input w-20"
              type="text"
              name="phoneArea"
              placeholder="(Area)"
            />
            <input
              className="input flex-1"
              type="text"
              placeholder="Phone number"
            />
            <span>Ext:</span>
            <input
              className="input w-[70px]"
              type="text"
              name="phoneExtension"
            />
          </div>
          <input
            className="input w-full"
            type="text"
            placeholder="Address 1"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Address 2"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="State"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Zip or Postal code"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Save
        </button>
      </form>

      {/* Address form with dropdowns */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="mb-4">Save your address for future transactions.</p>

        <div className="space-y-3 mb-4">
          <input
            className="input w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Email"
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              name="phone-prefix"
              id="select-phone-prefix"
              className="select select-bordered flex-none"
            >
              {PREFIX_OPTIONS.map(prefixOption => (
                <option key={prefixOption} value={prefixOption}>
                  {prefixOption}
                </option>
              ))}
            </select>
            <input
              className="input flex-1"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <input
            className="input w-full"
            type="text"
            placeholder="Address 1"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="Address 2"
          />
          <input
            className="input w-full"
            type="text"
            placeholder="City"
          />
          <select
            name="states"
            id="select-state"
            className="select select-bordered w-full"
          >
            {STATES_OPTIONS.map(stateOption => (
              <option key={stateOption} value={stateOption}>
                {stateOption}
              </option>
            ))}
          </select>
          <input
            className="input w-full"
            type="text"
            placeholder="Zip or Postal code"
          />
          <select
            name="countries"
            id="select-country"
            className="select select-bordered w-full"
          >
            {COUNTRY_OPTIONS.map(countryOption => (
              <option key={countryOption} value={countryOption}>
                {countryOption}
              </option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Save
        </button>
      </form>

      {/* Search form */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Search</h1>
        <input className="input w-full mb-4" type="text" placeholder="Enter question..." />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Search
        </button>
      </form>

      {/* Newsletter */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Subscribe to our newsletters!</h1>
        <input className="input w-full mb-4" type="text" placeholder="Enter email" />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Submit
        </button>
      </form>

      {/* Activation code */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="mb-4">Enter code from email to enter your account.</p>
        <input className="input w-full mb-4" type="text" placeholder="Activation code" />
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Get access
        </button>
      </form>

      {/* Mobile authenticator code */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <fieldset className="w-full flex flex-col items-center">
          <label className="text-xl font-semibold mb-4">Enter code from your mobile authenticator app:</label>
          <div className="flex justify-around w-full max-w-xs mb-4">
            <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center" />
            <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center" />
            <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center" />
            <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center" />
            <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center" />
            <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center" />
          </div>
        </fieldset>
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Submit
        </button>
      </form>

      {/* 2FA Verification */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <div className="mb-4">
          <label htmlFor="user_otp_attempt" className="block text-xl font-semibold mb-2">Enter verification code</label>
          <input className="input w-full" title="This field is required." data-testid="two-fa-code-field" type="text" name="user[otp_attempt]" id="user_otp_attempt" />
          <p className="hidden">This field is required.</p>
          <p className="text-muted hint mt-2 text-sm">
            Enter the code from your two-factor authenticator app.
            If you've lost your device, you can enter one of your recovery codes.
          </p>
          <input value="0" autoComplete="off" type="hidden" name="user[remember_me]" id="user_remember_me" />
        </div>
        <button data-testid="verify-code-button" type="submit" className="btn btn-neutral">
          Verify code
        </button>
      </form>

      {/* Login or Signup */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Enter email to sign in or sign up!</h1>
        <input className="input w-full mb-4" type="text" placeholder="Enter email" />
        <button
          className="btn btn-neutral w-full"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Login/Register
        </button>
      </form>

      {/* Corporate login */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="mb-4">Enter your credentials to login into your corporate account.</p>

        <div className="space-y-3 mb-4">
          <input
            id="email"
            className="input w-full"
            type="text"
            placeholder="Login email"
          />
          <input
            id="loginPassword"
            className="input w-full"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <input
            id="companyID"
            className="input w-full"
            type="text"
            placeholder="Company ID"
          />
        </div>
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Sign In
        </button>
      </form>

      {/* Corporate login with website */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col">
        <p className="mb-4">Enter your credentials to login into your corporate account.</p>

        <div className="space-y-3 mb-4">
          <input
            id="email"
            className="input w-full"
            type="text"
            placeholder="Email"
          />
          <input
            id="loginPassword"
            className="input w-full"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <input
            id="companyID"
            className="input w-full"
            type="text"
            placeholder="Company ID"
          />
          <input
            id="website"
            className="input w-full"
            type="text"
            placeholder="Website"
          />
        </div>
        <button
          className="btn btn-neutral"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Sign In
        </button>
      </form>

      {/* Checkout Form */}
      <form className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col col-span-1 lg:col-span-3">
        <h1 className="text-3xl font-bold mb-4">Checkout Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <p className="mb-4">To finish buying the product - enter your credentials.</p>

            <h2 className="text-2xl font-semibold mb-3">Credit Card</h2>
            <div className="space-y-3">
              <div>
                <label htmlFor="ccFullName" className="block text-sm mb-1">Name on Card</label>
                <input
                  id="ccFullName"
                  className="input w-full"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="ccNumber" className="block text-sm mb-1">Credit card number</label>
                <input
                  id="ccNumber"
                  className="input w-full"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div>
                <label htmlFor="ccExpirationFull" className="block text-sm mb-1">Expiration Date</label>
                <input
                  id="ccExpirationFull"
                  className="input w-full"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="ccCVV" className="block text-sm mb-1">Security Code</label>
                <input
                  id="ccCVV"
                  className="input w-full"
                  type="text"
                  placeholder="000"
                />
              </div>
              <div>
                <label htmlFor="ccZipCode" className="block text-sm mb-1">Zip Code</label>
                <input
                  id="ccZipCode"
                  className="input w-full"
                  type="text"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Billing & Shipping Address</h2>
            <p className="mb-4">We will send your delivery directly to the address.</p>

            <div className="space-y-3">
              <div>
                <label htmlFor="select-country" className="block text-sm mb-1">Country</label>
                <select
                  name="countries"
                  id="select-country"
                  className="select select-bordered w-full"
                >
                  {COUNTRY_OPTIONS.map(countryOption => (
                    <option key={countryOption} value={countryOption}>
                      {countryOption}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm mb-1">City</label>
                <input
                  id="city"
                  className="input w-full"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm mb-1">Street Address</label>
                <input
                  id="address"
                  className="input w-full"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="address2" className="block text-sm mb-1">Apt/Suite/Other (Optional)</label>
                <input
                  id="address2"
                  className="input w-full"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="billingZipCode" className="block text-sm mb-1">Zip or Postal Code</label>
                <input
                  id="billingZipCode"
                  className="input w-full"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="billingFullName" className="block text-sm mb-1">Full Name</label>
                <input
                  id="billingFullName"
                  className="input w-full"
                  type="text"
                />
              </div>
            </div>
          </section>
        </div>
        <button
          className="btn btn-neutral mt-6"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Submit checkout
        </button>
      </form>
    </div>
  </div>
);
