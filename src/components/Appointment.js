import React, { useState, useEffect} from 'react';
import { API_BASE_URL } from '../apiConfig';
import axios from 'axios';
import AppointmentForm from './AppointmentForm';
import { Link } from 'react-router-dom';


const Appointment = () => {
  const [appointment, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointments] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [doctors, setDoctors] = useState([]); // State to store doctors
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editingDoctor, setEditingDoctor] = useState(null);

 

useEffect(() => {
  fetchDoctors();
  fetchAppointments();
}, []);

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

const fetchAppointments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}Appointment`);
    setAppointments(response.data);
  } catch (error) {
    console.error('Error fetching appointments:', error);
  }
};

const handleFormSubmit = (appointmentData, isNew) => {
  const endpoint = `${API_BASE_URL}appointment/${!isNew ? appointmentData.id : ''}`;
  const method = isNew ? 'POST' : 'PUT';
  axios({
    method: method,
    url: endpoint,
    data: appointmentData,
  }).then(response => {
    if (isNew) {
      setAppointments([...appointment, response.data]);
    } else {
      setAppointments(appointment.map(app => (app.id === response.data.id ? response.data : app)));
    }
    setIsEditing(false);
    setSelectedAppointments(null);
  }).catch(error => {
    console.error('Error submitting form:', error);
  });
};

const handleDeleteAppointment=  async (id) => {
  try {
    await axios.delete(`/api/appointment/${id}`);
    setAppointments(appointment.filter(appointment => appointment.id !== id));
  } catch (error) {
    console.error('Error deleting the appointment:', error);
  }
};

/*useEffect(() => {
    
    if (isEditing && appointment) {
      setFormDatas({ title: appointment.title, date: appointment.date });
    }
  }, [appointment, isEditing]);*/


  /*const handleEdit = (id) => {
    console.log('Edit button clicked for editing appointments:', id);
    const selected = appointment.find((appointment) => appointment.AppointmentId === id);
    console.log('selected appointment:', selected)
    setSelectedAppointments(null);

    setEditingAppointment({id: selected.id, appointmentDate: selected.AppointmentDateTime})
  }


const handleInputChange = async (e) => {
  setEditingDoctor({ ...editingDoctor, [e.target.name]: e.target.value });
};



  
  const handleCreate = () => {
    setSelectedDoctor(null);
   
  };
  


  const addAppointment = (newAppointment) => {
    newAppointment.id = Math.random().toString(36).substr(2, 9); // simple unique id generator
    setAppointments([...appointment, newAppointment]);
  };

  const updateAppointment = (updatedAppointment) => {
    const updatedItems = appointment.map(item =>
      item.id === updatedAppointment.id ? updatedAppointment : item
    );
    setAppointments(updatedItems);
    setSelectedAppointments(null);
  };

  const deleteAppointment = (id) => {
    const filteredItems = appointment.filter(item => item.id !== id);
    setAppointments(filteredItems);
  };

  const editAppointment = (appointment) => {
    setSelectedAppointments(appointment);
  };

  const clearSelection = () => {
    setSelectedAppointments(null);
  };*/

  return (
    <div className="container mt-5">
    <h2>Manage Appointments</h2>
    {selectedAppointment && (
      <AppointmentForm
        appointment={selectedAppointment}
        doctors={doctors}
        handleFormSubmit={handleFormSubmit}
        isEditing={isEditing}
      />
    )}
    <div>
      {appointment.map((app) => (
        <div key={app.id} className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">{app.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{app.date} at {app.time}</h6>
            <button onClick={() => {setSelectedAppointments(app); setIsEditing(true);}} className="btn btn-primary mr-2">Edit</button>
            <button onClick={() => handleDeleteAppointment(app.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
    <button onClick={() => {setSelectedAppointments({ title: '', date: '', time: '', doctorId: '' }); setIsEditing(false);}} className="btn btn-success">Add New Appointment</button>
  </div>
  );
};

export default Appointment;
