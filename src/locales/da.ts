/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} er ugyldig.',
  required: '${path} er et påkrævet felt',
  defined: '${path} skal defineres',
  notNull: '${path} kan ikke være null',
  oneOf: '${path} skal være en af følgende værdier: ${values}',
  notOneOf: '${path} må ikke være en af følgende værdier: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} skal være en \`${type} \'type, ` +
      `Men den endelige værdi var: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (kastet fra værdien \`${printValue(originalValue, true)}\`).`
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
  email: '${path} skal være en gyldig e-mail',
  url: '${path} skal være en gyldig URL',
  uuid: '${path} skal være en gyldig UUID',
  trim: '${path} skal være en trimmet streng',
  lowercase: '${path} skal være en lille strenghed',
  uppercase: '${path} skal være en store bogstaver',
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

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} felt skal være ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} felt kan ikke have nøgler, der ikke er specificeret i objektformen',
};

export const array: LocaleObject['array'] = {
  min: '${path} felt skal have mindst ${min} genstande',
  max: '${path} felt skal have mindre end eller lig med ${max} genstande',
  length: '${path} skal have ${length} genstande',
};
