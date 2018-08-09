const bcrypt = require('bcrypt');

const dummyUsers = ['A', 'B', 'C'].map(
  name => ({username: name, password: bcrypt.hashSync(name, 10)})
);
const findUser = (username, cb) => {
  const user = dummyUsers.find(user => user.username == username);
  cb(null, user);
};

module.exports = {findUser};