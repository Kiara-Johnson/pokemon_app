const express = require('express');
const pokemon = require('./models/pokemon')

const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// home
app.get('/', (req, res) => res.send('Welcome to the Pokemon App!'));

//pokemon list
app.get('/pokemon', (req, res) => res.render("Index"));

//individual pokemon
app.get('/pokemon/:id', (req, res) => res.render("Show", {pokemon: pokemon}));

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});