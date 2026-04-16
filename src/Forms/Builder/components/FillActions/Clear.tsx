import type { RefObject } from 'react';

export const Clear = ({ fields }: { fields: Array<RefObject<HTMLInputElement | null>> }) => (
  <button
    className="btn btn-outline"
    type="button"
    onClick={() => {
      fields.forEach((field) => {
        if (field.current) {
          field.current.value = '';
        }
      });
    }}
  >
    Clear
  </button>
);
