const mongoose = require('mongoose');

const { Schema } = mongoose;

//define the model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String
});

//create the model class 
const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;