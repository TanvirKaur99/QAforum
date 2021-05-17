var express = require('express');
var myctrl = require('../controller/userController');

var approute=express.Router();
approute.post('/newUser',myctrl.addnew);//for registering a new user
approute.post('/authentication',myctrl.authenticate);//for authenticating a user


approute.get('/userinfo/:id',myctrl.selectedUser);//for selecting a particular user id 


approute.post('/addnewQuepost',myctrl.addnewQuePost);//for adding a new Question post into database
approute.get('/displayQuepost/:userid',myctrl.displayQuepost);//for displaying all the posts by a particular user


 approute.post('/addcred',myctrl.addcredentials);       //add credentials to db
 approute.get('/displaycred/:userid',myctrl.displaycredentials); //get credentials

approute.post('/addans',myctrl.addanswers);       //add answer to db
approute.get('/displayans/:questionid',myctrl.displayanswer); //get answers of the same question



module.exports = approute;