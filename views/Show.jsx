import React, { Component } from 'react'

const myStyle = {
  color: 'rgb(255,10,255)',
  backgroundColor: 'rgba(10,255,255,.4)',
};


export default class Show extends Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <html style={myStyle}>
      <div>
        <h1>Catch 'Em!</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt={`${pokemon.name}'s image`}></img><br />
        <a href="/pokemon">Back</a><br />
        <a href="/pokemon/{pokemon._id}/edit">Edit</a>
      </div>
      </html>
    )
  }
}
