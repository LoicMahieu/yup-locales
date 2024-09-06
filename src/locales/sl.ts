/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} je neveljaven.',
  required: '${path} polje je obvezno',
  defined: '${path} mora biti določeno',
  notNull: '${path} ne sme biti null',
  oneOf: '${path} mora biti ena od naslednjih vrednosti: ${values}',
  notOneOf: '${path} ne sme biti ena od naslednjih vrednosti: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} mora biti tip \`${type}\`, ` +
      `toda končna vrednost je bila: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (pretvorjeno iz vrednosti \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg += `\n Če je "null" namenjena kot prazna vrednost se prepričaj da je shema označena kot` +
      ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} mora vsebovati točno dolžine ${length} znakov',
  min: '${path} mora vsebovati vsaj ${min} znaki',
  max: '${path} mora vsebovati največ ${max} znakov',
  matches: '${path} se mora ujemati z naslednjim: "${regex}"',
  email: '${path} mora biti veljaven e-naslov',
  url: '${path} mora biti veljaven URL',
  uuid: '${path} mora biti veljaven UUID',
  trim: '${path} mora biti obrezan niz',
  lowercase: '${path} mora biti niz malih črk',
  uppercase: '${path} mora biti niz iz velikih črk',
};

export const number: LocaleObject['number'] = {
  min: '${path} mora biti večji ali enak ${min}',
  max: '${path} mora biti manjši ali enak ${max}',
  lessThan: '${path} mora biti manjši kot ${less}',
  moreThan: '${path} mora biti večji od ${more}',
  positive: '${path} mora biti pozitivno število',
  negative: '${path} mora biti negativno število',
  integer: '${path} mora biti celo število',
};

export const date: LocaleObject['date'] = {
  min: '${path} polje mora biti kasneje kot ${min}',
  max: '${path} Polje mora biti prej kot ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} polje mora biti ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} polje nima veljavnih ključev: ${unknown}',
};

export const array: LocaleObject['array'] = {
  min: '${path} polje mora vsebovati vsaj ${min} vrednosti',
  max: '${path} polje mora vsebovati manj ali enako ${max} vrednosti',
  length: '${path} mora vsebovati ${length} vrednosti',
};
