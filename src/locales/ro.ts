/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} este invalid.',
  required: '${path} este un câmp obligatoriu',
  defined: '${path} trebuie să fie definit',
  notNull: '${path} nu poate fi nul',
  oneOf: '${path} trebuie să fie una dintre următoarele valori: ${values}',
  notOneOf:
    '${path} nu trebuie să fie una dintre următoarele valori: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} trebuie să fie de tipul \`${type}\`, ` +
      `dar valoarea finală a fost: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (de la valoarea \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Dacă "NULL" a fost destinat ca o valoare goală, asigurați-vă că schema dvs. o marchează` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} trebuie să aibă exact ${length} caractere',
  min: '${path} trebuie să aibă cel puțin ${min} caractere',
  max: '${path} trebuie să aibă cel mult ${max} caractere',
  matches: '${path} trebuie să se potrivească cu: "${regex}"',
  email: '${path} trebuie să fie un e-mail valid',
  url: '${path} trebuie să fie un URL valid',
  uuid: '${path} trebuie să fie un UUID valid',
  trim: '${path} trebuie să fie un șir tăiat',
  lowercase: '${path} trebuie să fie un șir cu litere mici',
  uppercase: '${path} trebuie să fie un șir cu litere mari',
};

export const number: LocaleObject['number'] = {
  min: '${path} trebuie să fie mai mare sau egal cu ${min}.',
  max: '${path} trebuie să fie mai mic sau egal cu ${max}.',
  lessThan: '${path} trebuie să fie mai mic decât ${less}',
  moreThan: '${path} trebuie să fie mai mare decât ${more}',
  positive: '${path} trebuie să fie un număr pozitiv',
  negative: '${path} trebuie să fie un număr negativ',
  integer: '${path} trebuie să fie un întreg',
};

export const date: LocaleObject['date'] = {
  min: '${path} câmpul trebuie să fie după ${min}',
  max: '${path} câmpul trebuie să fie înainte de ${max}.',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} câmpul trebuie să fie ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} câmpul nu poate avea chei care nu sunt specificate în forma obiectului',
};

export const array: LocaleObject['array'] = {
  min: '${path} câmpul trebuie să aibă cel puțin ${min} elemente',
  max: '${path} câmpul trebuie să aibă cel mult ${max} elemente',
  length: '${path} trebuie să aibă ${length} elemente',
};
