const { Router } = require('express');
var express = require('express');

var router = express.Router();

const product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  product.find({},function (error,doc){
if(error){
  console.log(error)
}
var productGrid=[];
var colGrid=3;
for (var  index = 0; index < doc.length; index+=colGrid) {
  
  productGrid.push(doc.slice(index,index+colGrid));
}
res.render('index', { title: 'Shopping Cart', products:productGrid});

  })
});
/*router.get('/getProducts',function getUsers (req,res,next){
  // User.find({username:'amani_sonia'},function(error,resualt)
  product.find({},function(error,resualt){
     if (error){
       console.log(error);
     }
     console.log({products:resualt});
     res.render('index',{products:resualt});
    
   })
 });
router.post('/delete',function deletee (req,res,next){
  var ID=req.body.id;
  product.delete({_id:ID},function(error,resualt){
if(error){
  console.log(error);
  res.redirect('/');
  return;
}
console.log(resualt);
res.redirect('/');
  })
 });*/
module.exports = router;
