import React from 'react'
import '../component/Form.css';

function Form() {
  return (
    <div className='full-container'>
       <div className='form-container'>
            <div className='form-title'>
                <p> Where Next?</p>
            </div>
            <div className='input-container'>
                <input className='input-card' placeholder='First Name'/>
                <input className='input-card' placeholder='Last Name'/>
                <input className='input-card' type='email' placeholder='Email Address'/>
                <input className='input-card' placeholder='Phone Number'/>
                <input className='input-card' placeholder='Age'/>
                <input className='input-card' placeholder='Where to'/>
                <input className='btn-sub' type='submit' value="SUBMIT"/>
            </div>
        </div>  
    </div>
  )
}

export default Form;
