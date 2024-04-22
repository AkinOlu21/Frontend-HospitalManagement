import React from 'react';
import axios from 'axios';
import { API_Base_URL } from '../apiConfig';
import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentList';

const Appointment = ({ appointment, setAppointments }) => {
  const handleDelete = async (id) => {
    const res = await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setAppointments(prev => prev.filter(app => app.id !== id));
    }
  };

  return (
    <div>
      <h3>{appointment}</h3>
      <p>{appointment}</p>
      <button onClick={() => handleDelete(appointment.id)}>Delete</button>
      <button>Edit</button> {/* We will link this to a form */}
    </div>
  );
};

export default Appointment;
