/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} geçerli değildir',
  required: '${path} zorunlu bir alandır',
  oneOf: '${path} bu değerlerden biri olmak zorundadır: ${values}',
  notOneOf: '${path} bu değerlerden biri olmamalıdır.: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path}, \`${type}\`, türünde olmak zorundadır` +
      `fakat son değer budur: \`${printValue(value, true)}\`` +
      (isCast
        ? `çevirilen orjinal değer: ( \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n  "null" olarak tanımlanmış ise şemayı şu şekilde işaretlediğinizden emin olun: ` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path}, ${length} karakter olmalıdır',
  min: '${path} en az ${min} karakter olmalıdır',
  max: '${path} en fazla ${max} karakter olmalıdır',
  matches: '${path}, "${regex}" ile eşleşmelidir',
  email: '${path} geçerli bir email olmalıdır',
  url: '${path} geçerli bir url olmalıdır',
  trim: '${path} kırpılmış olmalıdır',
  lowercase: '${path} küçük harflerden oluşmalıdır',
  uppercase: '${path} büyük harflerden oluşmalıdır',
};

export const number: LocaleObject['number'] = {
  min: '${path}, en az ${min} veya daha fazla hane olmalıdır',
  max: '${path} en fazla ${max} veya daha az hane olmalıdır',
  lessThan: '${path}, ${less} haneden az olmalıdır',
  moreThan: '${path}, ${more} haneden fazla olmalıdır',
  positive: '${path} pozitif bir sayı olmalıdır',
  negative: '${path} negatif bir sayı olmalıdır',
  integer: '${path} bir tamsayı olmalıdır',
};

export const date: LocaleObject['date'] = {
  min: '${path}, ${min} tarihinden ileri bir tarih olmalıdır',
  max: '${path}, ${max} tarihinden önce bir tarih olmalıdır',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} alanında nesne olmayan değerler bulunamaz',
};

export const array: LocaleObject['array'] = {
  min: '${path}, en az ${min} eleman içermelidir',
  max: '${path}, en fazla ${max} eleman içermelidir',
};
