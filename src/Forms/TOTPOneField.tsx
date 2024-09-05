export const TOTPOneField = () => (
  <form className="flex items-center justify-center mt-3 flex-col">
    <h1 className="text-4xl mb-3 mt-3">Enter your code</h1>
    <p className="mb-3">Enter the 6-digit code from your authenticator app.</p>

    <div className="flex justify-around w-[300px]">
      <input className="input input-bordered"/>
    </div>

    <button className="btn btn-outline mt-3 w-[7%]" type="button">Submit</button>
  </form>
);