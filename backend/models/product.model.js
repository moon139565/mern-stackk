const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String
    },
    category:{
        type: String
    },
    image:{
        type: String
    },
    price:{
        type: String
    },
    description:{
        type: String
    },
})

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel