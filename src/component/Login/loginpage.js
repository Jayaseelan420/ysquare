import React from 'react';
// import ptu from './ppp.jpg'
import './loginpage.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function LoginPage(){
    function handlelog(){
        var username=document.getElementById("Email").value
        var Password=document.getElementById("Password").value
        if (username==="jayaseelan@gmail.com" && Password==="jayaseelan123"){
            alert ("login success")
            window.location.href='/Dashboard'
        }
        else {
            alert ("please check yours data")
        }
    }

    return(
        <>
         <div className='bglog'>
            {/* <h1 className='text-center'>Member Login</h1> */}
            <div className='container bg-white radius'>
                <div className='row p-5'>

                     <div className='col-lg-6'>
                        <h1 className='text-center text-primary pb-2'>Member Login</h1>
                        {/* <img src={ptu} className='col-lg-8 container-fluid pb-4 imgs '/> */}
                    </div>
                    <div className='col-lg-6'>
                        <form>
                            <div className='form-outline icon mb-4 d-flex'>
                                <FontAwesomeIcon icon={faEnvelope} className='mt-3' />
                                <input type='text' placeholder='Email' id="Email" className='rounded form-control form-control-lg inp'/>
                            </div>
                            <div className='form-outline icon d-flex mb-4'>
                            <FontAwesomeIcon icon={faLock} className='mt-3' />
                                <input type='password' placeholder='Password' id="Password" className='rounded  form-control form-control-lg inp'/>
                            </div>
                            <Link to='/Dashboard'><button className='btn btn-primary btn-lg' onClick={handlelog}>Login</button></Link>
                              <br/>
                              <br/>
                            <a href="#!" class="text-body">Forgot <span className='text-primary inp'>Username / Passsword ?</span></a>
                               <br/>
                              <br/>
                            <p className='text-primary'>Create your Account</p>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
