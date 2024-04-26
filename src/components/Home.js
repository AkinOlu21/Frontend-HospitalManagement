import React from "react";
import { useState } from "react";
 import {Link, useNavigate} from "react-router-dom";
 import { useAuth } from "../context/AuthProvider";
 import MapComponent from "./Maps";

 

export function Home (){
  const { auth, setAuth} = useAuth();
  const ROLES = auth.ROLES || [];
  const navigate = useNavigate();



  const [isLoggedIn, setLoggedIn] = useState(auth.isAuthenticated);



  const handleLogout = () => {
    setAuth({ ...auth, isAuthenticated: false, roles: [] }); // Update auth context
    setLoggedIn(false); // Update local state
  };


  
    const handleLocationClick = (location) => {
      navigate('/maps', { state: { location } });
    };


    const locations = [
      { id: 1, name: "Apex Health Tower", latitude: 37.7749, longitude: -122.4194 },
      { id: 2, name: "Summit Healthcare Hub", latitude: 34.0522, longitude: -118.2437 }
    ];

return (

<div className="hero">  
  <div className=" content d-flex justify-content-between align items center px-1 py-0"> 
  <div className="overlay"></div>

          <nav className="nav  fw-20 "> 
  <ul className="list-unstyled d-flex mb-2 mb-lg-0" >
    <li className="nav-item mx-2" >
      <Link className="btn" to="/">Home</Link>
    </li>

                            
 {!auth.isAuthenticated && (
                            <>
                                <li className="nav-item mx-2">
                                    <Link className="btn" to="/Login">Login</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="btn btn-outline-red" to="/Register">Register</Link>
                                </li>
                            </>
                        )} 
    {!isLoggedIn && 
    (
    <li className="nav-item mx-2">
       <Link className="btn btn-outline-red" to="/Patients/dashboard">Patient Dashboard</Link>
        </li>
    )}             

{!isLoggedIn && 
(
   <li className="nav-item mx-2">
          <Link className="btn btn-outline-red" to="/Dashboard">Admin Dashboard</Link>
           </li>)}

           
            
            


{isLoggedIn ? (
              <button className="btn btn-outline-red" onClick={handleLogout}>Logout</button>
            ) : (
              <li className="nav-item mx-2">
                <Link className="btn" to="/Login">Login</Link>
              </li>
            )}

     <li className="nav-item mx-2">
      <Link className="btn btn-outline-red" to="/Patients/appointmentform">Make an appointment</Link>
    </li>  
    
    
  
  </ul>


</nav>

<div className="midheader ">
   <h1 className=" h1home align-item-center mx-5 py-5">Medimatrix Management</h1>
   <div className="locations">
  
   <div className="locations">
    <Link to='/Maps'>
    {locations.map(loc => (
  <div key={loc.id} className="location-item"  onClick={() => handleLocationClick(loc)}>
    <div className="caption">
      <img className="btn" src={`/Images/loc1.png`} alt="Apex Health Tower" /> 
         <p>Apex Health tower</p>

    </div>
  </div>
    ))}
</Link>

    <Link to='/Maps'>
    {locations.map(loc => (
    <div  key={loc.id} className="location-item" onClick={() => handleLocationClick(loc)}>
    <div className="caption" >
      <img className="btn" src="/Images/loc2.png" alt="Summit Healthcare Hub" />
       <p>Summit Healthcare Hub</p>
    </div>
    
  </div> 
 ))}
  </Link>
  
</div>
<div className="about ">
<div className="about-left"> 
        <img src="/Images/Medimatrixx2.png" className="about-img" alt="Logo" />
</div>
<div className="about-right ">
  <h3>About: 
    Medimatrix Medimatrix is a healthcare management service for patients
     and doctors to use to make their life easier</h3>
  </div>


</div>
</div>
</div>

 </div>
 </div>

  );

}


  export default Home;
  