import { useRef } from 'react';

export const CreditCard = () => {
  const fullName = useRef<HTMLInputElement>(null);
  const ccNumber = useRef<HTMLInputElement>(null);
  const ccDate = useRef<HTMLInputElement>(null);
  const cvv = useRef<HTMLInputElement>(null);

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          fullName.current!.value = 'Naruto Uzumaki';
          ccNumber.current!.value = '4032036251635353';
          ccDate.current!.value = '02/2028';
          cvv.current!.value = '436';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          fullName.current!.value = 'Bruce Wayne';
          ccNumber.current!.value = '4032035599249539';
          ccDate.current!.value = '08/2028';
          cvv.current!.value = '642';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          fullName.current!.value = 'General Tullius';
          ccNumber.current!.value = '4032032966794999';
          ccDate.current!.value = '11/2025';
          cvv.current!.value = '069';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          fullName.current!.value = '';
          ccNumber.current!.value = '';
          ccDate.current!.value = '';
          cvv.current!.value = '';
        }}
      >
        Clear
      </button>

      <h1 className="text-4xl mt-3">Credit Card Form</h1>

      <form className="flex flex-col items-start mt-3">
        <p className="pb-2">Save your credit cart for future transactions.</p>
        <label htmlFor="fullName">Full Name</label>
        <input
          ref={fullName}
          className="input w-full max-w-xs"
          type="text"
          id="fullName"
          placeholder="Full Name"
        />
        <label htmlFor="ccNumber">CC number</label>
        <input
          ref={ccNumber}
          className="input w-full max-w-xs"
          type="text"
          id="ccNumber"
          placeholder="CC number"
        />
        <label htmlFor="ccDate">Expiration Date</label>
        <input
          ref={ccDate}
          className="input w-full max-w-xs"
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
        />
        <label htmlFor="cvv">CVV</label>
        <input
          ref={cvv}
          className="input w-full max-w-xs"
          type="text"
          id="cvv"
          placeholder="CVV"
        />
        <button
          className="btn btn-outline mt-3"
          type="submit"
          onClick={event => event.preventDefault()}
        >
          Submit Credit Card
        </button>
      </form>
    </div>
  );
};
