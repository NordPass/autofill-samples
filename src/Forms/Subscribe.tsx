import { useRef } from 'react';

export const Subscribe = () => {
  const emailInput = useRef<HTMLInputElement>(null);

  return (
    <div className='ml-6'>
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
      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mb-3">Subscribe to our newsletters!</h1>
        <input
          ref={emailInput}
          className="input input-bordered w-full max-w-xs"
          type="email"
          placeholder="Enter email"
        />
        <button className="btn btn-outline mt-3" type="button">Submit</button>
      </form>
    </div>
  );
};
