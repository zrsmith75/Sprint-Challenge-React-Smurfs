import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";

class Smurfs extends React.Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs
            ? this.props.smurfs.map(smurf => {
                return (
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    smurfs={this.props.smurfs}
                  />
                );
              })
            : "Loading ... "}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
