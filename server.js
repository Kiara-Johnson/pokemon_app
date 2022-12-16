require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

//database connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//seed data
app.get("/pokemon/seed", (req, res) => {
  const seededPokemon = [
    {
      name: "bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
    },
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg" },
    {
      name: "charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg",
    },
    {
      name: "charizard",
      img: "http://img.pokemondb.net/artwork/charizard.jpg",
    },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg" },
    {
      name: "wartortle",
      img: "http://img.pokemondb.net/artwork/wartortle.jpg",
    },
  ];

  Pokemon.deleteMany({}).then((data) => {
    Pokemon.create(seededPokemon).then((data) => {
      res.redirect("/pokemon");
    });
  });
});

// home
app.get("/", (req, res) => res.send("Welcome to the Pokemon App!"));

//pokemon list (index)
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", { pokemon: allPokemon });
  });
});

//new
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//delete
app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id,(err, updatedPokemon) => {
      res.redirect("/pokemon");
    })
});

//update
app.put("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => { 
    res.redirect(`/pokemon/${req.params.id}`);
  })
})


//create
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, newPokemon) => {
    res.redirect("/pokemon");
  });
});

//edit
app.get("pokemon/:id/edit", (req, res) => {
  Pokemon.findById(req.params.id, (err, pokemonData) => {
    res.render("Edit", { pokemon: pokemonData });
  });
});

//show individual pokemon
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", { pokemon: foundPokemon });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
