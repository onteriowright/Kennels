import React, { useContext } from "react";
import { AnimalContext } from "./AnimalsDataProvider";
import Animal from "./Animal";
import "./Animals.css";

export default () => {
  const { animals } = useContext(AnimalContext);

  return (
    <>
      <h1>Animals</h1>
      <div className="animals">
        {animals.map(animal => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};
