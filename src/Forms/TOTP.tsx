export const TOTP = () => (
  <form className="flex items-center justify-center mt-3 flex-col">
    <fieldset className="TotpInput__loginFieldset flex items-center justify-center mt-3 flex-col">
      <label className="TotpInput__loginTextFieldLabel text-4xl mb-3 mt-3"> Enter code from your mobile authenticator app: </label>
      <div className="TotpInput__totpInputContainer flex justify-around w-[300px]">
        <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
        <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
        <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
        <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
        <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
        <input type="text" autoComplete="off" maxLength={1} className="TotpInput__loginInput keeper-ignore input input-bordered w-[40px]" />
      </div>
    </fieldset>
    <button
      className="btn btn-outline mt-3 w-[15%]"
      type="submit"
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      Submit
    </button>
  </form>
);
