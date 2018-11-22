var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const obj = {
    cat: 'cat',
    dog: 'dog',
      pig:'pig'
  };
  res.send(obj);
});

module.exports = router;
