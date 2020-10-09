/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} er ugyldig.',
  required: '${path} er et nødvendig felt',
  oneOf: '${path} må være en av de følgende verdier: ${values}',
  notOneOf: '${path} må ikke være en av de følgende verdier: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} må være en '${type} \`typen, ` +
      `men den endelige verdien var: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (støpt fra verdien \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Hvis "null" er ment som en tom verdi sørg for å markere skjemaet som` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} må være nøyaktig ${length} tegn',
  min: '${path} må være minst ${min} tegn',
  max: '${path} må være mest ${max} tegn',
  matches: '${path} må samsvare med følgende: "${regex}"',
  email: '${path} må være en gyldig e-post',
  url: '${path} må være en gyldig nettadresse',
  trim: '${path} må være en trimmet streng',
  lowercase: '${path} må være i små bokstaver',
  uppercase: '${path} må være i store bokstaver',
};

export const number: LocaleObject['number'] = {
  min: '${path} må være større enn eller lik ${min}',
  max: '${path} må være mindre enn eller lik ${max}',
  lessThan: '${path} må være mindre enn ${less}',
  moreThan: '${path} må være større enn ${more}',
  positive: '${path} må være et positivt tall',
  negative: '${path} må være et negativt tall',
  integer: '${path} må være et heltall',
};

export const date: LocaleObject['date'] = {
  min: '${path} feltet må være senere enn ${min}',
  max: '${path} feltet må være tidligere enn ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} felt kan ikke har nøkler som ikke er spesifisert i objektet form',
};

export const array: LocaleObject['array'] = {
  min: '${path} feltet må ha minst ${min} elementer',
  max: '${path} feltet må ha mindre enn eller lik ${max} elementer',
};
