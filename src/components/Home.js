import React from "react";
 import {Link} from "react-router-dom";


export function Home (){

return (

<div className="hero">  
  <div className=" content d-flex justify-content-between align items center px-1 py-0"> 
  <div className="overlay"></div>

          <nav className="nav  fw-20 "> 
  <ul className="list-unstyled d-flex mb-2 mb-lg-0" >
    <li className="nav-item mx-2" >
      <Link className="btn" to="/">Home</Link>
    </li>

    <li className="nav-item mx-2">
      <Link className="btn " to="/Login">Login</Link>
    </li>

    <li className="nav-item mx-2">
      <Link className="btn " to="/Login">Register</Link>
    </li>

    <li className="nav-item mx-2">
      <Link className="btn btn-outline-red" to="/Dashboard">Dashbboard</Link>
    </li>  
    <li className="nav-item mx-2">
      <Link className="btn btn-outline-red" to="/Register">Resgister</Link>
    </li>  

    <Link  to="/Appointment">Appointment  </Link>
    
    <Link  to="/Patients">Patient </Link>
    
  </ul>


</nav>
<div className="midheader ">
   <h1 className=" h1home align-item-center mx-5 py-5">Medimatrix Management</h1>
   <div className="locations">
  
   <div className="locations">
    <Link>
  <div className="location-item">
    <div className="caption">
      <img className="btn" src="/Images/loc1.png" alt="Apex Health Tower" /> 
         <p>Apex Health tower</p>

    </div>
  </div>
</Link>
    <Link>
  <div className="location-item">
    <div className="caption" >
      <img className="btn" src="/Images/loc2.png" alt="Summit Healthcare Hub" />
       <p>Summit Healthcare Hub</p>
    </div>
  </div>
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
  