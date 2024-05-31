/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} non è valido.',
  required: '${path} è un campo richiesto',
  defined: '${path} deve essere definito',
  notNull: '${path} non può essere nullo',
  oneOf: '${path} deve essere uno dei seguenti valori: ${values}',
  notOneOf: '${path} non deve essere uno dei seguenti valori: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} deve essere un tipo \`${type}\`, ` +
      `Ma il valore finale era: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (cast dal valore \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Se "null" è inteso come valore vuoto, assicurarsi di contrassegnare lo schema come` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} deve essere esattamente ${length} caratteri',
  min: '${path} deve essere almeno ${min} caratteri',
  max: '${path} deve essere al massimo ${max} caratteri',
  matches: '${path} deve abbinare quanto segue: "${regex}"',
  email: "${path} deve essere un'e-mail valida",
  url: '${path} deve essere un URL valido',
  uuid: '${path} deve essere un uuid valido',
  trim: '${path} deve essere una stringa tagliata',
  lowercase: '${path} deve essere una stringa minuscola',
  uppercase: '${path} deve essere una stringa maiuscola',
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
  min: '${path} Il campo deve essere successivo di ${min}',
  max: '${path} Il campo deve essere prima di ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Il campo deve essere ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    "${path} Il campo non può avere i tasti non specificati nella forma dell'oggetto",
};

export const array: LocaleObject['array'] = {
  min: '${path} Il campo deve avere almeno ${min} articoli',
  max: '${path} Il campo deve avere meno o uguale a ${max} elementi',
  length: '${path} deve avere ${length} articoli',
};
