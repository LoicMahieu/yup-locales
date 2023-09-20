/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path}无效。',
  required: '${path}是必需的字段',
  defined: '${path}必须定义',
  notNull: '${path}不能无效',
  oneOf: '${path}必须是以下值之一：${values}',
  notOneOf: '${path}不能是以下值之一：${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path}必须是\`${type}, ` +
      `但最终值是：\`${printValue(value, true)}\`\`` +
      (isCast ? ` (从值\`${printValue(originalValue, true)}\`\`\`\'\').` : '.');

    if (value === null) {
      msg += `\n 如果“null”故意为空值, 请务必将架构标记为` + ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path}必须完全是${length}字符',
  min: '${path}至少必须是${min}字符',
  max: '${path}最多必须是${max}字符',
  matches: '${path}必须匹配以下：“ ${regex}”',
  email: '${path}必须是一封有效的电子邮件',
  url: '${path}必须是有效的URL',
  uuid: '${path}必须是有效的UUID',
  trim: '${path}必须是修剪的字符串',
  lowercase: '${path}必须是小写字符串',
  uppercase: '${path}必须是大写字符串',
};

export const number: LocaleObject['number'] = {
  min: '${path}必须大于或等于${min}',
  max: '${path}必须小于或等于${max}',
  lessThan: '${path}必须小于${less}',
  moreThan: '${path}必须大于${more}',
  positive: '${path}必须是一个正数',
  negative: '${path}必须是负数',
  integer: '${path}必须是一个整数',
};

export const date: LocaleObject['date'] = {
  min: '${path}字段必须比${min}晚。',
  max: '${path}字段必须早于${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path}字段必须为${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path}字段不能具有对象形状中未指定的键',
};

export const array: LocaleObject['array'] = {
  min: '${path}字段至少必须具有${min}项目',
  max: '${path}字段必须小于或等于${max}项目',
  length: '${path}必须有${length}项目',
};
