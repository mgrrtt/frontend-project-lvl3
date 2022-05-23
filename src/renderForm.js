import i18next from 'i18next';

const renderForm = ({
  url,
  isUrlValid,
  status,
  errors,
}, element) => {
  const form = element;
  const feedback = document.querySelector('.feedback'); // поле с сообщением о результате ввода

  if (!isUrlValid) {
    feedback.classList.remove('text-success'); // цвет текста
    feedback.classList.add('text-danger');
    feedback.textContent = errors.join(', '); // todo: затирать предыдущую ошибку

    form.classList.add('error'); // цвет рамки
  } else if (isUrlValid && status === 'done') {
    const message = i18next.t('success');

    feedback.classList.remove('text-danger');
    feedback.classList.add('text-success');
    feedback.textContent = message;

    form.classList.remove('error');
    form.value = url;
    form.focus();
  } else {
    feedback.classList.remove('text-danger');
    feedback.textContent = '';

    form.classList.remove('error');
  }
};

export default renderForm;
