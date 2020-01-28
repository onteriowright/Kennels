import React, { useContext } from "react";
import { LocationContext } from "./LocationsDataProvider";
import Location from "./Location";
import "./Locations.css";
import { EmployeeContext } from "../employee/EmployeeDataProvider";

export default () => {
  const { locations } = useContext(LocationContext);
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="locations">
      {locations.map(location => {
        const currentEmployees = employees.filter(employee => employee.locationId === location.id) || {};
        return <Location key={location.id} location={location} employee={currentEmployees} />;
      })}
    </div>
  );
};
