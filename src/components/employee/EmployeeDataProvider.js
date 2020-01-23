import React, { useState, useEffect } from "react";

export const EmployeeContext = React.createContext();

export const EmployeeProvider = props => {
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
    }).then(getEmployees);
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
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
