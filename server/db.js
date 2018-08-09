const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const api = {
  findUser(username, cb) {
    this.db.collection("users").find({username}, cb);
  },
  addUser({username, password}, cb) {
    bcrypt.hash(password, 10, (err, hash) => {
      this.db.collection("users").insert({username, password: hash}, cb);
    });
  }
};

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  api.db = db.db('football-scores');
  console.log('connected to mongo server');
});

// const dummyUsers = ['A', 'B', 'C'].map(
//   name => ({username: name, password: bcrypt.hashSync(name, 10)})
// );
// const findUser = (username, cb) => {
//   const user = dummyUsers.find(user => user.username == username);
//   cb(null, user);
// };

module.exports = api;