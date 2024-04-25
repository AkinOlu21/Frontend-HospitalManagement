import React, { useState , useRef, useEffect, useContext} from 'react'
import '../styles.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { API_BASE_URL } from '../apiConfig';

export const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const emailRef = useRef();
    const  errRef = useRef();

    const [email, setEmail] = useState('');    
    const [pwd, setPwd]= useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  useEffect(() => {
     emailRef.current.focus();
    }, [])

    useEffect (() => {
        setErrMsg('');
    
     }, [email, pwd])
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData ={
            Email: email,   
            Password: pwd 
        }
       try {
        const response = await axios.post(`${API_BASE_URL}Account/login`, formData,
        JSON.stringify({email , pwd}),
        {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        }
    );
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data?.accessToken;
        const roles = response?.data.roles;
        setAuth({email, pwd, roles, accessToken})
     
       } catch (error) {
        if (!error?.response){
            setErrMsg('No server response');
        } else if (error.response?.status === 400){
            setErrMsg('Missing username or password');
        }else if (error.response?.status ===401) {
            setErrMsg('Unauthorised');
        }else {
            setErrMsg('Login Failed')
        }
        errRef.current.focus();
       }
       
        
    }
    

    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25 border loginForm'>

        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'> {errMsg}</p>

        <h2>  Login  </h2>
        <form onSubmit={handleSubmit} className='box '>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email:</strong></label>
                <input 
                type='text' 
                name='email' 
                ref={emailRef}
                autoComplete='off' 
                placeholder='Enter your email' 
                onChange={(e) => setEmail(e.target.value)} 
                className='form-control rounded-0'
                value={email}
                required
                />                
            </div>

            <div className='mb-3'>
                <label htmlFor='password'><strong>Password:</strong></label>
                <input 
                type='password'
                 name='password'                
                 placeholder='Enter your password'                 
                onChange={(e) => setPwd(e.target.value)} 
                className='form-control rounded-0'
                value={pwd}
                required
                />
            </div>

            <button className='btn btn-outline-secondary w-100 rounded-20 mb-2' >Log In</button>

        <p> 
         Need an Account?<br/>
        <span className="line">
        <Link to="/Register">Register</Link>
        </span>
        </p>
           
            <div className='mb-2'>
                <input type='checkbox' name='tickbox' id='tick' className='me-1'/>
                <label htmlFor='password'> Remember me </label>

            </div>
        </form>
        
    </div>    
    </div>
  )
}
