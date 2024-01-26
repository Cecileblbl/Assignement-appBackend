let User = require("../model/user");

// Récupérer tous les assignments (GET)
function getUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }

    res.send(users);
  });
}

// Ajout d'un assignment (POST)
function postUser(req, res) {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.role = req.body.role;
  user.save((err) => {
    if (err) {
      res.send("cant post user ", err);
    }
    res.json({ message: `${user.username} saved!` });
  });
}

// Récupérer un assignment par son id (GET)

module.exports = {
  getUsers,
  postUser,
};
