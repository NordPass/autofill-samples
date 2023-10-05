import { useRef } from 'react';

export const CreditCard = () => {
  const fullName = useRef<HTMLInputElement>(null);
  const ccNumber = useRef<HTMLInputElement>(null);
  const ccDate = useRef<HTMLInputElement>(null);
  const cvv = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col items-center ml-3">
      <h1 className="text-4xl mb-3">Credit Card</h1>
      <input
        ref={fullName}
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Full Name"
      />
      <input
        ref={ccNumber}
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="CC number"
      />
      <input
        ref={ccDate}
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="MM/YY"
      />
      <input
        ref={cvv}
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="CVV"
      />
      <button
        className="btn btn-outline mt-3 self-center"
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
        className="btn btn-outline mt-3"
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
        className="btn btn-outline mt-3"
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
        className="btn btn-outline mt-3"
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
    </form>
  );
};
