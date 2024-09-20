import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const ServiceList = ({ services, handleEdit, handleDelete }) => {
  return (
    <ul>
      {services.map((service, index) => (
        <li key={index}>
          <h3>
            <i className="fa fa-stethoscope" aria-hidden="true"></i> {service.name}
          </h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <div className="button-container">
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
