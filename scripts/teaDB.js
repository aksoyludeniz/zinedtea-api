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
   "image": "https://user-images.githubusercontent.com/33230300/39398756-74f552ba-4ae0-11e8-988d-dc4b5ea970f8.png",
   "price": 10.00,
   "quantity": 4
  },
  {
   "id": 2,
   "name": "Mineral Script",
   "description": "Sarsaparilla, Stinging Netle & Red Clover",
   "image": "https://user-images.githubusercontent.com/33230300/39398806-4cfdc3fe-4ae1-11e8-9d9a-0b4eae402f37.png",
   "price": 10.00,
   "quantity": 5

 },
 {
   "id": 3,
   "name": "Bootcamp Groove",
   "description": "Damiana, Ginger, Sensitiva & Yohimbe",
   "image": "https://user-images.githubusercontent.com/33230300/39398822-ad06c8ea-4ae1-11e8-8559-857e1581b8c5.png",
   "price": 10.00,
   "quantity": 4

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
