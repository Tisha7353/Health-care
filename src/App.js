import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';

const App = () => {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === currentService.index ? updatedService : service
    );
    setServices(updatedServices);
    setIsEditing(false);
    setCurrentService(null);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentService({ ...services[index], index });
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div>
      <h1>Healthcare Services Manager</h1>
      <AddServiceForm
        addService={addService}
        updateService={updateService}
        currentService={currentService}
        isEditing={isEditing}
      />
      <ServiceList
        services={services}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
