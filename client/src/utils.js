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

const serverAPI = (endpoint, data) => axios.post(serverUrl + endpoint, data).then(res => {
  console.log(res);
  return res;
});

const auth = {
  login: (data) => serverAPI('auth/login', data).then(() => {
    auth.isLogged = true;
  }).catch(err => {
    console.log(err);
    auth.isLogged = false;
    throw err;
  }),
  register: (data) => serverAPI('auth/register', data),
  logout: () => serverAPI('auth/logout').then(() => {auth.isLogged = false})
};

// for development only
window.fb = footballAPI;
window.sa = serverAPI;

export {footballAPI, serverAPI, auth};