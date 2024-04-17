import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Dashbboard = () => {
  return (
    <div className='container-fluid dashboard'>
        <div className='row flex-nowrap'>
            <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
            <Link  className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none 'to="/Dashboard"> <span className='fs-5 fw-bold d-sm-inline'>Admin Dashbboard</span></Link>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
                <li className='w-100'>
                    <Link className='nav-link text-white px-0 mb-1 align-middle' to="/Dashboard">
                        <i className='fs-4 bi-speedometer ms-2'>
                        <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                        </i>
                    </Link>
                </li>
                <li className='w-100'>

                    <Link  className='nav-link px-0 align-middle mb-1 text-white' to="/Dashboard/employee" >
                    <i className='fs-4 bi-person-vcard ms-2'>
                    </i>
                        <span className='ms-2 d-none d-sm-inline'> Employees
                        </span>
                    </Link>
                </li>
                <li className='w-100'>
                   
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to="/Dashboard/category">
                    <i className='fs-4 bi-columns ms-2'>
                        </i>
                        <span className= 'ms-2 d-none d-sm-inline'>Category</span>
                    </Link>
                
                </li>
                <li>
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to="/Dashboard/profile">
                        <i className='fs-4 bi-person-fill ms-2'>
                        </i>
                        <span className='ms-2 d-none d-sm-inline'>Profile
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to='/Dashboard/Patients'>
                    <i className='fs-4 bi-file-person ms-2'>
                    </i>
                    <span className='ms-2 d-none d-sm-inline'>View Patients</span>
                    </Link>
                </li>
                
                <li>
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to='/Dashboard/medicalrecord'>
                    <i className='fs-4 bi-journal-medical ms-2'>
                    </i>
                    <span className='ms-1 d-none d-sm-inline'>View Medical Records</span>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link px-0 align-middle mb-1 text-white' to='/Dashboard/appointmenthistory'>
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
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashbboard