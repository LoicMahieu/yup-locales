/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} לא קיים או לא תקין',
  required: '${path} הינו שדה חובה',
  oneOf: 'על ${path} להיות מהערכים הבאים: ${values}',
  notOneOf: 'אסור ${path} להיות מהערכים הבאים: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} חייב להיות מסוג \`${type}\`, ` +
      `אבל התקבל: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (cast from the value \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} חייב להכיל ${length} תווים בדיוק',
  min: '${path} חייב להכיל לפחות ${min} תווים',
  max: '${path} חייב להכיל פחות מ${max} תווים',
  matches: '${path} חייב להיות זהה ל: "${regex}"',
  email: '${path} צריך להיות מייל חוקי',
  url: '${path} צריך להיות כתובת חוקית',
  trim: '${path} must be a trimmed string',
  lowercase: '${path} must be a lowercase string',
  uppercase: '${path} must be a upper case string',
};

export const number: LocaleObject['number'] = {
  min: '${path} חייב להיות גדול או שווה ל ${min}',
  max: '${path}חייב להיות קטן או שווה ל ${max}',
  lessThan: '${path} חייב להיות קטן מ ${less}',
  moreThan: '${path} חייב להיות גדול מ ${more}',
  positive: '${path} מוכרח להיות חיובי',
  negative: '${path} מוכרח להיות שלילי',
  integer: '${path} חייב להיות מספר שלם',
};

export const date: LocaleObject['date'] = {
  min: '${path} צריך להיות אחרי ${min}',
  max: '${path} צריך להיות לפני ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} חייב להכיל את התבנית הספציפית של אובייקט התבנית',
};

export const array: LocaleObject['array'] = {
  min: '${path} צריך להכיל לפחות ${min} פריטים',
  max: '${path} צריך להכיל פחות מ ${max} פריטים',
};
