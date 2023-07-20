/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} มันไม่ถูกต้อง',
  required: '${path} เป็นฟิลด์บังคับ',
  oneOf: '${path} ต้องเป็นค่าใดค่าหนึ่งต่อไปนี้: ${values}',
  notOneOf: '${path} ต้องไม่เป็นค่าใดค่าหนึ่งต่อไปนี้: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} ต้องเป็น \`${type}\` ผู้ชาย, ` +
      `แต่ค่าสุดท้ายคือ: \`${printValue(value, true)}\`` +
      (isCast ? ` (ได้จากค่า \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg +=
        `\n ถ้า "null" จงใจให้เป็นค่าว่าง อย่าลืมทำเครื่องหมายสคีมาเป็น` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} ต้องมีอย่างแน่นอน ${length} ตัวละคร',
  min: '${path} ต้องมีอย่างน้อย ${min} ตัวละคร',
  max: '${path} ต้องมีมากที่สุด ${max} ตัวละคร',
  matches: '${path} จะต้องตรงกับข้อต่อไปนี้: "${regex}"',
  email: '${path} ต้องเป็นอีเมลที่ถูกต้อง',
  url: '${path} ต้องเป็น URL ที่ถูกต้อง',
  trim: '${path} ต้องเป็นสตริงที่ตัดแต่งแล้ว',
  lowercase: '${path} ต้องเป็นสตริงตัวพิมพ์เล็ก',
  uppercase: '${path} ต้องเป็นสตริงตัวพิมพ์ใหญ่',
};

export const number: LocaleObject['number'] = {
  min: '${path} ต้องมากกว่าหรือเท่ากับ ${min}',
  max: '${path} ต้องน้อยกว่าหรือเท่ากับ ${max}',
  lessThan: '${path} ต้องน้อยกว่า ${less}',
  moreThan: '${path} ต้องมากกว่า ${more}',
  positive: '${path} ต้องเป็นจำนวนบวก',
  negative: '${path} ต้องเป็นจำนวนลบ',
  integer: '${path} ต้องเป็นจำนวนเต็ม',
};

export const date: LocaleObject['date'] = {
  min: 'สนาม ${path} ต้องหลัง ${min}',
  max: 'สนาม ${path} ต้องมาก่อน ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: 'สนาม ${path} มีคีย์ที่ไม่ระบุในวัตถุ',
};

export const array: LocaleObject['array'] = {
  min: 'สนาม ${path} ต้องมีอย่างน้อย ${min} รายการ',
  max: 'สนาม ${path} ต้องมีมากที่สุด ${max} รายการ',
};
