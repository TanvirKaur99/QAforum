const mongoose=require('mongoose');
require('./postQuesModel');
require('./registerModel');
require('./addcredModel');

var answerSchema=mongoose.Schema({
  answer:{
    type:String,
    required:[true,"answer is required"]
  },

  questionid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'qpost'
  },

  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'userRegister'
  },

  credentialid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'addcredentials'
  },
  date:{
    type:Date,
    default:Date.now()
  }

});

mongoose.model('answer',answerSchema);
