export const TwoLogin = () => (
  <div className='ml-6'>
    <form className="flex flex-col items-start mt-3">
      <p className="text-xl">First Login Form</p>

      <h1 className="text-4xl mb-3 mt-3">Login</h1>
      <label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email Address/Username"
        />
      </label>
      <label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </label>
      <button
        className="btn btn-outline mt-3"
        type="button"
      >Sign In</button>
    </form>

    <p className="text-xl mt-3">Second Login Form</p>

    <form className="flex flex-col items-start mt-3">
      <h1 className="text-4xl mb-3">Login</h1>
      <label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email Address/Username"
        />
      </label>
      <label>
        <input
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </label>
      <button
        className="btn btn-outline mt-3"
        type="button"
      >Sign In</button>
    </form>
  </div>
);