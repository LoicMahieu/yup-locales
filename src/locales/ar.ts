/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} غير صالح.',
  required: '${path} هو حقل مطلوب',
  defined: '${path} يجب تعريفها',
  notNull: '${path} لا يمكن أن يكون فارغًا',
  oneOf: '${path} يجب أن تكون واحدة من القيم التالية: ${values}',
  notOneOf: '${path} يجب ألا تكون واحدة من القيم التالية: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} يجب أن يكون نوعًا, ` +
      `لكن القيمة النهائية كانت: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (يلقي من القيمة \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n إذا كان المقصود "NULL" كقيمة فارغة ، فتأكد من وضع علامة على المخطط` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} يجب أن يكون بالضبط ${length} أحرف',
  min: '${path} يجب أن تكون أحرفًا على الأقل ${min}',
  max: '${path} يجب أن تكون على الأكثر ${max} أحرف',
  matches: '${path} يجب أن يتطابق مع ما يلي: "${regex}"',
  email: '${path} يجب أن يكون بريدًا إلكترونيًا صالحًا',
  url: '${path} يجب أن يكون عنوان URL صالح',
  uuid: '${path} يجب أن يكون uuid صالح',
  trim: '${path} يجب أن تكون سلسلة مقلدة',
  lowercase: '${path} يجب أن تكون سلسلة صغيرة',
  uppercase: '${path} يجب أن تكون سلسلة حالة علوية',
};

export const number: LocaleObject['number'] = {
  min: '${path} يجب أن تكون أكبر من أو تساوي ${min}',
  max: '${path} يجب أن يكون أقل من أو يساوي ${max}',
  lessThan: '${path} يجب أن يكون أقل من ${less}',
  moreThan: '${path} يجب أن تكون أكبر من ${more}',
  positive: '${path} يجب أن يكون رقمًا إيجابيًا',
  negative: '${path} يجب أن يكون رقمًا سالبًا',
  integer: '${path} يجب أن يكون عدد صحيح',
};

export const date: LocaleObject['date'] = {
  min: 'يجب أن يكون الحقل ${path} متأخراً عن ${min}',
  max: 'يجب أن يكون الحقل ${path} في وقت سابق من ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} يجب أن يكون الحقل ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} لا يمكن أن يحتوي الحقل على مفاتيح غير محددة في شكل الكائن',
};

export const array: LocaleObject['array'] = {
  min: '${path} يجب أن يكون للحقل عناصر على الأقل ${min}',
  max: '${path} يجب أن يحتوي الحقل على أقل من أو يساوي ${max} عناصر',
  length: '${path} يجب أن يكون لديها ${length} عناصر',
};
