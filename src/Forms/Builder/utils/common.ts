import type { IFieldSettings } from '../interfaces/interfaces';

const generateRandomId = () => Math.random().toString(36).slice(2, 8);

const applyTypo = (value: string): string => {
  if (value.length === 0) {
    return value;
  }

  const middle = Math.floor(value.length / 2);

  return value.slice(0, middle) + value.slice(middle + 1);
};

export const applyDeformation = (
  value: string,
  deformation: IFieldSettings['deformation'],
): string => {
  if (deformation === 'obfuscated') {
    return generateRandomId();
  }

  if (deformation === 'typo') {
    return applyTypo(value);
  }

  return value;
};
