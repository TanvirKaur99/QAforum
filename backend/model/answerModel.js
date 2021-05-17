const mongoose=require('mongoose');
require('./postQuesModel');
require('./registerModel');

var answerSchema=mongoose.Schema({
  answer:{
    type:String,
  },

  questionid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'QPost'
  },

  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'userRegister'
  }


});

mongoose.model('answer',answerSchema);