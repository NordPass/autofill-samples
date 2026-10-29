import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const FIELDS = {
  ccNumber: { id: 'ccNumber', placeholder: 'CC number', autoComplete: 'cc-number' },
  ccDate: { id: 'expirationDate', placeholder: 'MM/YY', autoComplete: 'cc-exp' },
  cvv: { id: 'cvv', placeholder: 'CVV', autoComplete: 'cc-csc' },
} as const;

type FieldName = keyof typeof FIELDS;

const fieldSrc = (field: FieldName) =>
  `/autofill-samples/#/creditCardFrameField?field=${field}&nav=hide`;

export const CreditCardFrameField = () => {
  const [searchParams] = useSearchParams();
  const field = FIELDS[searchParams.get('field') as FieldName];

  if (!field) {
    return null;
  }

  return (
    <div className="-m-4 p-1">
      <input
        className="input w-full"
        type="text"
        id={field.id}
        placeholder={field.placeholder}
        aria-label={field.placeholder}
        autoComplete={field.autoComplete}
      />
    </div>
  );
};

const setFrameValue = (frame: HTMLIFrameElement | null, value: string) => {
  const input = frame?.contentDocument?.querySelector('input');
  if (input) {
    input.value = value;
  }
};

export const CreditCardFrames = () => {
  const fullName = useRef<HTMLInputElement>(null);
  const ccNumber = useRef<HTMLIFrameElement>(null);
  const ccDate = useRef<HTMLIFrameElement>(null);
  const cvv = useRef<HTMLIFrameElement>(null);

  const fill = (name: string, number: string, date: string, code: string) => {
    fullName.current!.value = name;
    setFrameValue(ccNumber.current, number);
    setFrameValue(ccDate.current, date);
    setFrameValue(cvv.current, code);
  };

  const frameClassName = 'w-[calc(100%+0.5rem)] max-w-[calc(20rem+0.5rem)] -mx-1 h-12 border-0';

  return (
    <div className="ml-3 justify-items-start">
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => fill('Naruto Uzumaki', '4032036251635353', '02/2028', '436')}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => fill('Bruce Wayne', '4032035599249539', '08/2028', '642')}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => fill('General Tullius', '4032032966794999', '11/2025', '069')}
      >
        FIll in (Dragonborn)
      </button>
      <button className="btn btn-outline ml-3" type="button" onClick={() => fill('', '', '', '')}>
        Clear
      </button>

      <h1 className="text-4xl mt-3">Credit Card Form (iframes)</h1>

      <form className="flex flex-col items-start mt-3 w-full">
        <p className="pb-2">Save your credit cart for future transactions.</p>
        <label htmlFor="nameOnCard">Name on card</label>
        <input
          ref={fullName}
          className="input w-full max-w-xs"
          type="text"
          id="nameOnCard"
          placeholder="Name on card"
          autoComplete="cc-name"
        />
        <span>CC number</span>
        <iframe
          ref={ccNumber}
          src={fieldSrc('ccNumber')}
          className={frameClassName}
          title="CC number"
        />
        <span>Expiration Date</span>
        <iframe
          ref={ccDate}
          src={fieldSrc('ccDate')}
          className={frameClassName}
          title="Expiration Date"
        />
        <span>CVV</span>
        <iframe ref={cvv} src={fieldSrc('cvv')} className={frameClassName} title="CVV" />
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
