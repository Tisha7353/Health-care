import React, { useState, useEffect } from 'react';

const AddServiceForm = ({ currentService, addService, updateService, isEditing }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (isEditing) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [currentService, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      if (isEditing) {
        updateService({ name, description, price });
      } else {
        addService({ name, description, price });
      }
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'} Service</button>
    </form>
  );
};

export default AddServiceForm;
