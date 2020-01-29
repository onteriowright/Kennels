import React from "react";
import { Route } from "react-router-dom";
import LocationListComponent from "./location/LocationListComponent";
import AnimalListComponent from "./animal/AnimalListComponent";
import CustomersListComponent from "./customer/CustomersListComponent";
import EmployeeListComponent from "./employee/EmployeeListComponent";
import EmployeeForm from "./employee/EmployeeForm";
import MainProvider from "./MainProvider";
import AnimalDetails from "./animal/AnimalDetails";
import AnimalForm from "./animal/AnimalForm";

export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/">
          <LocationListComponent />
        </Route>

        <Route exact path="/animals" render={props => <AnimalListComponent {...props} />} />

        <Route exact path="/customers">
          <CustomersListComponent />
        </Route>

        <Route exact path="/employees" render={props => <EmployeeListComponent {...props} />} />

        <Route exact path="/employees/create" render={props => <EmployeeForm {...props} />} />

        <Route exact path="/animals/:animalId(\d+)" render={props => <AnimalDetails {...props} />} />

        <Route exact path="/animals/create" render={props => <AnimalForm {...props} />} />

        <Route path="/animals/edit/:animalId(\d+)" render={props => <AnimalForm {...props} />} />
      </MainProvider>
    </>
  );
};
