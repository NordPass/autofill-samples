import { useRef } from 'react';
import { isMobile } from 'react-device-detect';

export const PersonalInfoPhone = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phonePrefix = useRef<HTMLInputElement>(null);
  const phoneArea = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const phoneExtension = useRef<HTMLInputElement>(null);
  const address1 = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const zip = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3" style={{ justifyItems: 'left' }}>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          firstName.current!.value = 'Naruto';
          lastName.current!.value = 'Uzumaki';
          email.current!.value = 'naruto.uzumaki@gmail.com';
          phonePrefix.current!.value = '+81';
          phoneArea.current!.value = '70';
          phoneNumber.current!.value = '46679531';
          phoneExtension.current!.value = '123';
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
          phonePrefix.current!.value = '+1';
          phoneArea.current!.value = '472';
          phoneNumber.current!.value = '2377744';
          phoneExtension.current!.value = '890';
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
          phonePrefix.current!.value = '+47';
          phoneArea.current!.value = '598';
          phoneNumber.current!.value = '84549';
          phoneExtension.current!.value = '000';
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
          phonePrefix.current!.value = '';
          phoneArea.current!.value = '';
          phoneNumber.current!.value = '';
          phoneExtension.current!.value = '';
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

      <h1 className="text-4xl mt-3">Personal Info Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Save your credentials for future transactions.</p>

        <input
          ref={firstName}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="First Name"
        />
        <input
          ref={lastName}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Last Name"
        />
        <input
          ref={email}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Email"
        />
        {!isMobile
          ? <div className="flex items-center">
            <input
              ref={phonePrefix}
              className="input input-bordered w-[80px] max-w-xs mr-2"
              type="text"
              name="phonePrefix"
              placeholder="Prefix"
            />
            <input
              ref={phoneArea}
              className="input input-bordered w-[80px] max-w-xs mr-2"
              type="text"
              name="phoneArea"
              placeholder="(Area)"
            />
            <input
              ref={phoneNumber}
              className="input input-bordered max-w-xs mr-2"
              type="text"
              placeholder="Phone number"
            />
            {' '}
            Ext:
            {' '}
            <input
              ref={phoneExtension}
              className="input input-bordered w-[70px] max-w-xs ml-2"
              type="text"
              name="phoneExtension"
            />
          </div>
          :
          <div className='flex flex-wrap'>
            <input
              ref={phonePrefix}
              className="input input-bordered w-[80px] max-w-xs mr-2"
              type="text"
              name="phonePrefix"
              placeholder="Prefix"
            />
            <input
              ref={phoneArea}
              className="input input-bordered w-[80px] max-w-xs mr-2"
              type="text"
              name="phoneArea"
              placeholder="(Area)"
            />
            <input
              ref={phoneNumber}
              className="input input-bordered max-w-xs mr-2"
              type="text"
              placeholder="Phone number"
            />
            {' '}
            Ext:
            {' '}
            <input
              ref={phoneExtension}
              className="input input-bordered w-[70px] max-w-xs ml-2"
              type="text"
              name="phoneExtension"
            />
          </div>
        }

        <input
          ref={address1}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Address 1"
        />
        <input
          ref={address2}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Address 2"
        />
        <input
          ref={city}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="City"
        />
        <input
          ref={state}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="State"
        />
        <input
          ref={zip}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Zip or Postal code"
        />
        <input
          ref={country}
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Country"
        />
        <button className="btn btn-outline mt-3" type="button">Save</button>
      </form>
    </div>
  );
};
