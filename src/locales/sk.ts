/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

const typeTranslations: { [key: string]: string } = {
  string: 'text',
  number: 'číslo',
  boolean: 'boolean',
  date: 'dátum',
  object: 'objekt',
  array: 'pole',
};

const getTypeTranslation = (type: string): string =>
  typeTranslations[type] ? typeTranslations[type] : type;

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} je nesprávne',
  required: '${path} je povinné pole',
  oneOf: '${path} musí byť jednou z nasledujúcich hodnôt: ${values}',
  notOneOf: '${path} nesmie byť jednou z nasledujúcich hodnôt: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} musí byť \`${getTypeTranslation(type)}\`, ` +
      `ale konečná hodnota bola: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (obsadenie z hodnoty \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Ak je „null“ určený ako prázdna hodnota, nezabudnite označiť schému ako` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} musí mať presne ${length} znakov',
  min: '${path} musí mať aspoň ${min} znakov',
  max: '${path} musí mať najviac ${max} znakov',
  matches: '${path} sa musí zhodovať s nasledujúcimi: „${regex}“',
  email: '${path} musí byť platný e -mail',
  url: '${path} musí byť platná URL adresa ',
  trim: '${path} nesmie začínať alebo končiť medzerou',
  lowercase: '${path} musí obsahovať iba malé písmená',
  uppercase: '${path} musí obsahovať iba veľké písmená',
};

export const number: LocaleObject['number'] = {
  min: '${path} musí byť väčší alebo rovný ${min}',
  max: '${path} musí byť menší alebo rovný ${max}',
  lessThan: '${path} musí byť menší ako ${less}',
  moreThan: '${path} musí byť väčší ako ${more}',
  positive: '${path} musí byť kladné číslo',
  negative: '${path} musí byť záporné číslo',
  integer: '${path} musí byť celé číslo',
};

export const date: LocaleObject['date'] = {
  min: '${path} musí byť po ${min}',
  max: '${path} musí byť pred ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} pole nemôže mať kľúče zadané v tvare objektu',
};

export const array: LocaleObject['array'] = {
  min: '${path} musí obsahovať aspoň ${min} položiek',
  max: '${path} musí obsahovať najviac ${max} položiek',
};
