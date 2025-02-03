export const TwoLogin = () => (
  <div className="ml-6">

    <h1 className="text-xl">First Login Form</h1>

    <form className="flex flex-col items-start mt-3">

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

    <p className="text-xl mt-3">Second Login Form</p>

    <form className="flex flex-col items-start mt-3">
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
  </div>
);
