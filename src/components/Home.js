import React from "react";
 import {Link} from "react-router-dom";


export function Home (){

return (
  <div className="bg-white mx-auto px-4 py-3">  
  <div className="d-flex justify-content-between align items center"> 
      <div className="d-flex px-3 py-2"> 
           <h1 className=" container bg-white mb-0">Welcome To MediMatrix</h1>
      <img src="/Images/Medimatrix.webp" className="rounded-circle logo img-fluid px-1 py- float-start"  alt="Logo" />
      </div>
      <nav className="bg-danger"> 
  <ul className="list-unstyled d-flex mb-0" >
    <li className="mx-2" >
      <Link to="/">Home</Link>
    </li>
    <li className="mx-2">
      <Link to="/Login">Login</Link>
    </li>
    <li className="mx-2">
      <Link to="/Dashboard">Dashbboard</Link>
    </li>
  </ul>
</nav>
</div>
      </div>
  );
  
}
  export default Home;
  