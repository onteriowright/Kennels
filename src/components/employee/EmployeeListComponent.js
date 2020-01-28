import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import Employee from "./Employee";
import "./Employees.css";
import { LocationContext } from "../location/LocationsDataProvider";

export default props => {
  const { employees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);

  return (
    <div className="employees">
      <h1>Employees</h1>

      <button onClick={() => props.history.push("/employees/create")}>Add Employee</button>

      <article className="employeeList">
        {employees.map(employee => {
          const foundLocation = locations.find(location => location.id === employee.locationId) || {};

          return <Employee key={employee.id} employee={employee} location={foundLocation} />;
        })}
      </article>
    </div>
  );
};
