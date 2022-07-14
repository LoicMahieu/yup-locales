/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} tidak valid.',
  required: '${path} wajib diisi',
  oneOf: '${path} tidak valid',
  notOneOf: '${path} tidak valid',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} harus merupakan tipe \`${type}\`, ` +
      `tetapi nilai akhir adalah: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (dilemparkan dari nilai \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Jika "null" dimaksudkan sebagai nilai kosong, pastikan untuk menandai skema sebagai` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} harus persis ${length} karakter',
  min: '${path} harus setidaknya ${min} karakter',
  max: '${path} harus paling banyak ${max} karakter',
  matches: '${path} harus cocok dengan yang berikut: "${regex}"',
  email: '${path} harus merupakan email yang valid',
  url: '${path} harus merupakan url yang valid',
  trim: '${path} harus merupakan string yang dipangkas',
  lowercase: '${path} harus merupakan lowercase',
  uppercase: '${path} harus merupakan uppercase',
};

export const number: LocaleObject['number'] = {
  min: '${path} harus lebih besar dari atau sama dengan ${min}',
  max: '${path} harus kurang dari atau sama dengan ${max}',
  lessThan: '${path} harus kurang dari ${less}',
  moreThan: '${path} harus lebih besar dari ${more}',
  positive: '${path} harus merupakan bilangan positif',
  negative: '${path} harus merupakan bilangan negatif',
  integer: '${path} harus merupakan bilangan bulat',
};

export const date: LocaleObject['date'] = {
  min: '${path} harus lebih lambat dari ${min}',
  max: '${path} harus lebih awal dari ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} tidak dapat memiliki kunci yang tidak ditentukan dalam bentuk objek',
};

export const array: LocaleObject['array'] = {
  min: '${path} harus memiliki setidaknya ${min} item',
  max: '${path} harus memiliki kurang dari atau sama dengan item ${max}',
};
