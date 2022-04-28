import { string } from 'yup';

export default ({ url, urls }) => {
  const urlString = string().url().notOneOf(urls);

  return urlString.validate(url); // это промис!
};
