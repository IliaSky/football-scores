const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('API called');
  res.send({});
});

module.exports = router;
