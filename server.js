const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon");

const mongoose = require("mongoose");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//database connection
mongoose.set('strictQuery', false);
mongoose.connect('process.env.MONGO_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// home
app.get("/", (req, res) => res.send("Welcome to the Pokemon App!"));

//new
app.get("/pokemon/new", (req, res) => res.render("New"));

//pokemon list
app.get("/pokemon", (req, res) => res.render("Index", { pokemon: pokemon }));

//create
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect('/pokemon');
  });
});

//individual pokemon
app.get("/pokemon/:id", (req, res) =>
  res.render("Show", { pokemon: pokemon[req.params.id] })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
