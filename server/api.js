const express = require('express');
const router = express.Router();
const check = require('./auth').check;
const db = require('./db');
const flags = require('./flags').map(
  ({country, flag_base64}) => ({[country.toLowerCase()]: flag_base64})
).reduce(
  (a, b) => Object.assign(a, b),
  {}
);

router.all('/', (req, res) => {
  console.log('API called');
  res.send({});
});

// should be router.put('/favorites')
router.post('/updateFavorites', check, (req, res) => {
  const username = req.session.passport.user;
  const favorites = req.body;

  db.updateFavorites(username, favorites, (err, data) => res.send(err || data));
});

router.all('/flag/:country', (req, res) => {
  const data = flags[req.params.country].slice('data:image\/svg+xml;base64,'.length);
  const img = new Buffer(data, 'base64');

  res.writeHead(200, {
    'Content-Type': 'image/svg',
    'Content-Length': img.length
  });
  res.end(img);
  // res.end(flags[req.params.country], 'base64');
});

module.exports = router;
