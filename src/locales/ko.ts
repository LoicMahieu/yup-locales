import { printValue, LocaleObject } from 'yup';

export const mixed: LocaleObject['mixed'] = {
  default: '${path} 항목이 올바르지 않습니다.',
  required: '${path} 항목은 필수입니다.',
  defined: '${path} 항목 값이 정의되어야 합니다.',
  notNull: '${path} 항목은 null일수 없습니다.',
  oneOf: '${path} 항목은 다음 값중 하나여야 합니다: ${values}',
  notOneOf: '${path} 항목은 다음 값이 아니여야 합니다: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const castMsg =
      originalValue != null && originalValue !== value
        ? ` (\`${printValue(originalValue, true)}\` 값에서 캐스팅).`
        : '.';

    return type !== 'mixed'
      ? `${path} 항목은 \`${type}\` 타입이 필요한데, ` +
          `최종 값은: \`${printValue(value, true)}\`` +
          castMsg
      : `${path} 항목은 구성된 타입과 일치해야 합니다. ` +
          `검증 값은: \`${printValue(value, true)}\`` +
          castMsg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} 항목은 ${length} 글자여야 합니다.',
  min: '${path} 항목은 ${min} 글자이상이여야 합니다.',
  max: '${path} 항목은 ${max} 글자이하여야 합니다.',
  matches: '${path} 항목의 형식이 올바르지 않습니다: "${regex}"',
  email: '${path} 항목은 이메일형식이여야 합니다.',
  url: '${path} 항목은 URL형식이여야 합니다.',
  uuid: '${path} 항목은 UUID형식이여야 합니다.',
  trim: '${path} 항목은 압뒤공백이 없어야 합니다',
  lowercase: '${path} 항목은 소문자여야 합니다.',
  uppercase: '${path} 항목은 대문자여야 합니다.',
};

export const number: LocaleObject['number'] = {
  min: '${path} 항목은 ${min} 이상이여야 합니다.',
  max: '${path} 항목은 ${max} 이하여야 합니다.',
  lessThan: '${path} 항목은 ${less} 미만이여야 합니다.',
  moreThan: '${path} 항목은 ${more} 초과여야 합니다.',
  positive: '${path} 항목은 양수여야 합니다.',
  negative: '${path} 항목은 음수여야 합니다.',
  integer: '${path} 항목은 정수여야 합니다.',
};

export const date: LocaleObject['date'] = {
  min: '${path} 항목은 ${min} 이후여야 합니다.',
  max: '${path} 항목은 ${max} 이전이여야 합니다.',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} 항목은 ${value}여야 합니다.',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} 항목에 지정되지 않은 키가 있습니다: ${unknown}',
};

export const array: LocaleObject['array'] = {
  min: '${path} 항목의 아이템은 ${min}개 이상이여야 합니다.',
  max: '${path} 항목의 아이템은 ${max}개 이하여야 합니다.',
  length: '${path} 항목의 아이템은 ${length}개여야 합니다.',
};
