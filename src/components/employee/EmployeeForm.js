import React, { useContext, useRef } from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import { LocationContext } from "../location/LocationsDataProvider";
import "./Employees.css";

export default props => {
  const { addEmployees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const employeeName = useRef("");
  const employeeLocation = useRef(0);

  const constructNewEmployee = () => {
    const locationId = parseInt(employeeLocation.current.value);
    const nameValue = employeeName.current.value;
    if (nameValue === "") {
      alert("Please enter name");
    } else if (locationId === 0) {
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
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name</label>
          <br />
          <input type="text" ref={employeeName} required autoFocus className="form-control" placeholder="Employee name" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Assign to location</label>
          <br />
          <select defaultValue="" name="location" ref={employeeLocation} className="form-control">
            <option value="0">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={clickEvent => {
          clickEvent.preventDefault();
          constructNewEmployee();
        }}
        className="btn btn-primary">
        {" "}
        Save Employee{" "}
      </button>
      <button
        onClick={clickEvent => {
          clickEvent.preventDefault();
          props.history.push("/employees");
        }}>
        Close
      </button>
    </form>
  );
};
