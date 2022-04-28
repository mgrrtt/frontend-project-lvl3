/* eslint-disable no-param-reassign */

const render = ({ url, isUrlValid, errors }, element) => {
  if (!isUrlValid) {
    element.classList.add('error');
    element.blur();
    console.log(errors);
  } else {
    element.classList.remove('error');
    element.value = url;
    element.focus();
  }
};

export default render;
