import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Axios } from 'axios'
import { API_Base_URL } from '../apiConfig'
import AppointmentForm from './AppointmentForm'

const Appointment = () => {

  return (
    <div>
    <div className='appointment'>Appointment</div>
<Link  to="/AppointmentTable">appointment  table </Link>

<Link className='bg-white btn' to="AppointmentForm"> Appointment Form </Link>
<table>
    <thread>
        <tr>
            <th>ID</th>
            <th>PatientID</th>
            <th>DoctorID</th>
            <th>Appointment Time</th>
            <th>Appointment Date</th>
        </tr>
        <tbody>
            {appointment.map((appointment) => (
                <tr key={appointment.id}>
                <td>{appointment.Patientid}</td>
                <td>{appointment.DoctorId}</td>
                <td>{appointment.Time}</td>
                <td>{appointment.appointmentDate}</td>
                <td>
                <button onClick={() => handleEdit(appointment.id)}>Edit</button>
                <button onClick={() => handleDelete(appointment.id)}>Delete</button>
              </td>
              </tr>
            ))
            }
        </tbody>
    </thread>
   </table>
    
    
   <Outlet/>
    </div>
  )
}

export default Appointment