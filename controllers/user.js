const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(users => res.json(users))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
      .findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const user = {
      username: req.body.name,
      password: req.body.password
    };
    db.User
      .create(user)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(user => user.remove())
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  }
};
