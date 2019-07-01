import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
const Smurf = props => {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <div className="Smurf">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
      </Route>
      <Link to={`/smurf/${props.id}`} smurfs={props.smurf}>
        {props.name} Profile
      </Link>
    </React.Fragment>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
