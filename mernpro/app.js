const express = require("express");
const app = express();

const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "./config/config.env" });


app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`<h1> Cart Application</h1>`);
});
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Server Running on Port Number ${process.env.PORT}`);
});