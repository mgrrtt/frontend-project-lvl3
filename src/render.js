/* eslint-disable no-param-reassign */
import i18next from 'i18next';

const render = ({ url, isUrlValid, errors }, element) => {
  const feedback = document.querySelector('.feedback');

  if (!isUrlValid) {
    feedback.classList.remove('text-success');
    feedback.classList.add('text-danger');
    feedback.textContent = errors;

    element.classList.add('error');
    element.blur();
  } else {
    const message = i18next.t('success');

    feedback.classList.remove('text-danger');
    feedback.classList.add('text-success');
    feedback.textContent = message; // подумать

    element.classList.remove('error');
    element.value = url;
    element.focus();
  }
};

export default render;
