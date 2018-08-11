import axios from 'axios';

import {key, url} from './api-config.json';

const footballAPI = (endpoint) => axios.get(url + endpoint, {
  headers: {
    'X-Mashape-Key': key
  }
}).then(res => {
  console.log(res.data.data);
  return res.data.data;
});

const serverUrl = 'http://localhost:3000/';

const serverAPI = (endpoint) => axios.post(serverUrl + endpoint, {
  // headers: {
  // }
}).then(res => {
  console.log(res);
  return res;
});

// for development only
window.fb = footballAPI;
window.sa = serverAPI;

export {footballAPI, serverAPI};