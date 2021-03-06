import React, { useState, useEffect } from "react";

/*
    The context is imported and used by individual components
    that need data
*/

export const AnimalContext = React.createContext();

/*
 This component establishes what data can be used.
 */

export const AnimalProvider = props => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return fetch("http://localhost:5000/animals")
      .then(res => res.json())
      .then(setAnimals);
  };

  /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */

  const addAnimal = animal => {
    return fetch("http://localhost:5000/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    }).then(getAnimals);
  };

  const updateAnimal = animalObject => {
    return fetch(`http://localhost:5000/animals/${animalObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalObject)
    }).then(getAnimals);
  };

  const releaseAnimal = animal => {
    return fetch(`http://localhost:5000/animals/${animal.id}`, {
      method: "DELETE"
    }).then(getAnimals);
  };

  /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */

  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    console.log("****  LOCATION APPLICATION STATE CHANGED  ****");
  }, [animals]);

  return (
    <AnimalContext.Provider
      value={{
        animals,
        addAnimal,
        releaseAnimal,
        updateAnimal
      }}>
      {props.children}
    </AnimalContext.Provider>
  );
};
