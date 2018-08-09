const bcrypt = require('bcrypt');
const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const checkPassword = (password, user, cb) => {
  bcrypt.compare(password, user.password, (err, isValid) => {
    if (err) return cb(err);

    return cb(null, isValid ? user : false);
  });
};

const strategy = (findUser) => new LocalStrategy((username, password, cb) => {
  findUser(username, (err, user) => {
    if (err) return cb(err);

    if (user) {
      return checkPassword(password, user, cb);
    }

    cb(null, false);
  });
});

router.post('/login', (req, res, next) => {
    console.log('login attempt: ' + JSON.stringify(req.body))
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in: ', req.user.username);
    res.send({username: req.user.username});
  }
);

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
  }
  res.send({ msg: req.user ? 'logging out' : 'no user to log out' });
})

module.exports = {
  strategy: strategy,
  setup: (app, findUser) => {
    passport.use(strategy(findUser));

    passport.serializeUser((user, cb) => cb(null, user.username));
    passport.deserializeUser((username, cb) => findUser(username, cb));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/auth', router);
  },
  passport,
  check: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.send(401);
  }
};
