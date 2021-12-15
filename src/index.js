const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req,res) => {
  return res.render("index.ejs");
});

app.get("/products", (req,res) => {
  return res.render("products.ejs");
});

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

module.exports = app;
