import React, { useContext, useRef } from "react";
import { LocationContext } from "../location/LocationsDataProvider";
import { AnimalContext } from "./AnimalsDataProvider";
import "./Animals.css";

export default props => {
  const { addAnimal } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const animalName = useRef("");
  const animalBreed = useRef("");
  const animalLocation = useRef(0);

  const constructNewAnimal = () => {
    const locationId = parseInt(animalLocation.current.value);
    const animalBreedValue = animalBreed.current.value;
    const nameValue = animalName.current.value;

    if (nameValue === "") {
      alert("Please enter name");
    } else if (animalBreedValue === "") {
      alert("Please enter breed");
    } else if (locationId === 0) {
      alert("Please select a location");
    } else {
      addAnimal({
        name: animalName.current.value,
        breed: animalBreed.current.value,
        locationId: locationId,
        customerId: localStorage.getItem("kennel_customer")
      }).then(() => props.history.push("/animals"));
    }
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">Admit Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal name</label>
          <br />
          <input type="text" name="animalName" ref={animalName} required autoFocus className="form-control" placeholder="Animal name" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="animalBreed">Animal Breed:</label>
          <input type="text" name="animalBreed" ref={animalBreed} required className="form-control" placeholder="Animal Breed" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <br />
          <select defaultValue="" name="location" ref={animalLocation} className="form-control">
            <option value="0">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={clickEvent => {
          clickEvent.preventDefault();
          constructNewAnimal();
        }}
        className="btn btn-primary">
        Make Reservation
      </button>
      <button
        onClick={clickEvent => {
          clickEvent.preventDefault();
          props.history.push("/animals");
        }}>
        Close
      </button>
    </form>
  );
};
