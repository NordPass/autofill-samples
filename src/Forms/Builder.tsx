import React, { useRef, useState } from 'react';

interface ICustomInput {
  label?: string;
  placeholder?: string;
  type: 'text' | 'hidden';
}

export const Builder = () => {
  const [customInputs, setCustomInputs] = useState<Array<ICustomInput>>([]);
  const inputFormValue = useRef<HTMLInputElement>(null);
  const hiddenValue = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3" style={{ justifyItems: 'left' }}>
      <input
        className="input input-bordered w-full max-w-xs mt-2"
        type="text"
        placeholder="Type input value..."
        ref={inputFormValue}
      />
      <div className="flex mt-2">
        Hidden
        {' '}
        <input type="checkbox" className="checkbox ml-2" ref={hiddenValue} />
      </div>
      <button
        className="btn btn-outline mt-2 btn-primary"
        type="button"
        onClick={() => {
          setCustomInputs([...customInputs, { label: inputFormValue.current?.value, placeholder: inputFormValue.current?.value, type: hiddenValue.current?.checked ? 'hidden' : 'text' }]);
        }}
      >
        Create Custom Input
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'naruto.uzumaki@gmail.com';
          password.current!.value = '12345';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'brucewayne33112@gmail.com';
          password.current!.value = 'alfredthebutler123';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          username.current!.value = 'dragonBorn33112@gmail.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
        }}
      >
        FIll in (Dragonborn)
      </button>

      <h1 className="text-4xl pt-2">Builder Form</h1>

      <form className="flex flex-col items-start mt-3">
        <input
          ref={username}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email Address or Username"
        />
        <input
          ref={password}
          className="input input-bordered w-full max-w-xs"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        {customInputs.map((customInput, key) => (
          <React.Fragment key={key}>
            <input
              id={customInput.label}
              className="input input-bordered w-full max-w-xs mt-1"
              type={customInput.type}
              placeholder={customInput.placeholder}
            />
          </React.Fragment>
        ))}

        <div className="mt-3">
          <button
            className="btn btn-outline mr-3"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
            }}>
            Submit
          </button>
          <button
            className="btn btn-outline"
            type="button"
            onClick={() => {
              setCustomInputs([]);
              inputFormValue.current!.value = '';
              username.current!.value = '';
              password.current!.value = '';
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
