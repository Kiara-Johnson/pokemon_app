import React, { Component } from 'react'

const pokemon = require('../models/pokemon')

export default class Show extends Component {
  render() {
    return (
      <div>
        <h1>Catch 'Em!</h1>
        <h2>{pokemon.name}</h2>
        <img src={`${pokemon.img}.jpg`} />
        <a href="/pokemon">Back</a>
      </div>
    )
  }
}
