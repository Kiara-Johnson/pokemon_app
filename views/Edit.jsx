import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method='post'>
            <h1>Edit {pokemon.name}</h1>
            Name: <input type="text" name="name" defaultValue={pokemon.name} /><br />
            Image: <input type="text" name="image"  defaultValue={pokemon.img}/><br />
            <input type="submit" name="" value="Submit Change"/>
        </form>
      </div>
    )
  }
}
