import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((p) => p.json())
    .then(setPlants)
  }, [])
  
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const filteredPlants = plants.filter((plant) => {
    if (!searchTerm) return true;
    if (!plant.name) return false;
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
