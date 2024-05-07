import { useRef } from "react";
import { countryOptions } from "../utils/constants";

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
    <div className='ml-6'>
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
          country.current!.value = '';
          address.current!.value = '';
          address2.current!.value = '';
          city.current!.value = '';
        }}
      >
        Clear
      </button>
      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mb-3">Checkout Form</h1>
        <section>
          <h1 className="text-3xl mb-3">Credit Card</h1>
          <div className="mb-1">
            <p>Name on Card</p>
            <input
              ref={ccFullName}
              className="input input-bordered w-full max-w-xs"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <p>Card number</p>
            <input
              ref={ccNumber}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
            <p>Expiration Date</p>
            <input
              ref={ccExpirationFull}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
              placeholder="MM/YY"
            />
            <p>Security Code</p>
            <input
              ref={ccCVV}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
              placeholder="000"
            />
            <p>Zip Code</p>
            <input
              ref={ccZipCode}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
            />
          </div>
        </section>

        <section>
          <form className="flex flex-col items-start mt-3">
            <h1 className="text-3xl mb-3">Billing Address</h1>
            <p>Country</p>
            <select
              ref={country}
              name="countries"
              id="select-country"
              className="select select-bordered w-full max-w-xs"
            >
              {countryOptions.map((countryOption, index) => (
                <option key={index} value={countryOption}>
                  {countryOption}
                </option>
              ))}
            </select>
            <p>Street Address</p>
            <input
              ref={address}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
            />
            <p>Apt/Suite/Other (Optional)</p>
            <input
              ref={address2}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
            />
            <p>Zip or Postal Code</p>
            <input
              ref={billingZipCode}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
            />
            <p>Full Name</p>
            <input
              ref={billingFullName}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
            />
            City
            <input
              ref={city}
              className="input input-bordered w-full max-w-xs mb-1"
              type="text"
            />
          </form>
        </section>
        <button className="btn btn-outline mt-3" type="button">Checkout</button>
      </form>
    </div>
  )
};
