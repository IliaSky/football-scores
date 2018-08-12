import axios from 'axios';
import shortid from 'shortid';

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

const userInfo = {favorites: []};

const auth = {
  login: (data) => serverAPI('auth/login', data).then((data) => {
    Object.assign(userInfo, data.data);
    auth.isLogged = true;
  }).catch(err => {
    console.log(err);
    auth.isLogged = false;
    throw err;
  }),
  register: (data) => serverAPI('auth/register', data),
  logout: () => serverAPI('auth/logout').then(() => {
    auth.isLogged = false;
    window.location.reload(); // flux is needed
  })
};

const favorites = {
  items: () => userInfo.favorites || [],
  subscribers: [],
  has: ({name, id}) => favorites.items().some(e => e.name === name || e.id === id),
  add: ({name, id}) => {
    if (!favorites.has({name, id})) {
      userInfo.favorites.push({name, id: id || shortid.generate()});
      favorites.subscribers.forEach(e => e(userInfo.favorites));
    }
  },
  subscribe: (func) => {
    const id = shortid.generate();
    favorites.subscribers.push({func, id});
    return () => favorites.unsubscribe(id);
  },
  unsubscribe: (id) => {
    favorites.subscribers = favorites.subscribers.filter(e => e.id !== id);
  }
};

// for development only
window.fb = footballAPI;
window.sa = serverAPI;

export {footballAPI, serverAPI, auth, userInfo, favorites};