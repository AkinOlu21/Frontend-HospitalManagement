
import React from 'react';
import { API_BASE_URL } from '../apiConfig';
import { useState, useEffect } from 'react';
import axios from 'axios';


const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [patientId, setPatientId] = useState('')
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [editingDoctor, setEditingDoctor] = useState(null)
  
  useEffect(() => {
    fetchDoctors();
    fetchPatients();
  }, []);
  
  const fetchPatients = async () =>{
    try {
      const response = await axios.get (`${API_BASE_URL}Patient`)
      setPatients(response.data)
    } catch (error) {
      console.error('Error fetching patient:', error)
      
    }
  }
  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Doctor`);
      setDoctors(response.data);
      setSelectedDoctor(null);
      setEditingDoctor(null)
      
    } catch (error) {
      console.error('Error fetching Doctors:', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      doctorId: selectedDoctor,
      patientId: selectedPatient,
      appointmentDateTime: new Date(selectedDate + 'T' + selectedTime).toISOString()
    };

    try {
      const response = await axios.post(`${API_BASE_URL}appointment`, formData);
      console.log('Appointment created:', response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
      console.log('Error details:', error.response ? error.response.data : error.message);

    }
  };

  /*const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        doctorId: selectedDoctor,
        patientID: selectedPatient,
       appointmenrDateTime: new Date(selectedDate + 'T' + selectedTime).toISOString()
      };
      // POST request to create or PUT to update an appointment
      const response = await axios({
        method: 'post',
        url: `${API_BASE_URL}appointment`,
        data: formData
      });
      console.log('Appointment created:', response.data);
      // Handle success (e.g., clear form, show message, etc.)
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };*/

  return (
    
    <div className="appointment-form-container">
    <form className="appointment-form" onSubmit={handleFormSubmit}>
      <h2>Book an Appointment</h2>
      
      <label >Choose a Doctor:</label>
      <select
        className="doctor-select"
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        required
      >
        <option value="">Select a doctor...</option>
        {doctors.map((doctor) => (
          <option key={doctor.DoctorId} value={doctor.DoctorId}>
           Dr. {doctor.DoctorId} {doctor.lastName}
          </option>
        ))}
      </select>

      <label>Select your name:</label>
<select className="patient-select"
        value={selectedPatient}
        onChange={(e) => setSelectedPatient(e.target.value)}
        required>
<option value="">Select yourself...</option>
        {patients.map((patient) => (
          <option key={patient.PatientId} value={patient.PatientId}>
           {patient.firstName} {patient.lastName}
          </option>
        ))}
</select>
    <label htmlFor="appointment-date">Choose a Date (MM/DD/YYYY):</label>
    <input type="date"   value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required
            
          />

       <label >Choose a Time:</label>
      <input
        type="time"
        className="appointment-time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        required
       />

<button  type="submit">Book Appointment</button>
  </form>

</div>
    
  );

};

export default AppointmentForm;

