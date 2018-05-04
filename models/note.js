const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  user: { type: String, required: true
  },
  comment: { type: String, required: true
  }

});

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
