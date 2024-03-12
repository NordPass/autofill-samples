import { isMobile } from "react-device-detect";

export const AllForms = () => (
  <div className={`flex flex-wrap justify-around ${isMobile && 'text-center'}`}>
    <form className="flex text-center flex-col">
      <h1 className="text-4xl mb-3">Login</h1>
      <label>
        <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email Address/Username" />
      </label>
      <label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </label>
      <button className="btn btn-outline mt-3" type="button">Sign In</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Register</h1>
      <label>
        <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email Address/Username" />
      </label>
      <label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
      </label>
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
      <label>
        <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email Address" />
      </label>
      <button className="btn btn-outline mt-3" type="button">Get Password</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Change Email</h1>
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Current email" />
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="New Email" />
      <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Repeat New Email" />
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
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Enter code from email</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Activation code" />
      <button className="btn btn-outline mt-3" type="button">Get access</button>
    </form>
    <form className="flex items-center flex-col">
      <h1 className="text-4xl mb-3">Enter email to sign in or sign up!</h1>
      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter email" />
      <button className="btn btn-outline mt-3" type="button">Login/Register</button>
    </form>
  </div>
);
