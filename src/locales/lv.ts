/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} nav derīgs',
  required: '${path} ir nepieciešamais lauks',
  defined: '${path} ir jādefinē',
  notNull: '${path} nevar būt nulle',
  oneOf: '${path} jābūt vienai no šīm vērtībām: ${values}',
  notOneOf: '${path} nedrīkst būt vienai no šīm vērtībām: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} jābūt \`${type}\` tipam, ` +
      `bet galīgā vērtība bija: "${printValue(value, true)}\`` +
      (isCast
        ? ` (lieta no vērtības \`${printValue(originalValue, true)}\`)`
        : '');

    if (value === null) {
      msg +=
        `\n Ja "nulle" ir paredzēts kā tukša vērtība, noteikti atzīmējiet shēmu kā` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} jābūt tieši ${length} rakstzīmēm',
  min: '${path} jābūt vismaz ${min} rakstzīmēm',
  max: '${path} jābūt ne vairāk kā ${max} rakstzīmēm',
  matches: '${path} jāatbilst šādiem: "${regex}"',
  email: '${path} jābūt derīgam e -pastam',
  url: '${path} jābūt derīgam URL',
  uuid: '${path} jābūt derīgam UUID',
  trim: '${path} jābūt sagrieztai virknei',
  lowercase: '${path} jābūt mazajam virknei',
  uppercase: '${path} jābūt lielajam virknei',
};

export const number: LocaleObject['number'] = {
  min: '${path} jābūt lielākam vai vienādam ar ${min}',
  max: '${path} jābūt mazākam vai vienādam ar ${max}',
  lessThan: '${path} jābūt mazākam par ${less}',
  moreThan: '${path} jābūt lielākam par ${more}',
  positive: '${path} jābūt pozitīvam skaitam',
  negative: '${path} jābūt negatīvam skaitam',
  integer: '${path} jābūt veselam skaitlim',
};

export const date: LocaleObject['date'] = {
  min: '${path} laukam jābūt vēlāk nekā ${min}',
  max: '${path} laukam jābūt agrāk par ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} laukam jābūt ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} laukam nevar būt atslēgas, kas nav norādītas objekta formā',
};

export const array: LocaleObject['array'] = {
  min: '${path} laukam jābūt vismaz ${min} priekšmetiem',
  max: '${path} laukam jābūt mazākam vai vienādam ar ${max} priekšmetiem',
  length: '${path} jābūt ${length} priekšmetiem',
};
