const Authentication = require('./controllers/auth');

const router = (app) => {
  app.post('/signup', Authentication.signup);
};

module.exports = router;