/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} er ugyldig',
  required: '${path} er et påkrevd felt',
  defined: '${path} må defineres',
  notNull: '${path} kan ikke være null',
  oneOf: '${path} må være en av følgende verdier: ${values}',
  notOneOf: '${path} må ikke være en av følgende verdier: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} må være en \`${type}\` type, ` +
      `men den endelige verdien var: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (støpt fra verdien \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Hvis "null" er ment som en tom verdi, må du huske å markere skjemaet som` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} må være nøyaktig ${length} tegn',
  min: '${path} må være minst ${min} tegn',
  max: '${path} må være på det meste ${max} tegn',
  matches: '${path} må samsvare med følgende: "${regex}"',
  email: '${path} må være en gyldig e-post',
  url: '${path} må være en gyldig URL',
  uuid: '${path} må være en gyldig UUID',
  trim: '${path} må være en trimmet streng',
  lowercase: '${path} må være små bokstaver',
  uppercase: '${path} må være store bokstaver',
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

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} feltet må være ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} felt kan ikke ha nøkler som ikke er spesifisert i objektformen',
};

export const array: LocaleObject['array'] = {
  min: '${path} feltet må ha minst ${min} elementer',
  max: '${path} feltet må ha mindre enn eller lik ${max} elementer',
  length: '${path} må ha ${length} elementer',
};
