import React, { useState } from "react";

function NewPlantForm(onAddPlant) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  const handleChange = (c) => {
    const {name, value} = c.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (c) => {
    c.preventDefault()
    
    const newPlant = {
      ...formData,
      price: parseFloat(formData.price)
    }
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "Application/JSON"},
      body: JSON.stringify(newPlant)
    })
    .then((r) => r.json())
    .then((newPlant) => {
      onAddPlant(newPlant)
      setFormData({
        name: "",
        image: "",
        price: ""
      });
    });
  };
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
  
}

export default NewPlantForm;
