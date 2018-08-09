const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
  console.log('API called');
  res.send({});
});

module.exports = router;
