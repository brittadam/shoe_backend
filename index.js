const express = require("express");
const mongoose = require("mongoose");
const Primus = require("primus");
const http = require("http");
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

// check if connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// import routes
const shoeRouter = require("./routes/api/v1/shoes");
const userRouter = require("./routes/api/v1/users");

// Create an HTTP server
const server = http.createServer(app);
// Create a Primus instance and attach it to the server
const primus = new Primus(server, { transformer: "websockets" });

// Add your Primus logic in primus/live.js (similar to what you had before)
require("./primus/live").go(primus);


// use routes
app.use("/api/v1/shoes", shoeRouter);
app.use("/api/v1/users", userRouter);


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
