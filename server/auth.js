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

const auth = {
  strategy: strategy,
  setup: (app, db) => {
    auth.db = db;

    passport.use(strategy(db.findUser));

    passport.serializeUser((user, cb) => cb(null, user.username));
    passport.deserializeUser((username, cb) => db.findUser(username, cb));

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

router.post('/login', (req, res, next) => {
    console.log('login attempt: ' + JSON.stringify(req.body))
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in: ', req.user.username);
    // temporary hack
    auth.db.findUser(req.user.username, (err, data) => {
      if (err) {
        console.log(err);
        res.send({username: req.user.username});
      } else {
        console.log(data.favorites);
        res.send({username: data.username, favorites: data.favorites});
      }
    })
  }
);

router.post('/register', (req, res) => {
  const user = req.body;
  console.log(user);

  if (!user || !user.username || !user.password) {
    return res.send(400, {message: 'Bad data'});
  }

  auth.db.findUser(user.username, (err, data) => {
    if (err) return res.send(500);

    const cleanUser = {username: user.username, password: user.password};

    if (data) {
      return res.send(409, {message: 'username is already taken'});
    }

    auth.db.addUser(cleanUser, (err, data) => {
      if (err) return res.send(500);

      res.send(201, {message: 'registration successfull'});
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
  }
  res.send({ message: req.user ? 'logging out' : 'no user to log out' });
});

module.exports = auth;
