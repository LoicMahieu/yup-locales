/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} jest nieprawidłowy.',
  required: '${path} to pole wymagane',
  defined: '${path} należy zdefiniować',
  notNull: '${path} nie może być null',
  oneOf: '${path} musi być jedną z następujących wartości: ${values}',
  notOneOf: '${path} nie może być jedną z następujących wartości: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} musi być typem „${type}\`, ` +
      `Ale ostateczna wartość to: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (odlewana z wartości \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Jeśli „null” jest przeznaczony jako pusta wartość, pamiętaj o oznaczeniu schematu jako` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} musi być dokładnie ${length} znaki',
  min: '${path} musi być co najmniej ${min} znaki',
  max: '${path} musi być co najwyżej ${max} znaki',
  matches: '${path} musi dopasować następujące czynności: „${regex}”',
  email: '${path} musi być ważnym e -mailem',
  url: '${path} musi być ważnym adresem URL',
  uuid: '${path} musi być ważnym UUID',
  trim: '${path} musi być przyciętym ciągiem',
  lowercase: '${path} musi być małym sznurkiem',
  uppercase: '${path} musi być sznurkiem górnym',
};

export const number: LocaleObject['number'] = {
  min: '${path} musi być większy lub równy ${min}',
  max: '${path} musi być mniejsze lub równe ${max}',
  lessThan: '${path} musi być mniej niż ${less}',
  moreThan: '${path} musi być większy niż ${more}',
  positive: '${path} musi być liczbą dodatnią',
  negative: '${path} musi być liczbą ujemną',
  integer: '${path} musi być liczbą całkowitą',
};

export const date: LocaleObject['date'] = {
  min: '${path} pole musi być później niż ${min}',
  max: '${path} pole musi być wcześniej niż ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} pole musi być ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} Pole nie może mieć kluczy nie określonych w kształcie obiektu',
};

export const array: LocaleObject['array'] = {
  min: '${path} pole musi mieć przynajmniej ${min} elementy',
  max: '${path} pole musi mieć mniejsze lub równe ${max} elementy',
  length: '${path} musi mieć elementy ${length}',
};
