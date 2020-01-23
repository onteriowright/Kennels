import React from "react";
import "./animal/Animals.css";
import "./employee/Employees.css";
import "./location/Locations.css";
import "./customer/Customers.css";
import "./Kennel.css";
import LocationListComponent from "./location/LocationListComponent";
import { LocationProvider } from "./location/LocationsDataProvider";
import AnimalListComponent from "./animal/AnimalListComponent";
import { AnimalProvider } from "./animal/AnimalsDataProvider";
import CustomersListComponent from "./customer/CustomersListComponent";
import { CustomerProvider } from "./customer/CustomersDataProvider";
import EmployeeListComponent from "./employee/EmployeeListComponent";
import { EmployeeProvider } from "./employee/EmployeeDataProvider";

export default () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <h2>Animals</h2>
    <article>
      <AnimalProvider>
        <AnimalListComponent />
      </AnimalProvider>
    </article>

    <h2>Employees</h2>
    <article>
      <EmployeeProvider>
        <EmployeeListComponent />
      </EmployeeProvider>
    </article>

    <h2>Locations</h2>
    <article>
      <LocationProvider>
        <LocationListComponent />
      </LocationProvider>
    </article>

    <h2>Customers</h2>
    <article>
      <CustomerProvider>
        <CustomersListComponent />
      </CustomerProvider>
    </article>
  </>
);
