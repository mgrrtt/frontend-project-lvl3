import i18next from 'i18next';

export default () => {
  i18next.init({
    lng: 'ru',
    debug: false,
    resources: {
      ru: {
        translation: {
          success: 'RSS успешно загружен',
          default: 'Некорректный воод',
          exists: 'RSS уже существует',
          wrong_format: 'Ссылка должна быть валидным URL',
        },
      },
    },
  });
};
