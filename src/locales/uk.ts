/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} недійсне',
  required: '${path} - це необхідне поле',
  defined: '${path} потрібно визначити',
  notNull: '${path} не може бути нульовим',
  oneOf: '${path} повинен бути одним із наступних значень: ${values}',
  notOneOf: '${path} не повинен бути одним із наступних значень: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} повинен бути \`${type}\` тип, ` +
      `але остаточне значення було: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (відігравати зі значення \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Якщо "null" призначений як порожнє значення, обов'язково позначте схему як` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} повинні бути саме ${length} персонажами',
  min: '${path} повинні бути принаймні ${min} персонажами',
  max: '${path} повинні бути максимум ${max} персонажами',
  matches: '${path} повинен відповідати наступному: "${regex}"',
  email: '${path} повинен бути дійсним електронним листом',
  url: '${path} повинен бути дійсною URL -адресою',
  uuid: '${path} повинен бути дійсним uuid',
  trim: '${path} повинен бути обрізаний рядок',
  lowercase: '${path} повинен бути малі рядком',
  uppercase: '${path} повинен бути верхнім рядком',
};

export const number: LocaleObject['number'] = {
  min: '${path} повинен бути більшим або рівним ${min}',
  max: '${path} повинен бути меншим або рівним ${max}',
  lessThan: '${path} повинен бути менше ${less}',
  moreThan: '${path} повинен бути більшим, ніж ${more}',
  positive: '${path} повинен бути додатним числом',
  negative: "${path} повинен бути від'ємним числом",
  integer: '${path} повинно бути цілим числом',
};

export const date: LocaleObject['date'] = {
  min: '${path} поле повинно бути пізніше ${min}',
  max: '${path} поле повинно бути раніше ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} поле повинно бути ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: "${path} поле не може мати клавіш, не вказані у формі об'єкта",
};

export const array: LocaleObject['array'] = {
  min: '${path} поле повинно мати принаймні ${min} пункти',
  max: '${path} поле повинно мати менше або дорівнює ${max} предметам',
  length: '${path} повинні мати ${length} пункти',
};
