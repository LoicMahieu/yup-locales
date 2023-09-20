/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: "${path} n'est pas valide.",
  required: '${path} est un champ requis',
  defined: '${path} doit être défini',
  notNull: '${path} ne peut pas être nul',
  oneOf: "${path} doit être l'une des valeurs suivantes: ${values}",
  notOneOf: "${path} ne doit pas être l'une des valeurs suivantes: ${values}",
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} doit être un type \`${type}\`, ` +
      `Mais la valeur finale était: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (coulé à partir de la valeur \`${printValue(
            originalValue,
            true
          )}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Si "null" est conçu comme une valeur vide, assurez-vous de marquer le schéma comme` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} doit être exactement ${length} caractères',
  min: '${path} doit être au moins ${min} caractères',
  max: '${path} doit être au plus ${max} caractères',
  matches: '${path} doit correspondre à ce qui suit: "${regex}"',
  email: '${path} doit être un e-mail valide',
  url: '${path} doit être une URL valide',
  uuid: '${path} doit être un uuid valide',
  trim: '${path} doit être une chaîne taillée',
  lowercase: '${path} doit être une chaîne en minuscules',
  uppercase: '${path} Doit être une chaîne en majuscules',
};

export const number: LocaleObject['number'] = {
  min: '${path} doit être supérieur ou égal à ${min}',
  max: '${path} doit être inférieur ou égal à ${max}',
  lessThan: '${path} doit être inférieur à ${less}',
  moreThan: '${path} doit être supérieur à ${more}',
  positive: '${path} doit être un nombre positif',
  negative: '${path} doit être un nombre négatif',
  integer: '${path} doit être un entier',
};

export const date: LocaleObject['date'] = {
  min: '${path} Le champ doit être plus tard que ${min}',
  max: '${path} Le champ doit être plus tôt que ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Le champ doit être ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    "${path} Le champ ne peut pas avoir des clés non spécifiées dans la forme de l'objet",
};

export const array: LocaleObject['array'] = {
  min: '${path} Le champ doit avoir au moins ${min} des articles',
  max: '${path} Le champ doit avoir moins ou égal à ${max}',
  length: '${path} doit avoir ${length} des articles',
};
