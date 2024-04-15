import React from "react";

const AppointmentList = ({ appointments, addappointments }) =>
 {
    return (
        <div>
        <h2>Appointment List</h2> 
        <ul>
            {appointments.map(appointments => (
                <li key={appointments.id}>
                    {appointments.time} - {appointments.type}
                    <button onClick={() => addappointments(appointments)}>Add appointment</button>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default AppointmentList;