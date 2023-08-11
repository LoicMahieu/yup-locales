/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} 這是無效的。',
  required: '${path} 是必填欄位',
  oneOf: '${path} 必須是以下值之一: ${values}',
  notOneOf: '${path} 不得為以下值之一: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} 必須是 \`${type}\` 類型, ` +
      `但最終的數值是: \`${printValue(value, true)}\`` +
      (isCast ? ` (從值中獲得 \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg += `\n 如果「null」故意為空值，請務必將架構標記為` + ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} 必須剛好是 ${length} 字元',
  min: '${path} 必須至少有 ${min} 字元',
  max: '${path} 最多必須有 ${max} 字元',
  matches: '${path} 必須匹配以下內容: "${regex}"',
  email: '${path} 必須是有效的電子郵件',
  url: '${path} 必須是有效的網址',
  trim: '${path} 必須是經過修剪的字串',
  lowercase: '${path} 必須是小寫字串',
  uppercase: '${path} 必須是大寫字串',
};

export const number: LocaleObject['number'] = {
  min: '${path} 必須大於或等於 ${min}',
  max: '${path} 必須小於或等於 ${max}',
  lessThan: '${path} 必須小於 ${less}',
  moreThan: '${path} 必須大於 ${more}',
  positive: '${path} 必須是正數',
  negative: '${path} 必須是負數',
  integer: '${path} 必須是整數',
};

export const date: LocaleObject['date'] = {
  min: '${path} 必須在之後 ${min}',
  max: '${path} 必須在之前 ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} 對像中有未指定的鍵',
};

export const array: LocaleObject['array'] = {
  min: '${path} 必須至少有 ${min} 值',
  max: '${path} 最多必須有 ${max} 值',
};
