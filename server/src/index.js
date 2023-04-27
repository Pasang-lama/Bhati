const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
// mongodb Connection
const mongoose = require("mongoose");
const ConnectedtoDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Bhati"
    );
    if (connection) {
      console.log("Sucessfully Connected to Database");
    }
  } catch (err) {
    console.log(err);
  }
};
ConnectedtoDb();

const { Schema } = mongoose;
// const ProductSchema = new mongoose.Schema({
//   productName : String,
//   category : String,
//   price : Number,
//   isFavorite : Boolean,
//   cartCount : Number,
//   description : String,
// });
// const Product = mongoose.model("Product", ProductSchema);

// app.post("/product", (req, res) => {
//   Product.create(req.body);
//   console.log(req.body);
// });

const users = mongoose.model(
  "users",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    Password: String,
  })
);

app.post("/register", async (req, res) => {
  try {
    const userData = users.create(req.body);
    console.log(userData);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const data = users.find();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
