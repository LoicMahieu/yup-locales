/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js

export const mixed: LocaleObject["mixed"] = {
  default: '${path} est invalide.',
  required: '${path} est un champ obligatoire',
  oneOf: "${path} doit être l'une des valeurs suivantes: ${values}",
  notOneOf: "${path} ne doit pas être l'une des valeurs suivantes: ${values}",
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} doit être un type \`${type}\`, ` +
      `mais la valeur finale était: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (coulée de la valeur \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Si « null » est conçue comme une valeur vide assurez-vous de marquer le schéma comme` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject["string"] = {
  length: '${path} doit être exactement ${length} caractères',
  min: '${path} doit être au moins ${min} caractères',
  max: '${path} doit être au plus ${max} caractères',
  matches: '${path} doit correspondre à ce qui suit: "${regex}"',
  email: '${path} doit être un email valide',
  url: '${path} doit être une URL valide',
  trim: '${path} doit être une chaîne garnie',
  lowercase: '${path} doit être une chaîne en minuscule',
  uppercase: '${path} doit être une chaîne de majuscules',
};

export const number: LocaleObject["number"] = {
  min: '${path} doit être supérieure ou égale à ${min}',
  max: '${path} doit être inférieur ou égal à ${max}',
  lessThan: '${path} doit être inférieure à ${less}',
  moreThan: '${path} doit être supérieure à ${more}',
  positive: '${path} doit être un nombre positif',
  negative: '${path} doit être un nombre négatif',
  integer: '${path} doit être un entier',
};

export const date: LocaleObject["date"] = {
  min: '${path} champ doit être au plus tard ${min}',
  max: 'champ ${path} doit être au plus tôt ${max}',
};

export const boolean: LocaleObject["boolean"] = {};

export const object: LocaleObject["object"] = {
  noUnknown:
    "champ ${path} ne peut pas avoir des clés non spécifiées dans la forme de l'objet",
};

export const array: LocaleObject["array"] = {
  min: 'champ ${path} doit avoir au moins ${min} articles',
  max: '${path} champ doit avoir inférieur ou égal à ${max} articles',
};
