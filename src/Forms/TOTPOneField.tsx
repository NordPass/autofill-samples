export const TOTPOneField = () => (
  <form className="flex items-center justify-center mt-3 flex-col">
    <div className="flex justify-around w-[500px] flex-col items-center">
      <label htmlFor="user_otp_attempt" className="text-4xl mb-2">Enter verification code</label>
      <input className="input" title="This field is required." data-testid="two-fa-code-field" type="text" name="user[otp_attempt]" id="user_otp_attempt" />
      <p className="hidden">This field is required.</p>
      <p className="text-muted hint mt-4">
        Enter the code from your two-factor authenticator app.
        If you've lost your device, you can enter one of your recovery codes.
      </p>
      <input value="0" autoComplete="off" type="hidden" name="user[remember_me]" id="user_remember_me" />
    </div>
    <button
      data-testid="verify-code-button"
      type="submit"
      className="btn btn-outline mt-3 w-[7%]"
      onClick={event => event.preventDefault()}
    >
      Confirm
    </button>
  </form>
);
