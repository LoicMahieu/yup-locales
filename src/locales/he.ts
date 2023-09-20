/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} אינו חוקי.',
  required: '${path} הוא שדה חובה',
  defined: '${path} חייב להיות מוגדר',
  notNull: '${path} לא יכול להיות null',
  oneOf: '${path} חייב להיות אחד הערכים הבאים: ${values}',
  notOneOf: '${path} אסור להיות אחד הערכים הבאים: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} חייב להיות סוג \'${type}\' סוג, ` +
      `אבל הערך הסופי היה: \`${printValue(value, true)}\`` +
      (isCast ? ` (יצוק מהערך \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg +=
        `\n אם "null" מיועד כערך ריק, הקפד לסמן את הסכימה כ-` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} חייב להיות בדיוק ${length} תווים',
  min: '${path} חייב להיות לפחות ${min} תווים',
  max: '${path} חייב להיות לכל היותר ${max} תווים',
  matches: '${path} חייב להתאים לדברים הבאים: "${regex}"',
  email: '${path} חייב להיות דוא"ל תקף',
  url: '${path} חייב להיות כתובת אתר תקפה',
  uuid: '${path} חייב להיות UUID תקף',
  trim: '${path} חייב להיות מחרוזת גזומה',
  lowercase: '${path} חייב להיות מחרוזת אותיות קטנות',
  uppercase: '${path} חייב להיות מחרוזת אותיות עליונות',
};

export const number: LocaleObject['number'] = {
  min: '${path} חייב להיות גדול או שווה ל- ${min}',
  max: '${path} חייב להיות פחות או שווה ל- ${max}',
  lessThan: '${path} חייב להיות פחות מ- ${less}',
  moreThan: '${path} חייב להיות גדול מ- ${more}',
  positive: '${path} חייב להיות מספר חיובי',
  negative: '${path} חייב להיות מספר שלילי',
  integer: '${path} חייב להיות מספר שלם',
};

export const date: LocaleObject['date'] = {
  min: 'שדה ${path} חייב להיות מאוחר יותר מ- ${min}',
  max: 'שדה ${path} חייב להיות מוקדם יותר מ- ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: 'שדה ${path} חייב להיות ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} שדה לא יכול להיות בעל מפתחות שלא צוינו בצורת האובייקט',
};

export const array: LocaleObject['array'] = {
  min: 'שדה ${path} חייב להיות לפחות פריטים ${min}',
  max: 'שדה ${path} חייב להיות פחות או שווה לפריטים ${max}',
  length: '${path} חייב להיות ${length} פריטים',
};
