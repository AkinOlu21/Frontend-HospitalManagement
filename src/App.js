import React, { useEffect, useState } from 'react';
import logo from './logo.png/Medimatrix.webp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Appointment from './components/Appointment';
import './App.css';
import Home from './components/Home';


const App = () => {
  const [appointment, setAppointment] = useState ([]);
  const [Doctors, setDoctors] = useState ([])

  useEffect( () =>{
fetch('')
.then(data => setAppointment(data))

  })

  const addappointments = appointments => {
    setAppointment([...appointment, appointments]);
  };


  return (
  <Router>
  <div className="App">   
     <img src={logo} alt="MediMatrix Logo" width= '100' className='MediMatrixLogo' />
      <h1>Welcome MediMatrix</h1>
      
  <nav>
  <ul>
    <li className='list-unstyled'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/appointment">Appointment</Link></li>
    </li>
  </ul>
</nav>


 </div>

  </Router>
  
    
  );
}

export default App;
