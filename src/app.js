import onChange from 'on-change';

import init from './init';
import renderForm from './renderForm';
import renderFeeds from './renderFeeds';
import { handleInput, handleSubmit } from './handlers';

export default () => {
  init(); // настройка i18next

  const state = {
    urlFormData: {
      url: '',
      isUrlValid: true,
      urls: [],
      errors: [],
      status: 'filling', // 'done'
    },
    rssData: {
      feeds: [],
      posts: [],
      errors: [],
      status: 'done', // 'fetching', 'error'
    },
    ui: {
      isModalShown: false,
    },
  };

  const form = document.querySelector('form');
  const input = form.url;

  const posts = document.querySelector('.posts');

  const watchedState = onChange(state, (path, value) => {
    if (path !== 'urlFormData.url' || (path === 'urlFormData.url' && value === '')) {
      renderForm(state.urlFormData, input);
      // console.log(state);
    }

    if (path === 'rssData.status' && value === 'done') {
      renderFeeds(state.rssData, posts);
      console.log('render rss');
    }
  });

  input.addEventListener('input', (event) => handleInput(event, watchedState));
  form.addEventListener('submit', (event) => handleSubmit(event, watchedState));
};
