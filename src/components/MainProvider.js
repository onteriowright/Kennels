import React from "react";
import { LocationProvider } from "./location/LocationsDataProvider";
import { EmployeeProvider } from "./employee/EmployeeDataProvider";
import { CustomerProvider } from "./customer/CustomersDataProvider";
import { AnimalProvider } from "./animal/AnimalsDataProvider";

export default props => {
  return (
    <>
      <LocationProvider>
        <EmployeeProvider>
          <AnimalProvider>
            <CustomerProvider>{props.children}</CustomerProvider>
          </AnimalProvider>
        </EmployeeProvider>
      </LocationProvider>
    </>
  );
};
