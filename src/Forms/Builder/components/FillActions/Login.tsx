import type { RefObject } from 'react';
import { Clear } from './Clear';

const FILL_ACTIONS = [
  { title: 'Naruto', username: 'naruto.uzumaki@gmail.com', password: '12345' },
  { title: 'Batman', username: 'brucewayne33112@gmail.com', password: 'alfredthebutler123' },
  {
    title: 'Dragonborn',
    username: 'dragonBorn33112@gmail.com',
    password: 'afterdarknessAlwaysComesLight_1',
  },
];

export const FillActions = ({
  username,
  password,
  customFields,
}: {
  username: RefObject<HTMLInputElement | null>;
  password: RefObject<HTMLInputElement | null>;
  customFields: RefObject<Array<HTMLInputElement | null>>;
}) => {
  const allFields = [
    username,
    password,
    ...(customFields.current?.map(el => ({ current: el })) ?? []),
  ];

  return (
    <>
      {FILL_ACTIONS.map(action => (
        <button
          key={action.title}
          className="btn btn-outline mr-3"
          type="button"
          onClick={() => {
            if (username.current) {
              username.current.value = action.username;
            }

            if (password.current) {
              password.current.value = action.password;
            }
          }}
        >
          {`Fill in (${action.title})`}
        </button>
      ))}

      <Clear fields={allFields} />
    </>
  );
};
