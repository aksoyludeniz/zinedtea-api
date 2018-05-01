const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true
  },
  adress: { type: String, required: true
  },
  email: { type: String, required: true
  },
  comments:  {type: String}
});

const User = mongoose.model("user", userSchema);

module.exports = Tea;
