import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationsDataProvider";
import { AnimalProvider } from "./animal/AnimalsDataProvider";
import LocationListComponent from "./location/LocationListComponent";
import AnimalListComponent from "./animal/AnimalListComponent";
import { CustomerProvider } from "./customer/CustomersDataProvider";
import CustomersListComponent from "./customer/CustomersListComponent";
import { EmployeeProvider } from "./employee/EmployeeDataProvider";
import EmployeeListComponent from "./employee/EmployeeListComponent";
import EmployeeForm from "./employee/EmployeeForm";

export default props => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <LocationListComponent />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals">
              <AnimalListComponent />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomersListComponent />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route
            exact
            path="/employees"
            render={props => <EmployeeListComponent {...props} />}
          ></Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
