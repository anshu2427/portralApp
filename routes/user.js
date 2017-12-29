var express = require('express');
var router = express.Router();



var Register = require('../models/register');
var Result = require('../models/result');
var Center = require('../models/center');
var Event = require('../models/event');



/* GET registration page page. */
router.get('/registration', function(req, res, next) {
  res.render('user/registration', { title: 'Express' });
});

router.get('/result', function(req, res, next) {
  res.render('user/result', { title: 'Result Search' });
});

router.get('/home', function(req, res, next) {
  res.render('user/home', { title: 'home page' });
});

/* GET Admin pages. */

router.get('/adminhome', function(req, res, next) {
  res.render('user/adminhome', { title: 'Add Cover Photo' });
});

router.get('/addcover', function(req, res, next) {
  res.render('user/addcover', { title: 'Add Cover Photo' });
});

router.get('/addcenter', function(req, res, next) {
  res.render('user/addcenter', { title: 'Add Center Detail' });
});

router.get('/addcourse', function(req, res, next) {
  res.render('user/addcourse', { title: 'Add Course Info' });
});

router.get('/addnews', function(req, res, next) {
  res.render('user/addnews', { title: 'Add News And Events' });
});

router.get('/adminsettings', function(req, res, next) {
  res.render('user/adminsettings', { title: 'Admin Settings' });
});

router.get('/showcenter', function(req, res, next) {
  res.render('user/showcenter', { title: 'Show Center List ' });
});

router.get('/shownews', function(req, res, next) {
  res.render('user/shownews', { title: 'Show News ' });
});

router.get('/showregister', function(req, res, next) {
  res.render('user/showregister', { title: 'Show register' });
});

router.get('/showcourses', function(req, res, next) {
  res.render('user/showcourses', { title: 'Show Course' });
});

router.get('/uploadresult', function(req, res, next) {
  res.render('user/uploadresult', { title: 'upload result' });
});

router.get('/showuploadresult', function(req, res, next) {
  res.render('user/showuploadresult', { title: 'Show upload result' });
});

module.exports = router;

