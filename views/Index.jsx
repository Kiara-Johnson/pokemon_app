import React, { Component } from 'react'

const myStyle = {
    color: 'rgb(255,55,55)',
    backgroundColor: 'rgba(10,255,255,.4)',
};
const aStyle = {
    color: 'rgb(255,0,0)'
}

export default class Index extends Component {
  render() {
    const pokemon = this.props.pokemon
    return (
        <html style={myStyle}>
        <div>
        <h1>All My Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon, i) => {
                return (
                    <li key = {i}>
                        <a style={aStyle} href = {`/pokemon/${i}`}>
                            {pokemon.name}
                        </a>
                        
                    </li>
                )
            })}
     
               </ul>
             </div>
             </html>
    )
  }
}
