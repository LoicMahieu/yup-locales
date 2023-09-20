/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} 無效。',
  required: '${path} 是必需的字段',
  oneOf: '${path} 必須是以下值之一： ${values}',
  notOneOf: '${path} 不能是以下值之一：${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} 必須是\`${type}, ` +
      `但最終值是：\`${printValue(value, true)}\`\`` +
      (isCast ? ` (從值\`${printValue(originalValue, true)}\`\`\`\'\').` : '.');

    if (value === null) {
      msg += `\n 如果“ null”是為空值，請確保將架構標記為` + ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} 必須完全是 ${length} 字符',
  min: '${path} 至少必須是 ${min} 字符',
  max: '${path} 最多必須是 ${max} 字符',
  matches: '${path} 必須匹配以下： "${regex}"',
  email: '${path} 必須是一封有效的電子郵件',
  url: '${path} 必須是有效的URL',
  trim: '${path} 必須是修剪的字符串',
  lowercase: '${path} 必須是小寫字符串',
  uppercase: '${path} 必須是大寫字符串',
};

export const number: LocaleObject['number'] = {
  min: '${path} 必須大於或等於 ${min}',
  max: '${path} 必須小於或等於 ${max}',
  lessThan: '${path} 必須小於 ${less}',
  moreThan: '${path} 必須大於 ${more}',
  positive: '${path} 必須是一個正數',
  negative: '${path} 必須是負數',
  integer: '${path} 必須是一個整數',
};

export const date: LocaleObject['date'] = {
  min: '${path} 字段必須比${min}晚。',
  max: '${path} 字段必須早於${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} 字段不能具有對象形狀中未指定的鍵',
};

export const array: LocaleObject['array'] = {
  min: '${path} 字段至少必須具有 ${min} 項目',
  max: '${path} 字段必須小於或等於 ${max} 項目',
};
