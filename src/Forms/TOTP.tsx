export const TOTP = () => (
  <form className="flex items-center justify-center mt-3 flex-col">
    <label className="text-4xl mb-3 mt-3">Two-Factor Authentication Code</label>
    <p className="text-lg mb-3 text-gray-600">Please enter the 6-digit code from your authenticator app</p>
    <div className="flex justify-around w-[300px]">
      <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input input-bordered w-[40px]" />
      <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input input-bordered w-[40px]" />
      <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input input-bordered w-[40px]" />
      <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input input-bordered w-[40px]" />
      <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input input-bordered w-[40px]" />
      <input type="text" autoComplete="off" maxLength={1} className="keeper-ignore input input-bordered w-[40px]" />
    </div>
    <button
      className="btn btn-outline mt-3 w-[15%]"
      type="submit"
      onClick={event => event.preventDefault()}
    >
      Submit
    </button>
  </form>
);
