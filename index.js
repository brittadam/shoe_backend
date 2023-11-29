const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const port = 3000;

//enable CORS
const cors = require('cors');
app.use(cors());

// connect to mongodb
mongoose.connect(process.env.MONGODB);

// console log .env MONGODB
console.log(process.env.MONGODB);

// check if connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
