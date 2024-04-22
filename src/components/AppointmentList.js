import React from "react";
import { Link } from "react-router-dom";

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

        <Link  to="/AppointmentTable">
                        
                    </Link>
        </div>
    );
};

export default AppointmentList;