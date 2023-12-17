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
    laces_color: {
        type: String,
        required: false,
    },
    //add outside_1
    outside_1_color: {
        type: String,
        required: false,
    },
    //add outside_2
    outside_2_color: {
        type: String,
        required: false,
    },
    //add outside_3
    outside_3_color: {
        type: String,
        required: false,
    },
    //add inside
    inside_color: {
        type: String,
        required: false,
    },
    //add sole_bottom
    sole_bottom_color: {
        type: String,
        required: false,
    },
    //add sole_top
    sole_top_color: {
        type: String,
        required: false,
    },
    //add shoe laces
    laces_material: {
        type: String,
        required: false,
    },
    //add outside_1
    outside_1_material: {
        type: String,
        required: false,
    },
    //add outside_2
    outside_2_material: {
        type: String,
        required: false,
    },
    //add outside_3
    outside_3_material: {
        type: String,
        required: false,
    },
    //add inside
    inside_material: {
        type: String,
        required: false,
    },
    //add sole_bottom
    sole_bottom_material: {
        type: String,
        required: false,
    },
    //add sole_top
    sole_top_material: {
        type: String,
        required: false,
    },
    //add date
    date: {
        type: Date,
        default: Date.now,
        required: false,
    },
});

// export the model to use it in index.js
const Shoe = mongoose.model("Shoe", ShoeSchema);
module.exports = Shoe;