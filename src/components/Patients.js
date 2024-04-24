import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Patients = () => {
  return (
    <div>
    <div >
         <div className='row flex-nowrap'>
            <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
            <Link  className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none 'to="/Dashboard"> <span className='fs-5 fw-bold d-sm-inline'>Dashbboard</span></Link>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
                <li className='w-100'>
                    <Link className='nav-link text-white px-0 mb-1 align-middle' to="/">
                        <i className='fs-4 bi-speedometer ms-2'>
                        <span className='ms-2 d-none d-sm-inline'>Home</span>
                        </i>
                    </Link>
                </li>
                <li className='w-100'>

                    <Link  className='nav-link px-0 align-middle mb-1 text-white' to="/Patients/appointment" >
                    <i className='fs-4 bi-person-vcard ms-2'>
                    </i>
                        <span className='ms-2 d-none d-sm-inline'> Make Appointment
                        </span>
                    </Link>
                  
                  
                </li>
                <li className='w-100'>
                   
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to="/viewappointment">
                    <i className='fs-4 bi-columns ms-2'>
                        </i>
                        <span className= 'ms-2 d-none d-sm-inline'>View Appointment</span>
                    </Link>
                
                </li>
                <li>
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to="/viewmedicalrecord">
                        <i className='fs-4 bi-person-fill ms-2'>
                        </i>
                        <span className='ms-2 d-none d-sm-inline'>View medicalrecord
                        </span>
                    </Link>
                </li>
    
                <li>
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to='/appointmenthistory'>
                    <i className='fs-4 bi-archive-fill ms-2'>
                    </i>
                    <span className='ms-2 d-none d-sm-inline'>Appointment history</span>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link px-0 align-middle text-white'>
                        <i className='fs-4 bi-box-arrow-left text-white'>
                        </i>
                        <span className='ms-2 d-none d-sm-inline'>Logout
                        </span>
                    </Link>
                </li>
            </ul>
                </div>
            </div>
            <div className='col p-0 m-0'>
                
                <Link to={'/'}>
                <div className='nav-link p-2 d-flex body-tertiary justify-content-center shadow-lg medishadow'>
                    <h4 className='fw-bold fs-3 '>MEDIMATRIX MANAGEMENT SERVICES </h4>
                </div>
                </Link>
            
            </div>  
         
        </div>
     
      
        </div> 
          <Outlet/>
          </div>
  )
}

export default Patients