import React, { useState, useEffect } from 'react';
import Appointment from './Appointment';
import { API_Base_URL } from '../apiConfig';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the backend
    const fetchData = async () => {
      const res = await fetch('/api/appointments'); // Modify with your actual API
      const data = await res.json();
      setAppointments(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {appointments.map(appointment => (
        <Appointment key={appointment.id} appointment={appointment} setAppointments={setAppointments} />
      ))}
    </div>
  );
};

export default AppointmentsList;
