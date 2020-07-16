const express = require("express");
const morgan = require("morgan");


const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());


//routes
app.use(require("./routes/products.routes"));

module.exports = app;