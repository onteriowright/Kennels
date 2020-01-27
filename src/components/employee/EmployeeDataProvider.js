import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

export const EmployeeContext = React.createContext();

const EmployeeProvider = props => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:5000/employees")
      .then(res => res.json())
      .then(setEmployees);
  };

  const addEmployees = employee => {
    return fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })
      .then(getEmployees)
      .then(props.history.push("/employees"));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    console.log("****  LOCATION APPLICATION STATE CHANGED  ****");
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployees
      }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default withRouter(EmployeeProvider);
