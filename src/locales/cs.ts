/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
const typeTranslations: { [key: string]: string } = {
  string: 'text',
  number: 'číslo',
  boolean: 'boolean',
  date: 'datum',
  object: 'objekt',
  array: 'pole',
};

const getTypeTranslation = (type: string): string =>
  typeTranslations[type] ? typeTranslations[type] : type;

export const mixed: LocaleObject['mixed'] = {
  default: '${path} je nesprávné',
  required: '${path} je povinné pole',
  oneOf: '${path} musí být jednou z nasledujících hodnot: ${values}',
  notOneOf: '${path} nesmí být jednou z nasledujících hodnot: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} musí být \`${getTypeTranslation(type)}\`, ` +
      `ale konečná hodnota byla: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (obsadenie z hodnoty \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Pokud je „null“ určený jako prázdná hodnota, nezapoměňte označit schéma jako` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} musí mít ${length} znaků',
  min: '${path} musí mít alespoň ${min} znaků',
  max: '${path} musí mít nanejvýš ${max} znaků',
  matches: '${path} se musí shodovat s následujícími: „${regex}“',
  email: '${path} musí být platný e-mail',
  url: '${path} musí být platná URL adresa ',
  trim: '${path} nemůže začínat nebo končit mezerou',
  lowercase: '${path} musí obsahovat pouze malá písmena',
  uppercase: '${path} musí obsahovat pouze velká písmena',
};

export const number: LocaleObject['number'] = {
  min: '${path} musí být větší nebo rovno ${min}',
  max: '${path} musí být menší nebo rovno ${max}',
  lessThan: '${path} musí být měnší než ${less}',
  moreThan: '${path} musí být větší než ${more}',
  positive: '${path} musí být kladné číslo',
  negative: '${path} musí být záporné číslo',
  integer: '${path} musí být celé číslo',
};

export const date: LocaleObject['date'] = {
  min: '${path} musí být po ${min}',
  max: '${path} musí být před ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} pole nemůže mít klíče zadané ve tvaru objektu',
};

export const array: LocaleObject['array'] = {
  min: '${path} musí obsahovat alespoň ${min} položek',
  max: '${path} musí obsahovat maximálně ${max} položek',
};
