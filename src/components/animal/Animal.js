import React from "react";
import "./Animals.css";

export default ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">Breed: {animal.breed}</div>
    <div className="animal__name">Customer: {customer.name}</div>
    <div className="animal__location">Location: {location.name}</div>
  </section>
);
