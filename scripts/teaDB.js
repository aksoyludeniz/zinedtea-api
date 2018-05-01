const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/zinedtea",
  {
    useMongoClient: true
  }
);


const teaSeed = [
  {
   "id": 1,
   "name": "Super Interpolation",
   "description": "Burdock Root, Elderberry, Linden Leaf & Key Lime",
   "image": "..img/superinterpolation.png",
   "price": 10.00,
   "comments": ""
  },
  {
   "id": 2,
   "name": "Mineral Script",
   "description": "Sarsaparilla, Stinging Netle & Red Clover",
   "image": "..img/mineralscript.png",
   "price": 10.00,
   "comments": ""

 },
 {
   "id": 3,
   "name": "Bootcamp Groove",
   "description": "Damiana, Ginger, Sensitiva & Yohimbe",
   "image": "..img/bootcampgroove.png",
   "price": 10.00,
   "comments": ""

 }
];

console.log("db.tea", db.Tea)
console.log("db.tea.collection", db.Tea.collection)
console.log('tea seed', teaSeed)
console.log("db.tea insert many", db.Tea.insertMany(teaSeed))

db.Tea
  .remove({})
  .then(() =>
db.Tea.collection.insertMany(teaSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
