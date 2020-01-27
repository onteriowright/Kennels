import React, { useContext, useRef } from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import { LocationContext } from "../location/LocationsDataProvider";
import "./Employees.css";

export default props => {
  const { addEmployees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const employeeName = useRef("");
  const employeeLocation = useRef(0);
  console.log(employeeName);
  console.log(employeeLocation);

  let locationId = "";
  const constructNewEmployee = () => {
    locationId = parseInt(employeeLocation.current.value);

    if (locationId === 0) {
      alert("Please select a location");
    } else {
      addEmployees({
        name: employeeName.current.value,
        locationId: locationId
      });
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <div className="form-group">
        <label htmlFor="employeeName">Employee name</label>
        <input type="text" id="employeeName" ref={employeeName} required autoFocus className="form-control" placeholder="Employee name" />
      </div>
      <div className="form-group">
        <label htmlFor="location">Assign to location</label>
        <select defaultValue="" name="location" ref={employeeLocation} id="employeeLocation" className="form-control">
          <option value="0">Select a location</option>
          {locations.map(location => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        onClick={clickEvent => {
          clickEvent.preventDefault();
          constructNewEmployee();
          employeeName.current.value = "";
          employeeLocation.current.value = 0;
        }}
        className="btn btn-primary">
        {" "}
        Save Employee{" "}
      </button>
    </form>
  );
};
