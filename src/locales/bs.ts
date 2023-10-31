/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} je nevažeći.',
  required: '${path} je obavezno polje',
  defined: '${path} mora biti definisan',
  notNull: '${path} ne može biti null',
  oneOf: '${path} mora biti jedna od sljedećih vrijednosti: ${values}',
  notOneOf: '${path} ne smije biti jedna od sljedećih vrijednosti: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} mora biti tipa \`${type}\`` +
      ` ali konačna vrijednost bila je: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (pretvoreno iz vrijednosti \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\nAko je "null" namijenjen kao prazna vrijednost, obavezno označite shemu kao` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} mora imati tačno ${length} karaktera',
  min: '${path} mora imati najmanje ${min} karaktera',
  max: '${path} mora imati najviše ${max} karaktera',
  matches: '${path} mora odgovarati sljedećem: "${regex}"',
  email: '${path} mora biti važeća email adresa',
  url: '${path} mora biti važeći URL',
  uuid: '${path} mora biti važeći UUID',
  trim: '${path} mora biti obrezan niz znakova',
  lowercase: '${path} mora biti niz znakova malim slovima',
  uppercase: '${path} mora biti niz znakova velikim slovima',
};

export const number: LocaleObject['number'] = {
  min: '${path} mora biti veći ili jednak ${min}',
  max: '${path} mora biti manji ili jednak ${max}',
  lessThan: '${path} mora biti manje od ${less}',
  moreThan: '${path} mora biti veće od ${more}',
  positive: '${path} mora biti pozitivan broj',
  negative: '${path} mora biti negativan broj',
  integer: '${path} mora biti cijeli broj',
};

export const date: LocaleObject['date'] = {
  min: '${path} polje mora biti kasnije od ${min}',
  max: '${path} polje mora biti ranije od ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} polje mora biti ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} polje ne smije imati ključeve koji nisu navedeni u obliku objekta',
};

export const array: LocaleObject['array'] = {
  min: '${path} polje mora imati najmanje ${min} stavki',
  max: '${path} polje mora imati najviše ${max} stavki',
  length: '${path} mora imati ${length} stavki',
};
