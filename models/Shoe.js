// creat a mongoose schema for shoes
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    //add username to shoe
    user: {
        type: String,
        required: false,
    },
    //add status to shoe
    status: {
        type: String,
        required: false,
    },
    //add shoe size
    size: {
        type: Number,
        required: false,
    },
    //add shoe price
    price: {
        type: Number,
        required: false,
    },
    //add shoe laces
    laces: {
        type: String,
        required: false,
    },
    //add outside_1
    outside_1: {
        type: String,
        required: false,
    },
    //add outside_2
    outside_2: {
        type: String,
        required: false,
    },
    //add sole_bottom
    sole_bottom: {
        type: String,
        required: false,
    },
    //add sole_top
    sole_top: {
        type: String,
        required: false,
    },
});

// export the model to use it in index.js
const Shoe = mongoose.model("Shoe", ShoeSchema);
module.exports = Shoe;
