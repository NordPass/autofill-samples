export const TOTP = () => (
  <div className="card w-full max-w-md mx-auto bg-base-300 shadow-xl card-body">
    <form className="flex flex-col items-center">
      <label className="card-title text-2xl font-bold mb-3 text-base-content">Two-Factor Authentication Code</label>
      <p className="text-center mb-6 text-base-content/70">Please enter the 6-digit code from your authenticator app</p>

      <div className="flex justify-between w-full max-w-xs gap-2 mb-6">
        <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center text-xl" />
        <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center text-xl" />
        <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center text-xl" />
        <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center text-xl" />
        <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center text-xl" />
        <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input size-10 text-center text-xl" />
      </div>

      <button
        className="btn btn-primary w-full max-w-xs"
        type="submit"
        onClick={event => event.preventDefault()}
      >
        Submit
      </button>
    </form>
  </div>
);
