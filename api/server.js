const express = require("express");

const configureMiddleware = require("./middleware.js");

const server = express();

configureMiddleware(server);



// ---------- ROUTING ---------- //
const registerRouter = require('../routes/register/register-router.js');
const loginRouter = require('../routes/login/login-router.js');
const playlistsRouter = require('../routes/playlists/playlists-router.js');
const users    = require('../routes/user/users.js');

// Test Route
// server.get("/", (req, res) => {
//   res.status(200).json({ message: "This works!!!" });
// });

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/user/playlists', playlistsRouter);
server.use('/api/users',      users);

module.exports = server;
