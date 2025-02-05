import { useRef } from 'react';
import { COUNTRY_OPTIONS } from '../utils/constants';

export const CheckoutForm = () => {
  const ccFullName = useRef<HTMLInputElement>(null);
  const billingFullName = useRef<HTMLInputElement>(null);
  const ccNumber = useRef<HTMLInputElement>(null);
  const ccExpirationFull = useRef<HTMLInputElement>(null);
  const ccCVV = useRef<HTMLInputElement>(null);
  const ccZipCode = useRef<HTMLInputElement>(null);
  const billingZipCode = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3" style={{ justifyItems: 'left'}}>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          ccFullName.current!.value = 'Naruto Uzumaki';
          billingFullName.current!.value = 'Naruto Uzumaki';
          ccNumber.current!.value = '4032036251635353';
          ccExpirationFull.current!.value = '02/2028';
          ccCVV.current!.value = '436';
          ccZipCode.current!.value = '60035';
          billingZipCode.current!.value = '60035';
          country.current!.value = 'United States';
          address.current!.value = '123 Konohagakure';
          address2.current!.value = 'Hokage Office';
          city.current!.value = 'Konohagakure';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          ccFullName.current!.value = 'Bruce Wayne';
          billingFullName.current!.value = 'Bruce Wayne';
          ccNumber.current!.value = '4532015112830366';
          ccExpirationFull.current!.value = '12/2027';
          ccCVV.current!.value = '123';
          ccZipCode.current!.value = '10001';
          billingZipCode.current!.value = '10001';
          country.current!.value = 'United States';
          address.current!.value = '1007 Mountain Drive';
          address2.current!.value = 'Batcave';
          city.current!.value = 'Gotham';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          ccFullName.current!.value = 'Daenerys Targaryen';
          billingFullName.current!.value = 'Daenerys Targaryen';
          ccNumber.current!.value = '4532015112830366';
          ccExpirationFull.current!.value = '12/2027';
          ccCVV.current!.value = '123';
          ccZipCode.current!.value = '10001';
          billingZipCode.current!.value = '10001';
          country.current!.value = 'United States';
          address.current!.value = '1007 Mountain Drive';
          address2.current!.value = 'Dragonstone';
          city.current!.value = 'Westeros';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          ccFullName.current!.value = '';
          billingFullName.current!.value = '';
          ccNumber.current!.value = '';
          ccExpirationFull.current!.value = '';
          ccCVV.current!.value = '';
          ccZipCode.current!.value = '';
          billingZipCode.current!.value = '';
          country.current!.value = 'Afghanistan';
          address.current!.value = '';
          address2.current!.value = '';
          city.current!.value = '';
        }}
      >
        Clear
      </button>

      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mt-3">Checkout Form</h1>

        <section className="flex flex-col items-start mt-3">
          <p className="pb-2">To finish buying the product - enter your credentials.</p>

          <h1 className="text-3xl mb-3">Credit Card</h1>
          <label htmlFor="ccFullName">Name on Card</label>
          <input
            id="ccFullName"
            ref={ccFullName}
            className="input input-bordered w-full max-w-xs"
            type="text"
          />
          <label htmlFor="ccNumber">Credit card number</label>
          <input
            id="ccNumber"
            ref={ccNumber}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
            placeholder="0000 0000 0000 0000"
          />
          <label htmlFor="ccExpirationFull">Expiration Date</label>
          <input
            id="ccExpirationFull"
            ref={ccExpirationFull}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
            placeholder="MM/YY"
          />
          <label htmlFor="ccCVV">Security Code</label>
          <input
            id="ccCVV"
            ref={ccCVV}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
            placeholder="000"
          />
          <label htmlFor="ccZipCode">Zip Code</label>
          <input
            id="ccZipCode"
            ref={ccZipCode}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
          />
        </section>

        <section className="flex flex-col items-start mt-3">
          <h1 className="text-3xl mb-3">Billing & Shipping Address</h1>

          <p className="pb-2">We will send your delivery directly to the address.</p>

          <label htmlFor="select-country">Country</label>
          <select
            ref={country}
            name="countries"
            id="select-country"
            className="select select-bordered w-full max-w-xs"
          >
            {COUNTRY_OPTIONS.map((countryOption, index) => (
              <option key={index} value={countryOption}>
                {countryOption}
              </option>
            ))}
          </select>
          <label htmlFor="city">City</label>
          <input
            id="city"
            ref={city}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
          />
          <label htmlFor="address">Street Address</label>
          <input
            id="address"
            ref={address}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
          />
          <label htmlFor="address2">Apt/Suite/Other (Optional)</label>
          <input
            id="address2"
            ref={address2}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
          />
          <label htmlFor="billingZipCode">Zip or Postal Code</label>
          <input
            id="billingZipCode"
            ref={billingZipCode}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
          />
          <label htmlFor="billingFullName">Full Name</label>
          <input
            id="billingFullName"
            ref={billingFullName}
            className="input input-bordered w-full max-w-xs mb-1"
            type="text"
          />
        </section>
        <button className="btn btn-outline mt-3" type="button">Submit checkout</button>
      </form>
    </div>
  );
};
