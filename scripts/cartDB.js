const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/zinedteacart",
  {
    useMongoClient: true
  }
);

const cartSeed = [
  {
   "id": 1,
   "name": "",
   "quantity":"",
   "price":""
 },
  {
   "id": 2,
   "name": "",
   "quantity":"",
   "price":""
 },
  {
   "id": 3,
   "name": "",
   "quantity":"",
   "price":""
  }

];


db.Cart
  .remove({})
  .then(() =>
db.Cart.collection.insertMany(teaSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
