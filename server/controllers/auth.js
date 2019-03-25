const User = require('../models/user');

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
          res.json({ success: true });
        }
      });
    }
  });
};