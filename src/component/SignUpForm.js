import React from 'react'
import '../component/SignUpForm.css';

function SignUpForm() {
  return (
    <div className='full-container-sign'>
       <div className='form-container-sign'>
            <div className='form-title-sign'>
                <p> Sign Up</p>
            </div>
            <div className='input-container-sign'>
                <input className='input-card-sign' placeholder='username'/>
                <input className='input-card-sign' type='password' placeholder='password'/>
                <input className='btn-sub-sign' type='submit' value="SUBMIT"/>
            </div>
        </div>  
    </div>
  )
}

export default SignUpForm;
