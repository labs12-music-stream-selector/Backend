const jwt = require("jsonwebtoken");

const secrets = require("./config/secrets.js");

module.exports = {
  generate
};

function generate(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
