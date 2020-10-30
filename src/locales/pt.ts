/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} é inválido.',
  required: '${path} é um campo obrigatório',
  oneOf: '${path} deve ser um dos seguintes valores: ${values}',
  notOneOf: '${path} não deve ser um dos seguintes valores: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} deve ser um tipo de "__2 __]", ` +
      `Mas o valor final foi: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (Elenco do valor \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Se "null" pretender como um valor vazio, certifique-se de marcar o esquema como` +
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
  email: '${path} deve ser um email válido',
  url: '${path} deve ser um URL válido',
  trim: '${path} deve ser uma corda aparada',
  lowercase: '${path} deve ser uma cadeia minúscula',
  uppercase: '${path} deve ser uma cadeia maiúscula',
};

export const number: LocaleObject['number'] = {
  min: '${path} deve ser maior ou igual a ${min}',
  max: '${path} deve ser menor ou igual a ${max}',
  lessThan: '${path} deve ser menor que ${less}',
  moreThan: '${path} deve ser maior que ${more}',
  positive: '${path} deve ser um número positivo',
  negative: '${path} deve ser um número negativo',
  integer: '${path} deve ser um inteiro',
};

export const date: LocaleObject['date'] = {
  min: 'Campo ${path} deve ser mais tarde do que ${min}',
  max: '${path} deve ser mais cedo do que ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    'Campo ${path} não pode ter chaves não especificadas na forma do objeto',
};

export const array: LocaleObject['array'] = {
  min: 'O campo ${path} deve ter pelo menos ${min} itens',
  max: 'O campo ${path} deve ter menos ou igual a itens ${max}',
};
