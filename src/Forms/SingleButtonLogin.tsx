import { ToastContainer } from 'react-toastify';
import { successToast } from '../utils/toasts';

interface IProps {
  hasSecondButton?: boolean;
}

// The arrow button has no submit-like text, so ML is not expected to detect it as a submit button.
// Instant login should then click it when it is the form's only button, or fall back to `form.submit()` with POST.
export const SingleButtonLogin = ({ hasSecondButton = false }: IProps) => (
  <div className="ml-3 justify-items-start">
    {/* The text lives inside the form: a form with under 25 characters of text is rejected and the whole page is analyzed. */}
    <form className="flex flex-col items-start mt-3">
      <h1 className="text-4xl">{hasSecondButton ? 'Two Buttons Login' : 'Single Button Login'}</h1>
      <p className="pt-2">
        {hasSecondButton
          ? 'Instant login should fall back to form.submit() with POST, which navigates away from this page.'
          : 'Instant login should click the arrow, as it is the only button.'}
      </p>

      <input id="email" className="input w-full max-w-xs" type="text" placeholder="Email" autoComplete="username" />
      <input
        id="password"
        className="input w-full max-w-xs"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <div className="flex gap-2 mt-3">
        {hasSecondButton && (
          <button className="btn btn-outline" type="button">
            Cancel
          </button>
        )}
        <div
          className="btn btn-outline"
          role="button"
          tabIndex={0}
          onClick={successToast}
          onKeyDown={event => event.key === 'Enter' && successToast()}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
      <ToastContainer />
    </form>
  </div>
);
