const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teaSchema = new Schema({
  name: { type: String, required: true
  },
  description: { type: String, required: true
  },
  image: { data: Buffer, contentType: String
  },
  price: { type: Number
  },
  quantity: { type: Number
  }
});

const Tea = mongoose.model("Tea", teaSchema);

module.exports = Tea;
