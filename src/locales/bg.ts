/*eslint-disable no-template-curly-in-string*/

import { LocaleObject, printValue } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} е невалидно',
  required: '${path} е задължително поле',
  defined: '${path} трябва да бъде дефинирано',
  notNull: '${path} не може да бъде празно',
  oneOf: '${path} трябва да бъде една от следните стойности: ${values}',
  notOneOf: '${path} не трябва да бъде някоя от следните стойности: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} трябва да бъде \`${type}\` тип, ` +
      `Но крайната стойност беше: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (преобразувано от стойност \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Ако "null" е предвидено като празна стойност, уверете се, че схемата е маркирана като` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} трябва да бъде точно ${length} символа',
  min: '${path} трябва да бъде поне ${min} символа',
  max: '${path} трябва да бъде максимум ${max} символа',
  matches: '${path} трябва да съвпада с: "${regex}"',
  email: '${path} трябва да бъде валиден имейл',
  url: '${path} трябва да бъде валиден URL',
  uuid: '${path} трябва да бъде валиден UUID',
  trim: '${path} трябва да бъде подрязан низ',
  lowercase: '${path} трябва да бъде с малки букви',
  uppercase: '${path} трябва да бъде с големи букви',
};

export const number: LocaleObject['number'] = {
  min: '${path} трябва да бъде по-голямо или равно на ${min}',
  max: '${path} трябва да бъде по-малко или равно на ${max}',
  lessThan: '${path} трябва да бъде по-малко от ${less}',
  moreThan: '${path} трябва да бъде по-голямо от ${more}',
  positive: '${path} трябва да бъде положително число',
  negative: '${path} трябва да бъде отрицателно число',
  integer: '${path} трябва да бъде цяло число',
};

export const date: LocaleObject['date'] = {
  min: '${path} полето трябва да бъде след ${min}',
  max: '${path} полето трябва да бъде преди ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} полето трябва да бъде ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} полето има неспецифицирани ключове: ${unknown}',
};

export const array: LocaleObject['array'] = {
  min: '${path} полето трябва да има поне ${min} елемента',
  max: '${path} полето трябва да има не повече от ${max} елемента',
  length: '${path} трябва да има ${length} елемента',
};
