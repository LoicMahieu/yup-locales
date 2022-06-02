/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} neteisinga.',
  required: '${path} yra būtinas laukas',
  oneOf: '${path} turi būti iš šių verčių: ${values}',
  notOneOf: '${path} neturi būti iš šių verčių: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} turi būti \`${type}\` tipas, ` +
      `Bet galutinė vertė buvo: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (Išmeskite iš vertės \`${printValue(originalValue, true)}\` \`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Jei „nulis“ yra skirtas kaip tuščia vertė, būtinai pažymėkite schemą kaip` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} turi būti iš ${length} simbolių',
  min: '${path} turi būti bent ${min} simboliai',
  max: '${path} turi būti daugiausia iš ${max} simbolių',
  matches: '${path} turi atitikti šiuos dalykus: „${regex}“',
  email: '${path} turi būti galiojantis el. adresas',
  url: '${path} turi būti galiojantis URL',
  trim: '${path} turi būti be tarpų pradžioje ir gale',
  lowercase: '${path} turi būti tik mažosios raidės',
  uppercase: '${path} turi būti tik didžiosios raidės',
};

export const number: LocaleObject['number'] = {
  min: '${path} turi būti daugiau arba lygu ${min}',
  max: '${path} turi būti mažiau arba lygu ${max}',
  lessThan: '${path} turi būti mažiau nei ${less}',
  moreThan: '${path} turi būti daugiau nei ${more}',
  positive: '${path} turi būti teigiamas skaičius',
  negative: '${path} turi būti neigiamas skaičius',
  integer: '${path} turi būti sveikasis skaičius',
};

export const date: LocaleObject['date'] = {
  min: '${path} turi būti vėliau nei ${min}',
  max: '${path} turi būti anksčiau nei ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} negali būti raktų, nenurodytų objekto formoje',
};

export const array: LocaleObject['array'] = {
  min: '${path} turi būti bent ${min} elementai',
  max: '${path} turi būti ne daugiau nei ${max} elementai',
};
