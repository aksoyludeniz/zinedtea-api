const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/zinedteaUser",
  {
    useMongoClient: true
  }
);

 const Userseed = [

{
"id": 1,
"name": "",
"adress": "",
"email": "",
"password": ""

}
];
db.User
  .remove({})
  .then(() => db.User.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
