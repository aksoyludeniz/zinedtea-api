const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: String, required: true
  },
  cart: { type: String, required: true
  }

});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
