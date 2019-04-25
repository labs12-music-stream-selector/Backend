require("dotenv").config();
const tokenService = require("./token-service.js");
const secrets = require("./config/secrets.js");
const jwt = require("jsonwebtoken");

describe("token-service.js", () => {
  it("Gives a token", () => {
    const token = tokenService.generate({
      username: "testName",
      password: "testPass",
      id: 22
    });

    const validate = {};
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (!err) {
        validate.evaluate = true;
      } else {
        validate.evaluate = false;
      }
    });
    expect(validate.evaluate).toBeTruthy();
  });
  it("Missing Secret", () => {
    const token = tokenService.generate({
      username: "testName",
      password: "testPass",
      id: 22
    });

    const validate = {};
    jwt.verify(token, secrets, (err, decodedToken) => {
      if (!err) {
        validate.evaluate = true;
      } else {
        validate.evaluate = false;
      }
    });
    expect(validate.evaluate).toBeFalsy();
  });
});
