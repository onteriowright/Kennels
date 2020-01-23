import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import Employee from "./Employee";
import "./Employees.css";

export default () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="employees">
      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
