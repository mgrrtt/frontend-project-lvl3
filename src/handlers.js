import i18next from 'i18next';

import validation from './validation';
import parser from './parser';
import getFeed from './api';

export const handleInput = (event, { urlFormData }) => {
  const form = urlFormData;

  form.status = 'filling';
  form.url = event.target.value;
  form.isUrlValid = true;

  // console.log(form);
};

export const handleSubmit = (event, { urlFormData, rssData }) => {
  event.preventDefault();

  const form = urlFormData;
  const rss = rssData;
  const queryResult = {};

  validation(form)
    .then((value) => {
      form.url = '';
      form.isUrlValid = true;
      form.urls.push(value);
      form.errors.length = 0;
      form.status = 'done';

      // console.log(form);
    })
    .catch((e) => {
      const error = i18next.t(e.errors[0].key);

      form.isUrlValid = false;

      if (!form.errors.includes(error)) { // чтобы не дублировать ошибки
        form.errors.push(error);
      }

      console.log(form);

      throw new Error('Invalid URL'); // todo: возможно есть другой способ?
    })
    .then(() => {
      const lastIndex = form.urls.length - 1;
      rss.status = 'fetching';

      console.log(rss);

      return getFeed(form.urls[lastIndex], queryResult); // это промис!
    })
    .then(() => {
      if (queryResult.success) {
        const {
          id,
          title,
          description,
          items,
        } = parser(queryResult.data);
        // todo: а если парсинг закончился ошибкой?

        rss.feeds.push([title, description, id]);
        rss.posts.push(...items);
      } else {
        throw new Error('Network response was not ok');
      }

      // console.log(queryResult);
    })
    .then(() => {
      rss.status = 'done';

      // console.log(rss);
    })
    .catch((e) => {
      console.log(e);
      // todo: расписать
    });
};
