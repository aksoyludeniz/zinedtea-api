const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name:{ type: String, required: true
    },
    quantity:{ type: Number, required: true
    },
    price:{ type: Number, required: true
    }

});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
