/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} etibarsızdır.',
  required: '${path} tələb olunan sahədir',
  defined: '${path} müəyyən edilməlidir',
  notNull: '${path} boş ola bilməz',
  oneOf: '${path} aşağıdakı dəyərlərdən biri olmalıdır: ${values}',
  notOneOf: '${path} aşağıdakı dəyərlərdən biri olmamalıdır: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} növü \`${type}\` olmalıdır, ` +
      `Amma son dəyər belə idi: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (\`${printValue(originalValue, true)}\` dəyərindən çevrilmişdir).`
        : '.');

    if (value === null) {
      msg +=
        `\n Əgər "NULL" boş bir dəyər kimi nəzərdə tutulubsa, sxemi belə işarələdiyinizdən əmin olun` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} dəqiq olaraq ${length} simvol olmalıdır',
  min: '${path} ən azı ${min} simvol olmalıdır',
  max: '${path} ən çox ${max} simvol olmalıdır',
  matches: '${path} aşağıdakı ilə uyğun olmalıdır: "${regex}"',
  email: '${path} keçərli bir e -poçt olmalıdır',
  url: '${path} keçərli bir URL olmalıdır',
  uuid: '${path} keçərli bir UUID olmalıdır',
  trim: '${path} kəsilmiş olmalıdır',
  lowercase: '${path} kiçik hərf olmalıdır',
  uppercase: '${path} böyük hərf olmalıdır',
};

export const number: LocaleObject['number'] = {
  min: "${path} ${min} -dən böyük və ya bərabər olmalıdır.",
  max: "${path} ${max} -dən kiçik və ya bərabər olmalıdır.",
  lessThan: "${path} ${less} -dən az olmalıdır",
  moreThan: "${path} ${more} -dən çox olmalıdır",
  positive: '${path} müsbət bir ədəd olmalıdır',
  negative: '${path} mənfi bir ədəd olmalıdır',
  integer: '${path} tam ədəd olmalıdır',
};

export const date: LocaleObject['date'] = {
  min: "${path} sahə ${min} -dən sonra olmalıdır",
  max: "${path} sahə ${max} -dən əvvəl olmalıdır.",
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} sahə ${value} olmalıdır',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} sahə, təyin olunmamış açarlara sahib ola bilməz',
};

export const array: LocaleObject['array'] = {
  min: '${path} sahənin ən azı ${min} elementi olmalıdır',
  max: '${path} sahənin ${max} elementdən az və ya ona bərabər olması gərəkir',
  length: '${path} ${length} elementə malik olmalıdır',
};