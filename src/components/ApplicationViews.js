import React from "react";
import { Route } from "react-router-dom";
import LocationListComponent from "./location/LocationListComponent";
import AnimalListComponent from "./animal/AnimalListComponent";
import CustomersListComponent from "./customer/CustomersListComponent";
import EmployeeListComponent from "./employee/EmployeeListComponent";
import EmployeeForm from "./employee/EmployeeForm";
import MainProvider from "./MainProvider";
export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/">
          <LocationListComponent />
        </Route>

        <Route exact path="/animals">
          <AnimalListComponent />
        </Route>

        <Route exact path="/customers">
          <CustomersListComponent />
        </Route>

        <Route exact path="/employees" render={props => <EmployeeListComponent {...props} />}></Route>

        <Route exact path="/employees/create" render={props => <EmployeeForm {...props} />}></Route>
      </MainProvider>
    </>
  );
};
