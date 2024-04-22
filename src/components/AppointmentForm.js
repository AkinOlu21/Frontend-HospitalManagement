import React from 'react';
import { API_Base_URL } from '../apiConfig';
import axios from 'axios';
import  DatePicker from 'react-date-picker'

const AppointmentForm = () => {
  





  

  return (
    <div>

    <div className="appointment-form-container">
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      
      <label htmlFor="doctor-select">Choose a Doctor:</label>
      <select
        id="doctor-select"
        value={selectedDoctor}
        onChange={(e) => setselectedDoctor(e.target.value)}
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
      <input>
        type="time"
        id="appointment-time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        required
        </input>

<button type="submit">Book Appointment</button>
  </form>


</div>

  </div>

    
  );
};

export default AppointmentForm;
