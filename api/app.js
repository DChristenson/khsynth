const materials = require("./materials.json");
const recipes = require("./recipes.json");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/materials", (req, res) => {
  res.send(materials);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:name", (req, res) => {
  let name = req.params.name;
  res.send(
    recipes.filter((item) => item.name.toLowerCase() === name.toLowerCase())
  );
});

app.get("/materials/:name", (req, res) => {
  let name = req.params.name;
  res.send(
    materials.filter((item) => item.name.toLowerCase() === name.toLowerCase())
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
