const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

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

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    } else {
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          return next(err);
        } else {
          user.password = hash;
          next();
        }
      });
    }
  });
});

userSchema.methods.comparePasswords = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, isMatch);
    }
  });
};



//create the model class 
const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;