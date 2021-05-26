require('../model/registerModel');
require('../config/passportConfig');
require('../model/postQuesModel');//import postQuesModel
require('../model/addcredModel');//AddCredentials Model
require('../model/answerModel');
require('../model/profileImageModel');//importing profileImage model


const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const multer=require('multer');

//FOR MODELS VARIABLES

var UserData=mongoose.model('userRegister');//UserData object created for userRegister Model
var newQuePost=mongoose.model('QPost');//newPost is the reference to the Qpost Model
var credData=mongoose.model('addcredentials');
var ansData=mongoose.model('answer');
var proImgData= mongoose.model('profileImage');//profileImages is the reference to the profileimage




//Function for Adding new user or register a user
module.exports.addnew=(req,res)=>{
    var myData=new UserData({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        password:req.body.password,
    });
    myData.save().then((docs)=>{
        return res.status(200).json({
            message:'Data inserted successfully',
            success:true,
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            message:'Error in adding new user',
            success:false,
            error:err.message
        })
    });
}



//to check authentication :if user is registered it will generate "token" and "user" asa response

module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) return res.status(404).json(err);
        if(user) return res.status(200).json({
            "token":jwt.sign({_id:user._id},"SecretToken",{expiresIn:'4000m'}),
            "user":user
        });
        if(info) return res.status(401).json(info);
    })(req,res,next)
}

//for selecting a user...

module.exports.selectedUser=(req,res)=>{
    UserData.findById({_id:req.params.id}).then((docs)=>{
        return res.status(200).json({
          success:true,
          message:'user found',
          data:docs
        })
      })
      .catch((err)=>{
       return res.status(400).json({
         success:false,
         message:'User not found',
         error:err.message

       })
      })
    }



    //add credentials
module.exports.addcredentials=(req,res)=>{
  var credentials=new credData({
    location:req.body.location,
    dateofbirth:req.body.dateofbirth,
    education:req.body.education,
    address:req.body.address,
    profile:req.body.profile,
    workexperience:req.body.workexperience,
    user:req.body.user
  });
  credentials.save().then((docs)=>{
 return res.status(200).json({
  success:true,
  message:'credentials added successfully',
  data:docs

 })
  }).catch((err)=>{
    return res.status(400).json({
      success:false,
      message:'error in adding',
      error:err.message
  })
})
}




//display credentials

module.exports.displaycredentials=(req,res)=>{
  return credData.find({user:req.params.userid}).populate('user').exec().then((docs)=>{
    return res.status(200).json({
      success:true,
      message:'display credentials',
      data:docs
  })
}).catch((err)=>{
  return res.status(400).json({
    success:false,
    message:'error in displaying',
    error:err.message
})
})
}
    //for adding a new question  Post

  module.exports.addnewQuePost=(req,res)=>{
    var myQpost=new newQuePost({
      question:req.body.question,
      category:req.body.category,
      about:req.body.about,
      user:req.body.user,
      likes:req.body.likes
    });

      myQpost.save().then((docs)=>{
        return res.status(200).json({
          success:true,
          message:"New Post added",
          data:docs
        })
      })
      .catch((err)=>{
        return res.status(400).json({
          success:false,
          message:'Error in adding Post',
          error:err.message
        })
      })
    }

    // for displaying a  question post by a particular user
    module.exports.displayQuepost=(req,res)=>{
        return newQuePost.find({user:req.params.userid}).populate('user').exec().then((docs)=>{
          res.status(200).json({
            success:true,
            message:'list of questions added',
            data:docs
          })
        })
        .catch((err)=>{
          res.status(404).json({
            success:false,
            message:'No questions found yet',
            error:err.message
          })
        })
      }

      //add answers
module.exports.addanswers=(req,res)=>{
  var myanswer=new ansData({
    answer:req.body.answer,
    questionid:req.body.questionid,
    userid:req.body.userid


  });

  myanswer.save().then((docs)=>{
   console.log(docs);

 return res.status(200).json({
  success:true,
  message:'new answer added',
  data:docs

 })
  }).catch((err)=>{
    return res.status(400).json({
      success:false,
      message:'error in adding',
      error:err.message
  })
})
}



