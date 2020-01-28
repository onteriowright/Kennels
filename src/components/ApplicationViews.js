import React from "react";
import { Route } from "react-router-dom";
import LocationListComponent from "./location/LocationListComponent";
import AnimalListComponent from "./animal/AnimalListComponent";
import CustomersListComponent from "./customer/CustomersListComponent";
import EmployeeListComponent from "./employee/EmployeeListComponent";
import EmployeeForm from "./employee/EmployeeForm";
import MainProvider from "./MainProvider";
import AnimalDetails from "./animal/AnimalDetails";

export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/">
          <LocationListComponent />
        </Route>

        <Route path="/animals">
          <AnimalListComponent />
        </Route>

        <Route path="/customers">
          <CustomersListComponent />
        </Route>

        <Route exact path="/employees" render={props => <EmployeeListComponent {...props} />}></Route>

        <Route path="/employees/create" render={props => <EmployeeForm {...props} />}></Route>

        <Route path="/animals/:animalId(\d+)" render={props => <AnimalDetails {...props} />}></Route>
      </MainProvider>
    </>
  );
};
