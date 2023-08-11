/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} является недействительным.',
  required: '${path} - необходимое поле',
  defined: '${path} должен быть определен',
  notNull: '${path} не может быть нулевым',
  oneOf: '${path} должен быть одним из следующих значений: ${values}',
  notOneOf: '${path} не должен быть одним из следующих значений: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} должен быть \`${type}\` тип, ` +
      `Но окончательное значение было: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (бросить из значения \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Если «нуль» предназначено как пустое значение, обязательно отметить схему как` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} должен быть точно ${length} символы',
  min: '${path} должен быть как минимум ${min} символы',
  max: '${path} должен быть не более максимум ${max} символы',
  matches: '${path} должен соответствовать следующему: "${regex}"',
  email: '${path} Должен быть действительным электронным письмом',
  url: '${path} должен быть действительный URL',
  uuid: '${path} должен быть действительным UUID',
  trim: '${path} Должен быть обрезанной строкой',
  lowercase: '${path} Должен быть строчной строкой',
  uppercase: '${path} должна быть строка верхнего чехла',
};

export const number: LocaleObject['number'] = {
  min: '${path} должен быть больше или равен ${min}',
  max: '${path} должно быть меньше или равна ${max}',
  lessThan: '${path} должно быть меньше, чем ${less}',
  moreThan: '${path} должен быть больше, чем ${more}',
  positive: '${path} должно быть положительным числом',
  negative: '${path} должно быть отрицательным числом',
  integer: '${path} должно быть целым числом',
};

export const date: LocaleObject['date'] = {
  min: '${path} Поле должно быть позже ${min}',
  max: '${path} Поле должно быть в более раннем, чем ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Поле должно быть ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: 'Поле ${path} не может иметь ключи, не указанные в форме объекта',
};

export const array: LocaleObject['array'] = {
  min: '${path} Поле должно иметь по крайней мере ${min} элементы',
  max: '${path} Поле должно иметь меньше или равное ${max} элементам',
  length: '${path} должны иметь ${length} элементы',
};
