const express = require('express');
const pokemon = require('./models/pokemon')

const app = express();

app.get('/', (req, res) => res.send('Welcome to the Pokemon App!'));

app.get('/pokemon', (req, res) => res.send(pokemon));


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});