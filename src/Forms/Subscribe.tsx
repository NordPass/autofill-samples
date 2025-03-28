import { useRef } from 'react';

export const Subscribe = () => {
  const emailInput = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => { emailInput.current!.value = 'naruto.uzumaki@gmail.com'; }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => { emailInput.current!.value = 'brucewayne33112@gmail.com'; }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => { emailInput.current!.value = 'dragonBorn33112@gmail.com'; }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => { emailInput.current!.value = ''; }}
      >
        Clear
      </button>

      <h1 className="text-4xl mt-3">Subscription Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p>Subscribe to our newsletters!</p>
        <p className="pb-2">Enter your email to be receive updates.</p>

        <input
          ref={emailInput}
          className="input w-full max-w-xs"
          type="email"
          placeholder="Enter email"
        />
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
