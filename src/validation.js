import { string, setLocale } from 'yup';

export default ({ url, urls }) => {
  // кастомные тексты ошибок
  setLocale({
    mixed: {
      default: () => ({ key: 'default' }),
      notOneOf: () => ({ key: 'exists' }),
    },
    string: {
      url: () => ({ key: 'wrong_format' }),
    },
  });

  const urlString = string().url().notOneOf(urls);

  return urlString.validate(url); // это промис!
};
