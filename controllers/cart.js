const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Cart
      .find(req.query)
      .sort({ date: -1 })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Cart
      .findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const cart = {
      user: req.body.user,
      item: req.body.item,
      quantity: req.body.quantity,
      price: req.body.price
    };
    db.Cart
      .create(note)
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Cart
      .findById({ _id: req.params.id })
      .then(note => note.remove())
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  }
};
