
const mongoose=require('mongoose');
require('./registerModel');

var addcredSchema=mongoose.Schema({
   location:{
     type:String,
     required:[true,"location is required"]
   },
   dateofbirth:{
     type:Date,
     required:[true,"date of birth is required"]
   },
   address:{
     type:String,
     required:[true,"address is required"]
   },
   education:{
     type:String,
     required:[true,"education is required"]
   },
   profile:{
     type:String,
     required:[true,"profile is required"]
   },
   workexperience:{
     type:String,
     required:[true,"work experience is required"]
   },
   userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'userRegister'
  }

});

mongoose.model('addcredentials',addcredSchema);
