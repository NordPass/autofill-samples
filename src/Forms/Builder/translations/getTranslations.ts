import type { LANGUAGES } from '../interfaces/interfaces';
import { Dutch } from './Dutch';
import { English } from './English';
import { French } from './French';
import { German } from './German';
import { Italian } from './Italian';
import { Lithuanian } from './Lithuanian';
import { Spanish } from './Spanish';

export const getTranslations = (language: (typeof LANGUAGES)[number]) => {
  switch (language) {
    case 'Dutch':
      return Dutch;
    case 'French':
      return French;
    case 'German':
      return German;
    case 'Italian':
      return Italian;
    case 'Lithuanian':
      return Lithuanian;
    case 'Spanish':
      return Spanish;
    default:
      return English;
  }
};
