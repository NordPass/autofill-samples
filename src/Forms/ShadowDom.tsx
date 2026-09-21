import type { ReactNode } from 'react';
import { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';

// Tailwind/daisyUI styles live in the document and do not cross the shadow
// boundary, so every shadow root gets its own copy of these styles.
const SHADOW_STYLES = `
  :host { display: block; }
  .shadow-form { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; }
  .shadow-form label { display: flex; flex-direction: column; gap: 2px; font-size: 14px; }
  .shadow-form input {
    border: 1px solid currentColor;
    border-radius: 6px;
    padding: 8px;
    width: 260px;
    background: transparent;
    color: inherit;
  }
  .shadow-form button {
    border: 1px solid currentColor;
    border-radius: 6px;
    padding: 8px 16px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
  .shadow-form button:hover { opacity: 0.7; }
`;

interface ShadowRootHostProps {
  children: ReactNode;
  mode?: ShadowRootMode;
  className?: string;
}

const ShadowRootHost = ({ mode = 'open', className, children }: ShadowRootHostProps) => {
  const shadowRootRef = useRef<ShadowRoot | null>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  const attachShadowRoot = useCallback((host: HTMLDivElement | null) => {
    if (!host) {
      return;
    }

    // A closed root is not exposed as host.shadowRoot, so it is remembered in a
    // ref to survive the StrictMode remount without a second attachShadow call.
    if (!shadowRootRef.current) {
      shadowRootRef.current = host.shadowRoot ?? host.attachShadow({ mode });

      const style = document.createElement('style');
      style.textContent = SHADOW_STYLES;
      shadowRootRef.current.append(style);
    }

    setShadowRoot(shadowRootRef.current);
  }, [mode]);

  return (
    <div ref={attachShadowRoot} className={className}>
      {shadowRoot && createPortal(children, shadowRoot)}
    </div>
  );
};

interface ShadowLoginFormProps {
  idPrefix: string;
}

const ShadowLoginForm = ({ idPrefix }: ShadowLoginFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="shadow-form"
      onSubmit={(event) => {
        event.preventDefault();

        if (emailRef.current?.value === 'error@gmail.com') {
          errorToast();

          return;
        }
        successToast();
      }}
    >
      <label htmlFor={`${idPrefix}-email`}>
        <span>Email</span>
        <input
          id={`${idPrefix}-email`}
          ref={emailRef}
          name="email"
          type="text"
          placeholder="Email Address/Username"
          autoComplete="username"
        />
      </label>
      <label htmlFor={`${idPrefix}-password`}>
        <span>Password</span>
        <input
          id={`${idPrefix}-password`}
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export const ShadowDom = () => (
  <div className="ml-3 justify-items-start">
    <h1 className="text-4xl mt-3">Shadow DOM Forms</h1>
    <p className="pb-2 mt-2">Each form below is rendered inside its own shadow root.</p>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
      <div>
        <h2 className="text-2xl mb-2">Open shadow root</h2>
        <p className="pb-2">Reachable from the page through host.shadowRoot.</p>
        <ShadowRootHost>
          <ShadowLoginForm idPrefix="open" />
        </ShadowRootHost>
      </div>

      <div>
        <h2 className="text-2xl mb-2">Closed shadow root</h2>
        <p className="pb-2">host.shadowRoot is null, so the form is invisible to page scripts.</p>
        <ShadowRootHost mode="closed">
          <ShadowLoginForm idPrefix="closed" />
        </ShadowRootHost>
      </div>

      <div>
        <h2 className="text-2xl mb-2">Nested shadow roots</h2>
        <p className="pb-2">A shadow root inside another shadow root, two levels deep.</p>
        <ShadowRootHost>
          <ShadowRootHost>
            <ShadowLoginForm idPrefix="nested" />
          </ShadowRootHost>
        </ShadowRootHost>
      </div>
    </div>

    <ToastContainer />
  </div>
);
