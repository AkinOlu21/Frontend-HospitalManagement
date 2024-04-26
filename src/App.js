import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';
import Appointment from './components/Appointment';
import './App.css';
import Home from './components/Home';
import { Login } from './components/Login';
import Dashbboard from './components/Dashbboard';
import Employee from './components/Epmployee';
import Category from './components/Category';
import Profile from './components/Profile';
import AddCategory from './components/AddCategory';
import Patients from './components/Patients';
import AppointmentForm from './components/AppointmentForm';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import Maps from './components/Maps'
const ROLES = {
  'Admin': 1,
  'patient': 2,
}

function App(){

  return (
  <>
  <title>Medimatrix</title>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Login' element={<Login/>}  />
    <Route path='/Register' element={<Register/>}  />
    <Route path='/Maps' element={<Maps />} />
    
    <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.patient]} />}>
    <Route path='/Dashboard' element={<Dashbboard/>}>
      <Route path='/Dashboard/employee' element={<Employee/>}></Route>
      <Route path='/Dashboard/category' element={<Category/>}></Route>
      <Route path='/Dashboard/profile' element={<Profile/>}></Route>
      <Route path='/Dashboard/add_category' element={<AddCategory/>}></Route>
    </Route>
   
    <Route path='/Register' element={<Register/>}>
      <Route path='/Register/Home'element={<Home/>}></Route>
    </Route>

    <Route path='/Login' element={<Login/>}>
      <Route path='/Login/Home'element={<Home/>}>
      </Route>
    </Route>



    <Route path='/Patients' element={<Patients/>}>
      <Route path='/Patients/appointment' element={<Appointment/>}></Route>
      <Route path='/Patients/appointmentform' element={<AppointmentForm/>}></Route>
    </Route>

    <Route path='/Appointment' element={<AppointmentForm/>}></Route>
    

  </Route>
  </Routes>

  </>
  )
  
}

export default App;
