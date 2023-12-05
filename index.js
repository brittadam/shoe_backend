const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const port = 3000;

//enable CORS
const cors = require('cors');
app.use(cors());

//use express json
app.use(express.json());

// connect to mongodb
mongoose.connect(process.env.MONGODB);

// console log .env MONGODB
console.log(process.env.MONGODB);

// check if connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// import routes
const shoeRouter = require("./routes/api/v1/shoes");
const userRouter = require("./routes/api/v1/users");

// use routes
app.use("/api/v1/shoes", shoeRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
