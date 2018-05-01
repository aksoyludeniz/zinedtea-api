const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
      .findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const user = {
      name: req.body.name,
      adress: req.body.headline.main,
      email: req.body.email,
      comments: req.body.comments
    };
    db.User
      .create(user)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(article => article.remove())
      .then(article => res.json(article))
      .catch(err => res.status(422).json(err));
  }
};
