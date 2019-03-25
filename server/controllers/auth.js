const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

const createToken = (user) => {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: 'You must provide email and password' });
  }

  //check for the user
  User.findOne({ email }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (user) {
      return res.status(422).send({ error: 'User already exists' });
    } else {
      const newUser = new User({
        email,
        password,
      });

      newUser.save((error) => {
        if (error) {
          return next(error);
        } else {
          res.json({ token: createToken(newUser) });
        }
      });
    }
  });
};