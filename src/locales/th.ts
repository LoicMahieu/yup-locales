/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} ไม่ถูกต้อง',
  required: '${path} เป็นฟิลด์ที่จำเป็น',
  defined: '${path} ต้องกำหนด',
  notNull: '${path} ไม่สามารถเป็นโมฆะได้',
  oneOf: '${path} ต้องเป็นหนึ่งในค่าต่อไปนี้: ${values}',
  notOneOf: '${path} ต้องไม่เป็นหนึ่งในค่าต่อไปนี้: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} ต้องเป็น \`${type}\` ประเภท, ` +
      `แต่ค่าสุดท้ายคือ: \`${printValue(value, true)}\`` +
      (isCast ? ` (หล่อจากค่า \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg +=
        `\n หาก "null" มีวัตถุประสงค์เพื่อเป็นค่าว่างให้แน่ใจว่าทำเครื่องหมายสคีมาเป็น` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} ต้องเป็นตัวละคร ${length}',
  min: '${path} อย่างน้อย ${min} ตัวละคร',
  max: '${path} ต้องเป็นตัวละครมากที่สุด ${max}',
  matches: '${path} ต้องตรงกับสิ่งต่อไปนี้: "${regex}"',
  email: '${path} ต้องเป็นอีเมลที่ถูกต้อง',
  url: '${path} ต้องเป็น URL ที่ถูกต้อง',
  uuid: '${path} ต้องเป็น UUID ที่ถูกต้อง',
  trim: '${path} ต้องเป็นสตริงที่ถูกตัดแต่ง',
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
  min: '${path} ฟิลด์ต้องช้ากว่า ${min}',
  max: '${path} ฟิลด์ต้องอยู่ที่เร็วกว่า ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} ฟิลด์ต้องเป็น ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} ฟิลด์ไม่สามารถระบุคีย์ได้ในรูปร่างของวัตถุ',
};

export const array: LocaleObject['array'] = {
  min: '${path} ฟิลด์ต้องมีอย่างน้อย ${min} รายการ',
  max: '${path} ฟิลด์ต้องมีน้อยกว่าหรือเท่ากับ ${max} รายการ',
  length: '${path} ต้องมี ${length} รายการ',
};
