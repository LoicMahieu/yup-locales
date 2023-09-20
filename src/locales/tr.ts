/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} geçersiz.',
  required: '${path} gerekli bir alandır',
  defined: '${path} tanımlanmalıdır',
  notNull: '${path} boş olamaz',
  oneOf: '${path} aşağıdaki değerlerden biri olmalıdır: ${values}',
  notOneOf: '${path} aşağıdaki değerlerden biri olmamalıdır: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} \`${type}\` \`Türü olmalıdır, ` +
      `Ancak son değer şuydu: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (\`${printValue(originalValue, true)} \'değerinden döküm).`
        : '.');

    if (value === null) {
      msg +=
        `\n "NULL" boş bir değer olarak tasarlanmışsa, şemayı şöyle işaretlediğinizden emin olun` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} tam olarak ${length} karakterler olmalı',
  min: '${path} en azından ${min} karakterler olmalı',
  max: '${path} en fazla ${max} karakterler olmalı',
  matches: '${path} aşağıdakilerle eşleşmelidir: "${regex}"',
  email: '${path} geçerli bir e -posta olmalı',
  url: '${path} geçerli bir URL olmalı',
  uuid: '${path} geçerli bir UUID olmalı',
  trim: '${path} Kesilmiş bir ip olmalı',
  lowercase: '${path} küçük harfli bir ip olmalı',
  uppercase: '${path} büyük harfli bir ip olmalı',
};

export const number: LocaleObject['number'] = {
  min: "${path} ${min} 'dan büyük veya eşit olmalıdır.",
  max: "${path} ${max} 'dan az veya eşit olmalıdır.",
  lessThan: "${path} ${less} 'dan daha az olmalıdır",
  moreThan: "${path} ${more} 'dan daha büyük olmalıdır",
  positive: '${path} pozitif bir sayı olmalı',
  negative: '${path} negatif bir sayı olmalı',
  integer: '${path} bir tamsayı olmalı',
};

export const date: LocaleObject['date'] = {
  min: "${path} Alan ${min} 'dan daha geç olmalıdır",
  max: "${path} Alan ${max} 'dan daha erken olmalıdır.",
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Alan ${value} olmalıdır',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} Alan, nesne şeklinde belirtilmeyen anahtarlara sahip olamaz',
};

export const array: LocaleObject['array'] = {
  min: '${path} Alanın en az ${min} öğeleri olmalı',
  max: '${path} Alanın ${max} öğelere eşit veya daha az olması gerekir',
  length: '${path} ${length} öğeleri olmalı',
};
