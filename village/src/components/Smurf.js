import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./smurf.css";
const Smurf = props => {
  return (
    <section className="smurf-badge">
      <Route path="/" exact>
        <div className="Smurf">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
      </Route>
      <Link to={`/smurf/${props.id}`} smurfs={props.smurf} className="link">
        {props.name} Profile
      </Link>
    </section>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
