const { configDotenv } = require("dotenv");
const jwt = require("jsonwebtoken")
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const User = require("./models/user.model");
const Product = require("./models/product.model");

require("./config/database");

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// apo create
app.get("/", (req, res) => {
  res.send("welcome to my server");
});

// signup app

app.post("/signup", async (req, res) => {

  const { firstName, lastName, password, confirmpassword, email, image } =
    req.body;

  if (!firstName || !lastName || !password || !confirmpassword || !email) {
    return res.send({ message: "Please filled the field " });
  }

  try {
    const userData = await User.findOne({ email: email });
    if (userData) {
      return res.send({
        message: "Email id is already register",
        alert: false,
      });
    }
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      // Store hash in your password DB.
      const datam = new User({
        firstName,
        lastName,
        password: hash,
        confirmpassword: hash,
        email,
        image,
      });
      await datam.save();
      res.send({ message: "Successfully sign up", alert: true });
    });
  } catch (error) {
    res.send(error.message);
  }

});

app.post("/login", async (req, res) => {
  
  try {
    const { password, email } = req.body;

    if (!password || !email) {
      return res.send({ message: "Please filled the field " });
    }

    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.send({ message: "please input valid email" });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);
    const token = await userLogin.generateAuthToken()
    
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly:true
    })

    if (isMatch) {
      const dataSend = {
        _id: userLogin._id,
        firstName: userLogin.firstName,
        lastName: userLogin.lastName,
        email: userLogin.email,
        image: userLogin.image,
      };
      res.send({ message: "login succesfully", alert: true, data: dataSend });
    } else {
      res.send({ message: "password not match", alert: false });
    }
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.post("/newproduct", async (req, res) => {
  
  try {
    const { name, category, description, price, image } = req.body;
    const productData = await Product.findOne({
      name: name,
      category: category,
      image: image,
      price: price,
      description: description,
    });
    if (productData) {
      return res.send({ message: "Product is already Added" });
    }else{
      const proData = new Product(req.body)
      await proData.save()
      res.send({ message: "Product Successfully added", alert: true });
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/product", async (req, res)=>{
  const data =await Product.find({})
  res.send(data)
})

module.exports = app;
