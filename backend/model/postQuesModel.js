require('./registerModel');
const mongoose=require('mongoose');
 var postQueSchema=mongoose.Schema({

    question:{
        type:String,
        required:[true,"question is required"]
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
    },
    // likes:[
    //   {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'userRegister'

    //   }
    // ]

 })

 mongoose.model('qpost',postQueSchema);
