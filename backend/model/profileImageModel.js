require('./registerModel');
const mongoose=require('mongoose');

var profileImageSchema=mongoose.Schema({
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userRegister',

    },
    image:{
        type:String,

    },
    date:{
        type:Date,
        default:Date.now()
    }

})
mongoose.model('profileImage',profileImageSchema);
