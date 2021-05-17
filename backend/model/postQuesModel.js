require('./registerModel');
const mongoose=require('mongoose');
 var postQueSchema=mongoose.Schema({
     
    question:{
        type:String,
        required:[true,'Post should be enterd']
    },

    category:{
        type:String
      },
      about:{
        type:String
      },
    date:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userRegister'   
        //this is the reference to the registerModel
    }

 })

 mongoose.model('QPost',postQueSchema);