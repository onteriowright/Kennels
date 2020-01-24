import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import Employee from "./Employee";
import "./Employees.css";

export default props => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="employees">
      <button
        className="btn"
        onClick={() => props.history.push("/employees/create")}
      >
        Add Employee
      </button>
      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
