import { type FormEvent, useRef, useState } from 'react';

// `#` takes a digit; any other character is printed as is, and a literal digit also takes a matching typed digit,
// so `+1 (###) ###-####` accepts both 15551234567 and 5551234567. Reformats on input like IMask or Inputmask.
const PHONE_MASKS = Object.freeze({
  none: '',
  national: '(###) ###-####',
  withCountryCode: '+1 (###) ###-####',
} as const);

type TPhoneMask = keyof typeof PHONE_MASKS;

const formatPhone = (value: string, pattern: string) => {
  const digits = [...value.replaceAll(/\D/g, '')];
  let formatted = '';

  for (const char of pattern) {
    if (!digits.length) {
      break;
    }

    if (char === '#') {
      formatted += digits.shift();
    } else {
      if (/\d/.test(char) && digits[0] === char) {
        digits.shift();
      }

      formatted += char;
    }
  }

  return formatted;
};

export const PersonalInfo = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const address1 = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const zip = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const [phoneMask, setPhoneMask] = useState<TPhoneMask>('none');

  const onPhoneInput = (event: FormEvent<HTMLInputElement>) => {
    const pattern = PHONE_MASKS[phoneMask];

    if (pattern) {
      event.currentTarget.value = formatPhone(event.currentTarget.value, pattern);
    }
  };

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Naruto';
          lastName.current!.value = 'Uzumaki';
          email.current!.value = 'naruto.uzumaki@gmail.com';
          phoneNumber.current!.value = '+817046679531';
          address1.current!.value = '';
          address2.current!.value = '';
          city.current!.value = 'Konohagakure';
          state.current!.value = 'Okayama';
          zip.current!.value = '';
          country.current!.value = 'Japan';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Bruce';
          lastName.current!.value = 'Wayne';
          email.current!.value = 'brucewayne33112@gmail.com';
          phoneNumber.current!.value = '+14722377744';
          address1.current!.value = 'Batcave';
          address2.current!.value = 'Wayne Manor';
          city.current!.value = 'Gotham';
          state.current!.value = 'New Jersey';
          zip.current!.value = '60035';
          country.current!.value = 'USA';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          firstName.current!.value = 'General';
          lastName.current!.value = 'Tullius';
          email.current!.value = 'dragonBorn33112@gmail.com';
          phoneNumber.current!.value = '+4759884549';
          address1.current!.value = '24 Louises gate';
          address2.current!.value = '';
          city.current!.value = 'Oslo';
          state.current!.value = 'Oslo';
          zip.current!.value = '0169';
          country.current!.value = 'Norway';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          firstName.current!.value = '';
          lastName.current!.value = '';
          email.current!.value = '';
          phoneNumber.current!.value = '';
          address1.current!.value = '';
          address2.current!.value = '';
          city.current!.value = '';
          state.current!.value = '';
          zip.current!.value = '';
          country.current!.value = '';
        }}
      >
        Clear
      </button>
      <label className="ml-3">
        Phone mask:{' '}
        <select
          className="select select-bordered select-sm"
          value={phoneMask}
          onChange={event => {
            setPhoneMask(event.target.value as TPhoneMask);
            phoneNumber.current!.value = '';
          }}
        >
          <option value="none">None</option>
          <option value="national">{PHONE_MASKS.national}</option>
          <option value="withCountryCode">{PHONE_MASKS.withCountryCode}</option>
        </select>
      </label>

      <h1 className="text-4xl mt-3">Personal Info Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Save your credentials for future transactions.</p>

        <input
          ref={firstName}
          className="input w-full max-w-xs"
          type="text"
          placeholder="First Name"
        />
        <input
          ref={lastName}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Last Name"
        />
        <input ref={email} className="input w-full max-w-xs" type="text" placeholder="Email" />
        <input
          ref={phoneNumber}
          className="input w-full max-w-xs"
          type="text"
          placeholder={PHONE_MASKS[phoneMask] || 'Phone number'}
          onInput={onPhoneInput}
        />
        <input
          ref={address1}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Address 1"
        />
        <input
          ref={address2}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Address 2"
        />
        <input ref={city} className="input w-full max-w-xs" type="text" placeholder="City" />
        <input ref={state} className="input w-full max-w-xs" type="text" placeholder="State" />
        <input
          ref={zip}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Zip or Postal code"
        />
        <input ref={country} className="input w-full max-w-xs" type="text" placeholder="Country" />
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Save
        </button>
      </form>
    </div>
  );
};
