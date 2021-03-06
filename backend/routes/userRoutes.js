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
 approute.put('/updateCredentials/:userid',myctrl.updatedCredentials);  //for update


approute.post('/addans',myctrl.addanswers);       //add answer to db
approute.get('/displayans/:questionid',myctrl.dispQuesans);    //get answers of the same question
approute.get('/displayUserans/:userid',myctrl.displayUseranswer);   //get all answers given by specific user question
approute.get('/displayallans',myctrl.allanswers);       //for dispalying all the answers


approute.put('/updateRecord/:id',myctrl.updatedData);   //for updating the user record


approute.get('/allques',myctrl.allquestions);  //for getting all the questions in questions database
//approute.get('/allques2',myctrl.allquestions2);

//  approute.put('/like',myctrl.likePost);

approute.get('/file',myctrl.displayfile);
approute.post('/imageupload',myctrl.uploadimage);

//approute.put('/updateimg/:userid',myctrl.updateimage);
approute.get('/displayimage/:userid',myctrl.displayimage);
approute.post('/forgot-password',myctrl.forgotpass);
approute.post('/reset-password/:token',myctrl.resetPass);

module.exports = approute;
