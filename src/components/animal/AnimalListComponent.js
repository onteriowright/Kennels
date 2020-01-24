import React, { useContext } from "react";
import { AnimalContext } from "./AnimalsDataProvider";
import { LocationContext } from "../location/LocationsDataProvider";
import { CustomerContext } from "../customer/CustomersDataProvider";
import Animal from "./Animal";
import "./Animals.css";

export default () => {
  const { animals } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomerContext);

  return (
    <div className="animals">
      {animals.map(animal => {
        const owner = customers.find(
          customer => customer.id === animal.customerId
        );
        const clinic = locations.find(
          location => location.id === animal.locationId
        );
        return (
          <Animal
            key={animal.id}
            animal={animal}
            customer={owner}
            location={clinic}
          />
        );
      })}
    </div>
  );
};
