const express = require('express');
const {v4: uuidv4} = require('uuid');

const server = express();
server.use(express.json());
// | GET    | /api/users    | Returns an array users.                                                                             |
// | POST   | /api/register | Creates a user from { username, password } in the `request body`, responds with newly created user. |
// | POST   | /api/login    | Checks { username, password } in the `request body`, responds with a welcome message.  
server.get('/api/users', (req, res) => {
  const arrayResponse = [1,2,3];
  res.status(200).json(arrayResponse);
});

server.post('/api/login', (req, res) => {
  if (req.body.username && req.body.password) {
    res.status(200).json({ message: 'Welcome to this bodacious api!' });
  } else {
    res.status(400).json({ message: 'Please enter username and login' })
  }
});

server.post('/api/register', (req, res) => {
  if (req.body.username && req.body.password) {
    const user = {
      username: req.body.username,
      type: "admin",
      occupation: 'engineer',
      user_id: uuidv4(),
    };
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: 'Please enter username and login'});
  }
});

module.exports = server;