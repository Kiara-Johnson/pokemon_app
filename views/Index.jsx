import React, { Component } from "react";

const myStyle = {
  color: "rgb(255,55,55)",
  backgroundColor: "rgba(10,255,255,.4)",
};
const aStyle = {
  color: "rgb(255,0,0)",
  
};

export default class Index extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <html style={myStyle}>
        <div>
          <nav>
            <a href="/pokemon/new">Create a New Pokemon</a>
          </nav>
          <h1>All My Pokemon!</h1>
          <ul>
            {this.props.pokemon.map((pokemon, i) => {
              return (
                <a style={aStyle} href={`/pokemon/${pokemon._id}`}>
                  <li><h3>{pokemon.name}</h3></li>
                 <form
                 action={`/pokemon/${pokemon._id}?_method=DELETE`}
                 method="POST"
               >
                 <input type="submit" value="DELETE" />
               </form>
               </a>
              );
            })}
          </ul>
        </div>
      </html>
    );
  }
}
