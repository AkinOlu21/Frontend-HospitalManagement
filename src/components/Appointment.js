import React, { useState } from "react";
import { API_Base_URL } from "../apiConfig";
import AppointmentList from "./AppointmentList";
const Appointment =() => {
    const [appointment, setappointment] = useState

}



const appointment = ({ appointment}) =>
 {
return (
<div>
    <h2>Appointments made </h2>
    <ul>
        {appointment.map(appointment => (
            <li key={appointment.id}>
                {appointment.time} - {appointment.type}
                
            </li>
        ))}
    </ul>
</div>

);

};

export default Appointment;