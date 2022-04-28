/* eslint-disable no-param-reassign */
import validation from './validation';

export const handleInput = (event, watchedState) => {
  watchedState.url = event.target.value;
  watchedState.isUrlValid = true;
};

export const handleSubmit = (event, watchedState, state) => {
  event.preventDefault();

  validation(state)
    .then((value) => {
      watchedState.isUrlValid = true;
      watchedState.errors.length = 0;
      watchedState.urls.push(value);
      watchedState.url = '';
    })
    .catch((e) => {
      watchedState.isUrlValid = false;

      if (!state.errors.includes(e.message)) {
        watchedState.errors.push(e.message);
      }
    });
};
