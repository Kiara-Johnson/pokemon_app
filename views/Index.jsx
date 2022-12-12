import React, { Component } from 'react'

const pokemon = require('../models/pokemon')

const myStyle = {
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(105,105,105)',
};

export default class Index extends Component {
  render() {
    return (
        <div>
        <h1>See the Pokemon!</h1>
        <ul>
            {pokemon?.map((pokemon, i) => {
                return (
                    <li key = {i}>
                        <a href = {`/pokemon/${i}`}>
                            {pokemon.name}
                        </a>
                        
                    </li>
                )
            })}
     
               </ul>
             </div>
    )
  }
}
