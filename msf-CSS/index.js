var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
 if(req.query.username!="mafengshe"){
   res.send({errno:0,errmsg:"",data:{}});
 }
 else{
   res.send({errno:1,errmsg:"用户名已经存在",data:{}});
 }
  
});


module.exports = router;
