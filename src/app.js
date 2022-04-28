import onChange from 'on-change';

import { handleInput, handleSubmit } from './handlers';
import render from './render';

export default () => {
  const state = {
    url: '',
    isUrlValid: true,
    errors: [],
    urls: [],
  };

  const form = document.querySelector('form');
  const input = form.url;

  const watchedState = onChange(state, (path, value) => {
    if (path !== 'url' || (path === 'url' && value === '')) {
      render(state, input);
      // console.log(state);
    }
    // console.log(state);
  });

  input.addEventListener('input', (event) => handleInput(event, watchedState));
  form.addEventListener('submit', (event) => handleSubmit(event, watchedState, state));
};
