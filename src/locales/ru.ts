/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} содержит ошибку',
  required: 'Поле ${path} обязательное для заполнения',
  oneOf: 'Поле ${path} должно содержать одно из следующих значение: ${values}',
  notOneOf:
    'Поле ${path} не должно содержать одно из следующих значение: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `Поле ${path} должно быть  \`${type}\` типом, ` +
      `но финальное значение: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (приведено из значения \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg += `\n Если "null" является пустым значением, убедитесь что схема помечена как \`.nullable()\``;
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: 'Поле ${path} должно иметь длину ${length} символов',
  min: 'Поле ${path} должно содержать минимум ${min} символов',
  max: 'Поле ${path} должно содержать не более ${max} символов',
  matches:
    'Поле ${path} должно совпадать со следующим регулярном выражением: „${regex}”',
  email: 'Поле ${path} должно быть электронной почтой',
  url: 'Поле ${path} должно быть валидной ссылкой',
  trim: 'Поле ${path} не должно содержать в начале или в конце пробелы',
  lowercase: 'Поле ${path} должно быть в нижним регистре',
  uppercase: 'Поле ${path} должно быть в верхнем регистре',
};

export const number: LocaleObject['number'] = {
  min: 'Поле ${path} должно быть больше или равно ${min}',
  max: 'Поле ${path} должно быть меньше или равно ${max}',
  lessThan: 'Поле ${path} должно быть меньше чем ${less}',
  moreThan: 'Поле ${path} должно быть больше ${more}',
  positive: 'Поле ${path} должно быть положительном числом',
  negative: 'Поле ${path} должно быть негативном числом',
  integer: 'Поле ${path} должно быть целым числом',
};

export const date: LocaleObject['date'] = {
  min: 'Поле ${path} не может быть меньше начальной ${min}',
  max: 'Поле ${path} не может быть больше конечной ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: 'Поле ${path} должно иметь значение: ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: 'Поле ${path} не может содержать неизвестные ключи',
};

export const array: LocaleObject['array'] = {
  min: 'Поле ${path} должно быть указано не менее ${min} элементов',
  max: 'Поле ${path} должно быть указано не более ${max} элементов',
};
