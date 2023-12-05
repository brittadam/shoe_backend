//make me a mongoose schema for users with username, password, email and admin


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //add username to shoe
    username: {
        type: String,
        required: false,
    },
    //add password to shoe
    password: {
        type: String,
        required: false,
    },
    //add email
    email: {
        type: String,
        required: false,
    },
    //add admin
    admin: {
        type: Boolean,
        required: false,
    },
});

// export the model to use it in index.js
const User = mongoose.model("User", UserSchema);
module.exports = User;