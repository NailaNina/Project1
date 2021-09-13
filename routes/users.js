var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { isValidObjectId } = require('mongoose');
const User = require('../models/User');
const passport = require('passport');


/* GET users listing. */
router.get('/signUp', function (req, res, next) {
  var massagesError=req.flash('error');
  //console.log(massagesError);
  res.render('user/signUp.hbs',{massages : massagesError});
});


router.post('/signUp', [
  check('email').not().isEmpty().withMessage('please enter your email'),
  check('email').isEmail().withMessage('please enter valid email'),
  check('password').not().isEmpty().withMessage('please enter your password'),
  check('password').isLength({ min: 5 }).withMessage('enter your password with more than 5 characteres'),
  check('confirmpassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('password and confirmpassword not matched')

    }
    req.flash('error',validationMassages);
    res.render('user/signUp.hbs');
    return true;

  })
], function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    //pour afficher que le message depuis la listes des errors.errors
    var validationMassages=[];
  for(var i=0; i<errors.errors.length; i++){
    validationMassages.push(errors.errors[i].msg)
  }
  console.log(validationMassages);

    return;
  }
  const user = new User({
    email: req.body.email,
    password: new User().hashPassword(req.body.password)
  })


  User.findOne({ email: req.body.email }, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log('this email is already exist');
     return;
    }
    user.save((error, doc) => {
      if (error) {
        console.log(error)
      }
      res.send(doc);


    })

  })
  


})


router.get('/profile',(req,res,next)=>{
  res.render('user/profile.hbs');
})
router.get('/signIn',(req,res,next)=>{
res.render('user/signIn.hbs');
})

router.post('/signIn',passport.authenticate('local-signIn',{
  successRedirect:'/profile',
  failureRedirect:'/signIn',
  failureFlash:true,
}))


module.exports = router;