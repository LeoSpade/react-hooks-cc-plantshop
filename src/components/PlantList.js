import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  // const [plants, setPlants] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:6001/plants')
  //   .then((p) => p.json())
  //   .then((data) => {
  //     console.log("Fetched data", data)
  //   setPlants(data)
      
  //   })
  // }, [])




  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
     ))}
    </ul>
  );
}

export default PlantList;
