import React, { useContext } from "react";
import { CustomerContext } from "../customer/CustomersDataProvider";
import { LocationContext } from "../location/LocationsDataProvider";
import { AnimalContext } from "./AnimalsDataProvider";
import "./Animals.css";

export default props => {
  const { animals, releaseAnimal } = useContext(AnimalContext);
  const { customers } = useContext(CustomerContext);
  const { locations } = useContext(LocationContext);

  const chosenAnimalId = parseInt(props.match.params.animalId, 10);

  const animal = animals.find(singleAnimal => singleAnimal.id === chosenAnimalId) || {};

  const customer = customers.find(singleCustomer => singleCustomer.id === animal.customerId) || {};

  const location = locations.find(singleLocation => singleLocation.id === animal.locationId) || {};

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      <div className="animal__location">Location: {location.name}</div>
      <div className="animal__owner">Owner: {customer.name}</div>
      <button onClick={() => releaseAnimal(animal).then(props.history.push("/animals"))}>Release Animal</button>
      <button onClick={() => props.history.push("/animals")}>Close</button>
    </section>
  );
};
