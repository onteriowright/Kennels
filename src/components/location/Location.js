import React from "react";
import "./Locations.css";

export default ({ location, employee }) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <address className="location__address">{location.address}</address>
    <ul>
      {employee.map(singleEmployee => (
        <li key={singleEmployee.id}>{singleEmployee.name}</li>
      ))}
    </ul>
  </section>
);
