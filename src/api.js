import axios from 'axios';

import { proxy } from './consts';

export default (url, obj) => {
  const result = obj;

  // через proxy, чтобы избежать проблем с CORS
  return axios.get(`${proxy}${encodeURIComponent(url)}`)
    .then((response) => {
      result.data = response.data.contents;
      result.success = true;
    })
    .catch((error) => {
      result.data = error;
      result.success = false;
    });
};
// todo: Учесть ненадёжность сети!
