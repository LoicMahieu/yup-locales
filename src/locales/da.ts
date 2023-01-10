/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} er ugyldig.',
  required: '${path} er et påkrævet felt',
  oneOf: '${path} skal være en af følgende værdier: ${values}',
  notOneOf: '${path} må ikke være en af følgende værdier: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} skal være en \`${type} type, ` +
      `Men den endelige værdi var: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (cast fra værdien \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Hvis "null" er beregnet til en tom værdi, skal du sørge for at markere skemaet som` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} skal være nøjagtigt ${length} tegn',
  min: '${path} skal være mindst ${min} tegn',
  max: '${path} skal højst være ${max} tegn',
  matches: '${path} skal matche følgende: "${regex}"',
  email: '${path} skal være en gyldig e-mail addresse',
  url: '${path} skal være en gyldig URL',
  trim: '${path} skal være en trimmet streng',
  lowercase: '${path} skal være med små bogstaver',
  uppercase: '${path} skal være med store bogstaver',
};

export const number: LocaleObject['number'] = {
  min: '${path} skal være større end eller lig med ${min}',
  max: '${path} skal være mindre end eller lig med ${max}',
  lessThan: '${path} skal være mindre end ${less}',
  moreThan: '${path} skal være større end ${more}',
  positive: '${path} skal være et positivt tal',
  negative: '${path} skal være et negativt tal',
  integer: '${path} skal være et heltal',
};

export const date: LocaleObject['date'] = {
  min: '${path} felt skal være senere end ${min}',
  max: '${path} felt skal være tidligere end ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} feltet kan ikke have nøgler, der ikke er specificeret i objektets form',
};

export const array: LocaleObject['array'] = {
  min: '${path} feltet skal have mindst ${min} genstande',
  max: '${path} feltet skal have mindre end eller lig med ${max} genstande',
};
