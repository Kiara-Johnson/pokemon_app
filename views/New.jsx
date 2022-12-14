import React, { Component } from 'react'

const myStyle = {
  color: 'rgb(255,10,255)',
  backgroundColor: 'rgba(10,255,255,.4)',
};

export default class New extends Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <html style={myStyle}>
      <div>
        <h1>Newly Caught!</h1>
        <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" /><br />
            img: <input type="url" name="image" /><br />
            <input type="submit" name="" value="New Pokemon"/>        
        </form>
        <a href="/pokemon">Back</a>
      </div>
      </html>
    )
  }
}
