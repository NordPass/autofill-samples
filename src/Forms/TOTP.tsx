export const TOTP = () => (
  <form className="flex items-center justify-center mt-3 flex-col">
    <h1 className="text-4xl mb-3 mt-3">Enter your code</h1>
    <p className="mb-3">Enter the 6-digit security code from your authenticator app.</p>

    <div className="flex justify-around w-[300px]">
      <input className="input input-bordered w-[40px]" maxLength={1} />
      <input className="input input-bordered w-[40px]" maxLength={1} />
      <input className="input input-bordered w-[40px]" maxLength={1} />
      <input className="input input-bordered w-[40px]" maxLength={1} />
      <input className="input input-bordered w-[40px]" maxLength={1} />
      <input className="input input-bordered w-[40px]" maxLength={1} />
    </div>

    <button className="btn btn-outline mt-3 w-[15%]" type="button">Submit</button>
  </form>
);