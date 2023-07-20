/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} không hợp lệ.',
  required: '${path} là một trường bắt buộc',
  oneOf: '${path} phải là một trong các giá trị sau: ${values}',
  notOneOf: '${path} không được là một trong các giá trị sau: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} phải là kiểu \`${type}\`, ` +
      `nhưng giá trị cuối cùng là: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (được chuyển từ giá trị \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Nếu "null" được định nghĩa là một giá trị rỗng, hãy đảm bảo rằng lược đồ được đánh dấu là` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} phải đúng ${length} ký tự',
  min: '${path} phải có ít nhất ${min} ký tự',
  max: '${path} phải có ít hơn hoặc bằng ${max} ký tự',
  matches: '${path} phải phù hợp với "${regex}"',
  email: '${path} phải là một email hợp lệ',
  url: '${path} phải là một URL hợp lệ',
  trim: '${path} phải là một chuỗi không có khoảng trắng ở đầu hoặc cuối',
  lowercase: '${path} phải là chuỗi chữ thường',
  uppercase: '${path} phải là chuỗi chữ in hoa',
};

export const number: LocaleObject['number'] = {
  min: '${path} phải lớn hơn hoặc bằng ${min}',
  max: '${path} phải nhỏ hơn hoặc bằng ${max}',
  lessThan: '${path} phải nhỏ hơn ${less}',
  moreThan: '${path} phải lớn hơn ${more}',
  positive: '${path} phải là một số dương',
  negative: '${path} phải là số âm',
  integer: '${path} phải là một số nguyên',
};

export const date: LocaleObject['date'] = {
  min: '${path} phải sau ${min}',
  max: '${path} phải trước ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} phải là ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} không thể chứa các khóa không được xác định trong đối tượng',
};

export const array: LocaleObject['array'] = {
  min: '${path} phải có ít nhất ${min} mục',
  max: '${path} phải có ít hơn hoặc bằng ${max} mục',
};
