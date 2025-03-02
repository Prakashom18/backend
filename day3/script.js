const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/firstpage", (req, res) => {
  res.send("this is the fist page");
}); 
app.get("/secondpage", (req, res) => {
  res.send("this is the second page");
});

app.listen(300);