//display answer of a particular question

module.exports.displayanswer=(req,res)=>{
 // console.log(req.params.questionid)
  return ansData.find({questionid:req.params.questionid}).populate('questionid').exec().then((docs)=>{
    return res.status(200).json({
      success:true,
      message:'list of answers',
      data:docs
  })
}).catch((err)=>{
  return res.status(400).json({
    success:false,
    message:'error in displaying',
    error:err.message
})
})
}

module.exports.displayUseranswer=(req,res)=>{
  // console.log(req.params.questionid)
  //console.log(req.params.userid);
   return ansData.find({userid:req.params.userid}).populate('userid').exec().then((docs)=>{
     return res.status(200).json({
       success:true,
       message:'list of answers',
       data:docs
   })
 }).catch((err)=>{
   return res.status(400).json({
     success:false,
     message:'error in displaying',
     error:err.message
 })
 })
 }







//for updating user
module.exports.updatedData=(req,res)=>{

  var updatedData = req.body;
  UserData.findByIdAndUpdate({_id:req.params.id},{$set:updatedData},{new:true})
  .then((docs)=>{
      return res.status(200).json({
          success:true,
          message:'Data updated',
          data:docs
      })

          }).catch((err)=>{
              return res.status(401).json({
                  success:false,
                  message:'Error in updating data',
                  err:err.message
      })
  })
}


//for getting all the registered user
//    var _id = mongoose.Types.ObjectId();
//   module.exports.findusers=(req,res)=>{
// UserData.find({}, {name:1, _id}).then((docs)=>{
//   return res.status(200).json({
//   success:true,
//   message:'users found',
//   data:docs

// })

//   })

//   .catch((err)=>{
//     return res.status(400).json({
//       success:false,
//       message:'Users not found',
//       error:err.message

//     })
//    })
//    console.log(data)
//   }




// for getting all the questions asked
  var _id = mongoose.Types.ObjectId();
  module.exports.allquestions=(req,res)=>{
    newQuePost.find({}, {question:1, _id,user:1}).then((docs)=>{
  return res.status(200).json({
  success:true,
  message:'questions found',
  data:docs

})

  })

  .catch((err)=>{
    return res.status(400).json({
      success:false,
      message:'questions not found',
      error:err.message

    })
   })

  }

  //for liking a post


  // mongoose.exports.likePost=(req,res)=>{

  //   newQuePost.findByIdAndUpdate(req.body.questionid,{
  //     $push:{likes:req.user._id}
  //   },{
  //     new:true
  //   }).exec((err,result)=>{
  //     if(err){
  //       return res.status(422).json({error:err})
  //     }else{
  //       res.json(result)
  //     }
  //   })

  // }




// mongoose.export.likePost=(req,res)=>{
//   newQuePost.findOneAndUpdate(req.body.questionid,{
//          $push:{likes:req.user._id}
//        },{
//          new:true
//        }).then((docs)=>{
//         return res.status(200).json({
//         success:true,
//         message:'post liked',
//         data:docs

//       })

//         })

//         .catch((err)=>{
//           return res.status(400).json({
//             success:false,
//             message:'Error in liking a post',
//             error:err.message

//           })
//          })
// }


//for displaying image....

// module.exports.displayfile=(req,res)=>{
//   res.sendFile(__dirname+"/views/file.html");

// }

//for uploading profilepicture

var storage=multer.diskStorage({

  destination:(req,file,cb)=>{
    cb(null,'./uploads');
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname);
  }

  })



  var upload=multer({storage:storage}).single('file');

  module.exports.uploadimage=(req,res)=>{
    upload(req,res,(err)=>{
      if(err)
      console.log("error in uploading file" +err);

      else{
        console.log("file uploading successfully");

        var proimage=new proImgData({
          user:req.params.user,
          image:req.file.path,
          profile:req.body.profile

        });

        proimage.save().then((docs)=>{
          return res.status(200).json({
            success:true,
            message:"image saved successfully",
            data:docs
          })
        })
             .catch((err)=>{
             return res.status(404).json({
               success:false,
               message:"error in uploading file",
               error:err.message
             })
             })

             console.log(req.file);

      }
    })
  }
