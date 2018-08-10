const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const api = {
  findUser(username, cb) {
    this.db.collection("users").findOne({username}, cb);
  },
  addUser({username, password}, cb) {
    bcrypt.hash(password, 10, (err, hash) => {
      this.db.collection("users").insert({username, password: hash}, cb);
    });
  }
};

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    Object.assign(api, {
      findUser: (_, cb) => cb(err),
      addUser: (_, cb) => cb(err)
    });
    console.log('could not connect to mongo server');
  } else {
    api.db = db.db('football-scores');
    console.log('connected to mongo server');
  }
});

module.exports = api;