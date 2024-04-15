import React, { useState } from 'react'
import '../styles.css'
import axios from 'axios'

export const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25 border loginForm'>
        <h2>  Login  </h2>
        <form onSubmit={handleSubmit} className='box '>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email:</strong></label>
                <input type='email' name='email' autoComplete='off' placeholder='Enter your email' 
                onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'><strong>Password:</strong></label>
                <input type='password' name='password' autoComplete='off' placeholder='Enter your password' 
                onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
            </div>

            <button className='btn btn-outline-secondary w-100 rounded-20 mb-2' >Log In</button>
            <div className='mb-2'>
                <input type='checkbox' name='tickbox' id='tick' className='me-1'/>
                <label htmlFor='password'> Remember me </label>

            </div>
        </form>
        
    </div>    
    </div>
  )
}
