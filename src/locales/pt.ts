/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} é inválido.',
  required: '${path} é um campo necessário',
  defined: '${path} deve ser definido',
  notNull: '${path} não pode ser nulo',
  oneOf: '${path} deve ser um dos seguintes valores: ${values}',
  notOneOf: '${path} não deve ser um dos seguintes valores: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} deve ser um \`${type}, ` +
      `Mas o valor final foi: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (lançado do valor \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Se "nulo" for destinado a um valor vazio, marque o esquema como` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} deve ser exatamente ${length} caracteres',
  min: '${path} deve ser pelo menos ${min} caracteres',
  max: '${path} deve ser no máximo ${max} caracteres',
  matches: '${path} deve corresponder ao seguinte: "${regex}"',
  email: '${path} deve ser um e -mail válido',
  url: '${path} deve ser um URL válido',
  uuid: '${path} deve ser um UUID válido',
  trim: '${path} deve ser uma corda aparada',
  lowercase: '${path} deve ser uma corda minúscula',
  uppercase: '${path} deve ser uma corda de caixa superior',
};

export const number: LocaleObject['number'] = {
  min: '${path} deve ser maior ou igual a ${min}',
  max: '${path} deve ser menor ou igual a ${max}',
  lessThan: '${path} deve ser menor que ${less}',
  moreThan: '${path} deve ser maior que ${more}',
  positive: '${path} deve ser um número positivo',
  negative: '${path} deve ser um número negativo',
  integer: '${path} deve ser um número inteiro',
};

export const date: LocaleObject['date'] = {
  min: '${path} O campo deve ser posterior a ${min}',
  max: '${path} O campo deve ser mais cedo que ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} O campo deve ser ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} O campo não pode ter chaves não especificadas na forma do objeto',
};

export const array: LocaleObject['array'] = {
  min: '${path} O campo deve ter pelo menos ${min} itens',
  max: '${path} O campo deve ter menos ou igual a ${max} itens',
  length: '${path} deve ter ${length} itens',
};
