var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  if (req.body.username == 'root' && req.body.password == 'toor') {
    res.render('index', { user: 'root' });
  } else {
    res.render('login', { message: 'The administrator username and password is root, toor ! Enjoy :)' });
  }
});

module.exports = router;
