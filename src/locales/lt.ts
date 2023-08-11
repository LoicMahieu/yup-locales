/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} neteisinga.',
  required: '${path} yra būtinas laukas',
  defined: 'Turi būti apibrėžtas ${path}',
  notNull: '${path} negali būti niekinis',
  oneOf: '${path} turi būti viena iš šių verčių: ${values}',
  notOneOf: '${path} neturi būti viena iš šių verčių: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} turi būti \`${type}\` tipas, ` +
      `Bet galutinė vertė buvo: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (Išmeskite iš vertės \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Jei „null“ yra skirta kaip tuščia vertė, būtinai pažymėkite schemą kaip` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} turi būti tiksliai ${length} simboliai',
  min: '${path} turi būti bent ${min} simboliai',
  max: '${path} turi būti daugiausia ${max} simbolių',
  matches: '${path} turi atitikti šiuos dalykus: „${regex}“',
  email: '${path} turi būti galiojantis el. Laiškas',
  url: '${path} turi būti galiojantis URL',
  uuid: '${path} turi būti galiojantis UUID',
  trim: '${path} turi būti apipjaustyta styga',
  lowercase: '${path} turi būti mažosios raidės',
  uppercase: '${path} turi būti didžiosios raidės eilutė',
};

export const number: LocaleObject['number'] = {
  min: '${path} turi būti didesnis arba lygus ${min}',
  max: '${path} turi būti mažesnis arba lygus ${max}',
  lessThan: '${path} turi būti mažesnis nei ${less}',
  moreThan: '${path} turi būti didesnis nei ${more}',
  positive: '${path} turi būti teigiamas skaičius',
  negative: '${path} turi būti neigiamas skaičius',
  integer: '${path} turi būti sveikasis skaičius',
};

export const date: LocaleObject['date'] = {
  min: '${path} Laukas turi būti vėliau nei ${min}',
  max: '${path} Laukas turi būti anksčiau nei ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Laukas turi būti ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} Lauke negali būti raktų, nenurodytų objekto formoje',
};

export const array: LocaleObject['array'] = {
  min: '${path} Lauke turi būti bent ${min} elementai',
  max: '${path} Lauke turi būti mažesnis arba lygus ${max} elementams',
  length: '${path} turi turėti ${length} elementus',
};
