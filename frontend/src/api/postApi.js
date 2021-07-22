import axios from 'axios';

const header = {
  header: {
    'Content-Type': 'application/json',
  },
};
export const postApi = (url, data) => axios.post(url, data, header);

export const getApi = (url) => axios.get(url, header);
