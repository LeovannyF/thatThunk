const express = require('express');
const app = express();
const path = require("path");
const morgan = require ('morgan');
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

const server = app.listen(port, ()=>{
  console.log('I am listening on port, ${port}')
});

module.exports = {
  app
}
