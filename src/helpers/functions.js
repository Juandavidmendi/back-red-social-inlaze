const bcrypt = require("bcryptjs");
const config = require("#SRC/config/index");

exports.hashValue = (string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(string, salt);
};
