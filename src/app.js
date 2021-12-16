const express = require("express");

const User = require("./models/users.model");
const userController = require("./controllers/users.controller");

const productController = require("./controllers/products.controller");

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static("public"));

// ***************************************
const bodyParser = require('body-parser');
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// ***************************************

// *************************************

app.get("/", (req,res) => {
  return res.render("index.ejs");
});

app.use("/", userController);



// app.get("/products", (req,res) => {
//   return res.render("products.ejs");
// });

app.use("/", productController);

app.get("/productInfo", (req,res) => {
  return res.render("productInfo.ejs");
});

app.get("/cart", (req,res) => {
  return res.render("cart.ejs");
});

app.get("/checkout", (req,res) => {
  return res.render("checkout.ejs");
});

app.get("/payment", (req,res) => {
  return res.render("payment.ejs");
});

// ************************************



module.exports = app;
