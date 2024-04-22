import React, {useState, useEffect}from 'react';
import { API_Base_URL } from '../apiConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  DatePicker from 'react-date-picker'
import { Outlet } from 'react-router-dom';

const AppointmentForm = ({appointment, setAppoinments, isEditing}) => {
  const [formData, setFormData] = useState({ title: '', date: '' });
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date()); // defaulting to today
  const [selectedTime, setSelectedTime] = useState('');
  const [doctors, setDoctors] = useState([]); // State to store doctors



  useEffect(() => {
    
    if (isEditing && appointment) {
      setFormData({ title: appointment.title, date: appointment.date });
    }
  }, [appointment, isEditing]);

  useEffect(() => {
    // Function to fetch doctors from the backend
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors'); // Adjust the API endpoint as necessary
        const data = await response.json();
        setDoctors(data); // Set fetched data to state
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
        // Optionally handle errors, e.g., by setting an error state or using a notification system
      }
    };

    fetchDoctors();
  }, []);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    const res = await fetch(`/api/appointments/${isEditing ? appointment.id : ''}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  
    });

    const data = await res.json();
    if (isEditing) {
      setAppoinments(prev => prev.map(app => app.id === appointment.id ? data : app));
    } else {
      setAppoinments(prev => [...prev, data]);
    }
  };

  

  return (
    
    <div className="appointment-form-container">
    <form className="appointment-form" onSubmit={handleFormSubmit}>
      <h2>Book an Appointment</h2>
      
      <label htmlFor="doctor-select">Choose a Doctor:</label>
      <select
        id="doctor-select"
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        required
      >
        <option value="">Select a doctor...</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            Dr. {doctor.name}
          </option>
        ))}
      </select>

      <label htmlFor="appointment-date">Choose a Date:</label>
      <DatePicker
        id="appointment-date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM d, yyyy"
        minDate={new Date()}
      />

      <label htmlFor="appointment-time">Choose a Time:</label>
      <input
        type="time"
        id="appointment-time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        required
       />

<button type="submit">Book Appointment</button>
  </form>

</div>



    
  );

};

export default AppointmentForm;

