import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Appointment from './components/Appointment';
import './App.css';
import Home from './components/Home';
import { Login } from './components/Login';
import Dashbboard from './components/Dashbboard';
import Employee from './components/Epmployee';
import Category from './components/Category';
import Profile from './components/Profile';
import AddCategory from './components/AddCategory';


function App(){

  return (
  <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Login' element={<Login/>}  />
    <Route path='/Dashboard' element={<Dashbboard/>}>
      <Route path='/Dashboard/employee' element={<Employee/>}></Route>
      <Route path='/Dashboard/category' element={<Category/>}></Route>
      <Route path='/Dashboard/profile' element={<Profile/>}></Route>
      <Route path='/Dashboard/add_category' element={<AddCategory/>}></Route>
    </Route>

  </Routes>

  </>
  )
  
}

export default App;
