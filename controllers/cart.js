const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Cart
      .find(req.query)
      .sort({ date: -1 })
      .then(carts => res.json(carts))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Cart
      .findById(req.params.id)
      .then(cart => res.json(cart))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const cart = {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price
    };
    db.Cart
      .create(cart)
      .then(cart => res.json(cart))
      .catch(err => res.status(422).json(err));
  },
  update: (req,res) => {
  db.Cart
    .findOneAndUpdate({ _id: req.params.id}, {items:req.body.items}, function(err,data) {
      if (err) return res.status(422).json(err);
      res.json(data)

    });
   },

  delete: (req, res) => {
    db.Cart
      .findById({ _id: req.params.id })
      .then(cart => cart.remove())
      .then(cart => res.json(cart))
      .catch(err => res.status(422).json(err));
  }
};
