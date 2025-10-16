import { useRef } from 'react';
import { COUNTRY_OPTIONS, PREFIX_OPTIONS, STATES_OPTIONS } from '../utils/constants';

export const PersonalInfoSelects = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phonePrefix = useRef<HTMLSelectElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const address1 = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLSelectElement>(null);
  const zip = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Naruto';
          lastName.current!.value = 'Uzumaki';
          email.current!.value = 'naruto.uzumaki@gmail.com';
          phonePrefix.current!.value = '+81';
          phoneNumber.current!.value = '7046679531';
          address1.current!.value = '';
          address2.current!.value = '';
          city.current!.value = 'Konohagakure';
          state.current!.value = 'Idaho';
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
          phonePrefix.current!.value = '+1';
          phoneNumber.current!.value = '4722377744';
          address1.current!.value = 'Batcave';
          address2.current!.value = 'Wayne Manor';
          city.current!.value = 'Gotham';
          state.current!.value = 'New Jersey';
          zip.current!.value = '60035';
          country.current!.value = 'United States';
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
          phonePrefix.current!.value = '+47';
          phoneNumber.current!.value = '59884549';
          address1.current!.value = '24 Louises gate';
          address2.current!.value = '';
          city.current!.value = 'Oslo';
          state.current!.value = 'Wyoming';
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
          phonePrefix.current!.value = '+1';
          phoneNumber.current!.value = '';
          address1.current!.value = '';
          address2.current!.value = '';
          city.current!.value = '';
          state.current!.value = 'Alabama';
          zip.current!.value = '';
          country.current!.value = 'Afghanistan';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mt-3">Personal Info Form With Select Inputs</h1>

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
        <input
          ref={email}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Email"
        />
        <div className="phone number">
          <select
            name="phone-prefix"
            id="select-phone-prefix"
            className="select select-bordered max-w-xs"
            ref={phonePrefix}
          >
            {PREFIX_OPTIONS.map(prefixOption => (
              <option key={prefixOption} value={prefixOption}>
                {prefixOption}
              </option>
            ))}
          </select>
          <input
            ref={phoneNumber}
            className="input max-w-xs"
            type="text"
            placeholder="Phone number"
          />
        </div>
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
        <input
          ref={city}
          className="input w-full max-w-xs"
          type="text"
          placeholder="City"
        />
        <select
          name="states"
          id="select-state"
          ref={state}
          className="select select-bordered w-full max-w-xs"
        >
          {STATES_OPTIONS.map(stateOption => (
            <option key={stateOption} value={stateOption}>
              {stateOption}
            </option>
          ))}
        </select>
        <input
          ref={zip}
          className="input w-full max-w-xs"
          type="text"
          placeholder="Zip or Postal code"
        />
        <select
          name="countries"
          id="select-country"
          ref={country}
          className="select select-bordered w-full max-w-xs"
        >
          {COUNTRY_OPTIONS.map(countryOption => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
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
