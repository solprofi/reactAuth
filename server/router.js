const Authentication = require('./controllers/auth');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const router = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'There' });
  });

  app.post('/signin', requireSignin, Authentication.signin);

  app.post('/signup', Authentication.signup);
};

module.exports = router;