export const OneTimePassword = () => (
  <form className="flex flex-col items-start ml-6">
    <h1 className="text-4xl mb-3">Enter code from email</h1>
    <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Activation code" />
    <button className="btn btn-outline mt-3" type="button">Get access</button>
  </form>
);
