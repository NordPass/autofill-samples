export const OneTimePassword = () => (
  <>
    <h1 className="text-4xl ml-6 mb-2">OTP Form</h1>

    <form className="flex flex-col items-start ml-6">
      <p className="pb-2">Enter code from email to enter your account.</p>

      <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Activation code" />
      <button className="btn btn-outline mt-3" type="button">Get access</button>
    </form>
  </>
);
