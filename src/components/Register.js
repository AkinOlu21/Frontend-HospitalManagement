import {useRef, useState, useEffect} from "react"
import {faCheck, faTimes, faInfoCircle, faC} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, faFontAwesomeIcon } from "@fortawesome/react-fontawesome"
 import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
 import axios from "axios";
 import { API_BASE_URL } from "../apiConfig";
import React from 'react'
import { Outlet, Link, json } from "react-router-dom";


const email_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//const email_REGEX = //^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;///
const PWD_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Register = () => {
    const emailRef = useRef();
    const  errRef = useRef();
    
        //const [email, setEmail] = useState('');  // Assuming email is needed

    const [email, setEmail] = useState('');
    const [validName, setValidName] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd]= useState('');
    const [validPwd, setValidPwd]= useState(false);
    const [pwdFocus, setPwdFocus]= useState(false);
    
    const [matchPwd, setMatchPwd]= useState('');
    const [validMatch, setValidMatch]= useState(false);
    const [matchFocus, setMatchFocus]= useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
     emailRef.current.focus();
    }, [])

 useEffect (() => {
    const result = email_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidName(result);
 }, [email])

 useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd
    setValidMatch(match);
 }, [pwd, matchPwd])



 useEffect (() => {
    setErrMsg('');

 }, [email, pwd, matchPwd])

 const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData ={
        Email: email,   // Assuming 'email' contains the email address
        Password: pwd 
    }
    const v1 = email_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg("Invalid entry not recognised");
        return;
    }
    try {
        const response = await axios.post(`${API_BASE_URL}Account/register`, formData,
        JSON.stringify({email , pwd}),
    {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    }
);
console.log(response.data);
console.log(response.accessToken);
console.log(JSON.stringify(response))
setSuccess(true);
    } catch (error) {
        if (!error?.response){
            setErrMsg('No server response')
        } else if (error.response?.status === 409){
            setErrMsg('emailname taken')
        }else {
            setErrMsg('Registration failed')
        }
        errRef.current.focus();
    }


 }


  return (
    <div className="hero">
    <section className="container">
    <p ref={errRef}  className={'alert ${errMsg ? "alert-danger" errmsg": "offscreen"}'} aria-live="assertive">{errMsg}</p>
<h1 className="text-center fw-bold">Register</h1>
<form onSubmit={handleSubmit} className="box">
<label  htmlFor="emailname" placeholder="Enter your emailname" >Email:
<span className={validName ? "valid": "hide"} >
    <FontAwesomeIcon icon={faCheck}/>
</span>
<span className={validName || !email ? "hide" : "invalid"}>
<FontAwesomeIcon icon={faTimes}/>
</span>
</label>
<input
className='form-control rounded-0'
type="text"
id="emailname"
ref={emailRef}
autoComplete="off"
onChange={(e) => setEmail(e.target.value)}
required
aria-invalid={validName ? "false" : "true"}
aria-describedby="uidnote"
onFocus={() => setEmailFocus(true)}
onBlur={() => setEmailFocus(false)}
/>

<p id="uidnote" className={emailFocus && email && !validName ? "instructions" : "offscreen"}>
    <FontAwesomeIcon icon={faInfoCircle}/>
    4 to 24 characters.<br/>
    Must begin with a letter. <br/>
    Letters, numbers, underscores, hyphens allowed.
</p>

<label htmlFor="password"> Password:
<span className={validPwd ? "valid" : "hide"}>
    <FontAwesomeIcon icon={faCheck}/>
</span>
<span className={validPwd || !pwd ? "hide" : "invalid"}>
    <FontAwesomeIcon icon={faTimes}/>
</span>
</label>
<input
className='form-control rounded-0'
type="password"
id="password"
onChange={(e) => setPwd(e.target.value)}
required
aria-invalid={validPwd ? "false" : "true"}
aria-describedby="pwdnote"
onFocus={() => setPwdFocus(true)}
onBlur={() => setPwdFocus(false)}
/>
<p id="pwdnote" className={pwdFocus && !validPwd ? "instructions": "offscreen"}>
    <FontAwesomeIcon icon={faInfoCircle}/>
    8 to 24 characters.<br/>
    Must include uppercase and lowercase letters, a number and a special character.<br/>
    Allowed special characters: <span aria-label="exclamation mark">!</span>
    <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
    <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>


<label htmlFor="confirm password"> Confirm Password:
<span className={validMatch && matchPwd ? "valid" : "hide"}>
    <FontAwesomeIcon icon={faCheck}/>
</span>
<span className={validMatch || !matchPwd ? "hide" : "invalid"}>
    <FontAwesomeIcon icon={faTimes}/>
</span>
</label>
<input
type="password"
id="confirm password"
onChange={(e) => setMatchPwd(e.target.value)}
required
aria-invalid={validMatch ? "false" : "true"}
aria-describedby="confirmnote"
onFocus={() => setMatchFocus(true)}
onBlur={() => setMatchFocus(false)}
/>
<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
<FontAwesomeIcon icon={faInfoCircle}/>
Must match the first password input field.
</p>

<button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
</form>
<p>
    Already registered?<br/>
    <span className="line">
      <Link  to="/Login">Login</Link>
    
    </span>
</p>

<Outlet/>
    </section>
</div>
    
  )
}

export default Register