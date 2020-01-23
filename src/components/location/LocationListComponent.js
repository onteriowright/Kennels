import React, { useContext } from "react";
import { LocationContext } from "./LocationsDataProvider";
import Location from "./Location";
import "./Locations.css";

export default () => {
  const { locations } = useContext(LocationContext);

  return (
    <div className="locations">
      {locations.map(location => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  );
};
