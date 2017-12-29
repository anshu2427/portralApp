var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var multer = require('multer');

var Event = mongoose.Event;
var Result = mongoose.Result;
var Register = mongoose.Register;




var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    const now = new Date().toISOString(); const date = now.replace(/:/g, '-'); cb(null, date + file.originalname);
  }
});

var fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

 var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

var Register = require('../models/register');
var Result = require('../models/result');
var Center = require('../models/center');
var Event = require('../models/event');


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('layouts/layout', { title: 'Express' });
});



*/

router.get('/', function(req, res, next) {

 res.render('user/home', { title: 'Brand Name' });

});


router.get('/user/showregistera', function(req, res, next){
Register.find()
.then(function(doc){
res.render('user/showregister', {infos: doc});
});
});

router.get('/user/showuploadresulta', function(req, res, next){
Result.find()
.then(function(doc){
res.render('user/showuploadresult', {resulters: doc});
});
});

router.get('/home', function(req, res, next){
Event.find()
.then(function(doc){
res.render('user/home', {coverers: doc});
});
});


router.get('/user/shownewsa', function(req, res, next){
Event.find()
.then(function(doc){
res.render('user/shownews', {coverers: doc});
});
});

/*

router.get('/result', function(req, res, next){
Result.findById(resultId, function(err , result){
 if(req.query['rcourse'] && req.query['ryear'] && req.query['rrollnumber'] && req.query['rdob'] !== true){
   return next(401);
  } else {
res.status(200).json({
	message: 'sdhbdshbd'
});  };

}
 
	)
.then(function(doc){
res.render('user/result', {coverers: doc});
});
});

*/

router.get('/user/result/', function(req, res){
	const id = req.params; debugger;
Result.find({rrollnumber:req.params.rollnumber}, function(err, result){
if(err){
    	return res.redirect('/');console.log(err);

} else{
		res.render('/user/home', {result : result});console.log(result);
}
});

});


router.post('/user/registration', function(req, res, next){

	var info = { branch: req.body.branch,
		course: req.body.course,
		training: req.body.training,
		fullname: req.body.fullname,
		qualification: req.body.qualification,
		dob: req.body.dob,
		email: req.body.email,
		address: req.body.address,
		contact: req.body.contact
	};

	var data = new Register(info);
	data.save();
	console.log(req.body);
	console.log(req.file);

	res.redirect('/user/home');

});

/* admin post methods ADD COVER */


router.post('/user/addcover', upload.single('coverphoto'), function(req, res, next){
console.log(req.body);
	console.log(req.file);

	const coverer = {
		_id: new mongoose.Types.ObjectId(),
		covertext: req.body.covertext,
		activeOrNot: req.body.activeOrNot,
		coverphoto: req.file.path
	};

	const event1 = new Event(coverer);
	event1.save(); 
    	
    res.redirect('/user/addcover');  

});

/* ADD CENTERS Post Method   */

router.post('/user/addcenter', upload.single('centerimage'), function(req, res, next){
console.log(req.body);
	console.log(req.file);

	const centerer = {
centername: req.body.centername,
centermobile: req.body.centermobile,
centerphone: req.body.centerphone,
centeremail: req.body.centeremail,
directorname: req.body.directorname,
centerlandmark: req.body.centerlandmark,
centeraddress: req.body.centeraddress,
centerimage: req.file.path
	};

	const event2 = new Center(centerer);
	event2.save();
	

	res.redirect('/user/addcenter');

});


/* ADD UPLOAD RESULT Post Method   */

router.post('/user/uploadresult', upload.single('uploadmarksheet'), function(req, res, next){
console.log(req.body);
	console.log(req.file);

	const resulter = {
rstudentname: req.body.rstudentname,
rdob: req.body.rdob,
rdoj: req.body.rdoj,
rcourse: req.body.rcourse,
rfathername: req.body.rfathername,
rrollnumber: req.body.rrollnumber,
ryear: req.body.ryear,
uploadmarksheet: req.file.path
	};

	const event3 = new Result(resulter);
	event3.save();
	

	res.redirect('/user/uploadresult');

});




module.exports = router;
