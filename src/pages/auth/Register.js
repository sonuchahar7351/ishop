import React from 'react'
import styles from './auth.module.css'
import LOGO from '../../assets/images/SVGIcon/iSHOP Logo.svg'
import { Link} from 'react-router-dom';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [cPassword,setCPassword]=useState('');

  const registerUser=(e)=>{
    e.preventDefault();
    
  }
  return (
    <>
    <section className={`container ${styles.auth}`}>
        <div className={styles.form}>
            <h2>Create your  <img src={LOGO} alt=""/> Account</h2>
            <form className={styles.register} onSubmit={registerUser}>
              <div className={styles.userName}>
                <input type="text" placeholder='First Name' required value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                <input type="text" placeholder='Last Name' required value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
              </div>
                <input type="email" placeholder='Email ID' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder='Password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type="password" placeholder='Confirm Password' required value={cPassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
                <button type='submit'>Sign up</button>
            </form>
            <div className={styles.links}>
                <p>Already have an account? <Link to={'/login'}>Sign in</Link></p>
            </div>
        </div>
    </section>
    </>

  )
}

export default Register