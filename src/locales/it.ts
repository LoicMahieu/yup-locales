/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} non è valido.',
  required: '${path} è un campo obbligatorio',
  oneOf: '${path} deve contenere uno dei seguenti valori: ${values}',
  notOneOf: '${path} deve essere diverso dai seguenti valori: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} deve essere un \`${type}\` tipo, ` +
      `ma il valore finale è: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (valore originale: \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Se "null" è inteso come un valore vuoto assicurarsi di settare lo schema come` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} deve avere esattamente ${length} caratteri',
  min: '${path} deve avere almeno ${min} caratteri',
  max: '${path} deve avere al massimo ${max} caratteri',
  matches: '${path} deve corrispondere al seguente: "${regex}"',
  email: '${path} deve essere un indirizzo email valido',
  url: '${path} deve essere un URL valido',
  trim: '${path} deve essere una stringa senza spazi iniziali/finali',
  lowercase: '${path} deve essere una stringa in minuscolo',
  uppercase: '${path} deve essere una stringa in maiuscolo',
};

export const number: LocaleObject['number'] = {
  min: '${path} deve essere maggiore o uguale a ${min}',
  max: '${path} deve essere inferiore o uguale a ${max}',
  lessThan: '${path} deve essere inferiore a ${less}',
  moreThan: '${path} deve essere maggiore di ${more}',
  positive: '${path} deve essere un numero positivo',
  negative: '${path} deve essere un numero negativo',
  integer: '${path} deve essere un numero intero',
};

export const date: LocaleObject['date'] = {
  min: '${path} deve essere successiva al ${min}',
  max: '${path} deve essere precedente al ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    "${path} contiene delle chiavi non specificate nella forma dell'oggetto",
};

export const array: LocaleObject['array'] = {
  min: '${path} deve avere almeno ${min} elementi',
  max: '${path} non deve avere più di ${max} elementi',
};
