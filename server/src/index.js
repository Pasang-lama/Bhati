const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(express.json());
app.use(cors());
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
    phone: Number,
    email: String,
    Password: String,
  })
);

app.get("/", (req, res) => {
  res.send("wel-come to online liquoir shop");
});

app.post("/register", async (req, res) => {
  try {
    const userData = await users.create(req.body);
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const fetchData = await users.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    if (fetchData) {
      res.json({ message: "Login Sucessfull" });
    } else {
      res.json({ message: "credentials doesn't match" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
