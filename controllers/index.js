var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mukul Hooda' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me!' });
});

/* GET About Page */
router.get('/about',function(req, res, next) {
  res.render('about', { title: 'About Me!' });
});

/* GET Project Page */
router.get('/project',function(req, res, next) {
  res.render('project', { title: 'About Me!' });
});


module.exports = router;
