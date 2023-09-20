/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} no es válido.',
  required: '${path} es un campo requerido',
  defined: '${path} debe definirse',
  notNull: '${path} no puede ser nulo',
  oneOf: '${path} debe ser uno de los siguientes valores: ${values}',
  notOneOf: '${path} no debe ser uno de los siguientes valores: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} debe ser un \`${type}\` Tipo, ` +
      `Pero el valor final fue: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (Eche el valor \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Si "nulo" está destinado a ser un valor vacío, asegúrese de marcar el esquema como` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} debe ser exactamente ${length} caracteres',
  min: '${path} debe ser al menos ${min} caracteres',
  max: '${path} debe ser como máximo ${max} caracteres',
  matches: '${path} debe coincidir con lo siguiente: "${regex}"',
  email: '${path} debe ser un correo electrónico válido',
  url: '${path} debe ser una URL válida',
  uuid: '${path} debe ser un UUID válido',
  trim: '${path} debe ser una cadena recortada',
  lowercase: '${path} debe ser una cadena en minúscula',
  uppercase: '${path} debe ser una cadena de casos superiores',
};

export const number: LocaleObject['number'] = {
  min: '${path} debe ser mayor o igual a ${min}',
  max: '${path} debe ser menor o igual a ${max}',
  lessThan: '${path} debe ser menor que ${less}',
  moreThan: '${path} debe ser mayor que ${more}',
  positive: '${path} debe ser un número positivo',
  negative: '${path} debe ser un número negativo',
  integer: '${path} debe ser un entero',
};

export const date: LocaleObject['date'] = {
  min: '${path} El campo debe ser más tarde que ${min}',
  max: '${path} El campo debe estar antes de ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} El campo debe ser ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} el campo no puede tener claves no especificadas en la forma del objeto',
};

export const array: LocaleObject['array'] = {
  min: '${path} el campo debe tener al menos ${min} elementos',
  max: '${path} El campo debe tener menos o igual a los elementos ${max}',
  length: '${path} debe tener ${length} elementos',
};
