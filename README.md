# yup-locales

Localizations for [jquense/yup](https://github.com/jquense/yup).

## Install

```
npm install -S yup-locales
```

## Usage

```js
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
setLocale(fr);
```

## Locales

Locales implemented:

- `ar`
- `bg`
- `bs`
- `cs`
- `da`
- `de`
- `en`
- `es`
- `et`
- `fi`
- `fr`
- `he`
- `hu`
- `id`
- `it`
- `ja`
- `ko`
- `lt`
- `nb`
- `nl`
- `pl`
- `pt`
- `ro`
- `ru`
- `sk`
- `sl`
- `sv`
- `th`
- `tr`
- `uk`
- `uz`
- `vi`
- `zh`
- `zhtw`

Please submit a PR with a new locale if you need it. In order to create a new locale, you could translate it automatically with `node scripts/create-locale` which will use google translate.

Please follow [`semantic-release` message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format).

Example:
`feat(locales): add locale XX`
