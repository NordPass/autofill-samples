import type { Dispatch, SetStateAction } from 'react';
import type { IRegistrationSettings } from '../types';
import { CoseAlgorithm } from '../types';

export interface IAlgorithms {
  registrationSettings: IRegistrationSettings;
  setRegistrationSettings: Dispatch<SetStateAction<IRegistrationSettings>>;
}

export const Algorithms = ({
  registrationSettings,
  setRegistrationSettings,
}: IAlgorithms) => {
  const toggleAlg = (key: CoseAlgorithm) => {
    setRegistrationSettings(previous => ({
      ...previous,
      algorithms: { ...previous.algorithms, [key]: !previous.algorithms[key] },
    }));
  };

  return (
    <div className="space-y-2">
      Supported Public Key Algorithms

      <div className="grid grid-cols-3 gap-2">
        {[...Object.keys(CoseAlgorithm)].map((alg, index, algorithms) =>
          index % 2
            ? (
                <label className="flex items-center gap-2" key={alg}>
                  <input
                    type="checkbox"
                    checked={
                      registrationSettings.algorithms[
                        alg as unknown as CoseAlgorithm
                      ]
                    }
                    onChange={() => toggleAlg(alg as unknown as CoseAlgorithm)}
                  />
                  {algorithms[index - 1]}
                  {` (${alg})`}
                </label>
              )
            : null,
        )}
      </div>
    </div>
  );
};
