import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dull-pear-cocoon-vest.cyclic.app',
});

export default api;
