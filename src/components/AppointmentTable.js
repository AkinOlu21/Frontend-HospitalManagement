import React from 'react'

const AppointmentTable = ({appointment, handleEdit, handleDelete}) => {
  return (
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
  )
}

export default AppointmentTable