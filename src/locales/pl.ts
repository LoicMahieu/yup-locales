/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: 'Pole ${path} jest niepoprawne',
  required: 'Pole ${path} jest wymagane',
  oneOf: 'Pole ${path} musi mieć jedną z następujących wartości: ${values}',
  notOneOf:
    'Pole ${path} nie może mieć jednej z następujących wartości: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `Pole ${path} musi być typu „${type}\`, ` +
      `ale ostateczna wartość to: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (rzutowana z wartości \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Jeśli „null” jest przeznaczony jako pusta wartość, pamiętaj, aby oznaczyć schemat jako` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: 'Pole ${path} musi być dokładnie ${length} znaków',
  min: 'Pole ${path} musi być co najmniej ${min} znaków',
  max: 'Pole ${path} może mieć co najwyżej ${max} znaków',
  matches: 'Pole ${path} musi pasować do następującego wzorca: „${regex}”',
  email: 'Pole ${path} musi być poprawnym adresem email',
  url: 'Pole ${path} musi być poprawnym adresem URL',
  trim: 'Pole ${path} musi być tekstem bez spacji na początku i na końcu',
  lowercase: 'Pole ${path} może mieć tylko małe litery',
  uppercase: 'Pole ${path} może mieć tylko wielkie litery',
};

export const number: LocaleObject['number'] = {
  min: 'Pole ${path} musi być liczbą większą lub równą ${min}',
  max: 'Pole ${path} musi być liczą mniejszą lub równą ${max}',
  lessThan: 'Pole ${path} musi być liczbą mniejszą od ${less}',
  moreThan: 'Pole ${path} musi być liczbą większą od ${more}',
  positive: 'Pole ${path} musi być liczbą dodatnią',
  negative: 'Pole ${path} musi być liczbą ujemną',
  integer: 'Pole ${path} musi być liczbą całkowitą',
};

export const date: LocaleObject['date'] = {
  min: 'Pole ${path} musi zawierać datę późniejszą niż ${min}',
  max: 'Pole ${path} musi zawierać datę wcześniejszą niż ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: 'Pole ${path} nie może zawierać nieznanych kluczy',
};

export const array: LocaleObject['array'] = {
  min: 'Pole ${path} musi zawierać co najmniej ${min} elementów',
  max: 'Pole ${path} może zawierać co najwyżej ${max} elementów',
};
