/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} 这是无效的。',
  required: '${path} 是必填字段',
  oneOf: '${path} 必须是以下值之一: ${values}',
  notOneOf: '${path} 不得为以下值之一: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} 必须是 \`${type}\` 盖伊, ` +
      `但最终的价值是: \`${printValue(value, true)}\`` +
      (isCast ? ` (从值中获得 \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg += `\n 如果“null”故意为空值，请务必将架构标记为` + ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} 必须准确地 ${length} 人物',
  min: '${path} 必须至少有 ${min} 人物',
  max: '${path} 最多必须有 ${max} 人物',
  matches: '${path} 必须匹配以下内容: "${regex}"',
  email: '${path} 必须是有效的电子邮件',
  url: '${path} 必须是有效的网址',
  trim: '${path} 必须是经过修剪的字符串',
  lowercase: '${path} 必须是小写字符串',
  uppercase: '${path} 必须是大写字符串',
};

export const number: LocaleObject['number'] = {
  min: '${path} 必须大于或等于 ${min}',
  max: '${path} 必须小于或等于 ${max}',
  lessThan: '${path} 必须小于 ${less}',
  moreThan: '${path} 必须大于 ${more}',
  positive: '${path} 必须是正数',
  negative: '${path} 必须是负数',
  integer: '${path} 必须是整数',
};

export const date: LocaleObject['date'] = {
  min: '场地 ${path} 必须在之后 ${min}',
  max: '场地 ${path} 必须在之前 ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '场地 ${path} 对象中有未指定的键',
};

export const array: LocaleObject['array'] = {
  min: '场地 ${path} 必须至少有 ${min} 项目',
  max: '场地 ${path} 最多必须有 ${max} 项目',
};
