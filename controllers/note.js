const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Note
      .find(req.query)
      .sort({ date: -1 })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Note
      .findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const note = {
      user: req.body.user,
      comment: req.body.comment
    };
    db.Note
      .create(note)
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Note
      .findById({ _id: req.params.id })
      .then(note => note.remove())
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  }
};
