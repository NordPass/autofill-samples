export const TOTPOneField = () => (
  <form className="gl-show-field-errors js-2fa-form flex items-center justify-center mt-3 flex-col" aria-live="assertive" action="/users/sign_in" accept-charset="UTF-8" method="post">
    <input type="hidden" name="authenticity_token" value="b7NGhc4zZ4o6OsmTX7e_tdLsFoI92Vrqbv410JjU2miRg-bVxyyetxKk7zG6ij-V3528_j6wfJ681mU-U95VQQ" autoComplete="off" />
    <div className="form-group flex justify-around w-[500px] flex-col">
      <label htmlFor="user_otp_attempt" className="text-4xl mb-2">Enter verification code</label>
      <input className="form-control gl-form-input input input-bordered" title="This field is required." data-testid="two-fa-code-field" type="text" name="user[otp_attempt]" id="user_otp_attempt" />
      <p className="gl-field-error hidden">This field is required.</p>
      <p className="form-text text-muted hint mt-4">
        Enter the code from your two-factor authenticator app.
        If you've lost your device, you can enter one of your recovery codes.
      </p>
      <input value="0" autoComplete="off" type="hidden" name="user[remember_me]" id="user_remember_me" />
    </div>
    <button data-testid="verify-code-button" type="submit" className="btn btn-outline mt-3 w-[7%]">
      <span className="gl-button-text"> Confirm </span>
    </button>
  </form>
);