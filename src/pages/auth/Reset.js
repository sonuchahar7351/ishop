import React from 'react'
import styles from './auth.module.css'
import { Link } from 'react-router-dom'
const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.form}>
            <h2>Reset your password</h2>
            <form className={styles.register}>
                <input type="text" placeholder='Email or Phone Number' required />               
                <button type='submit'>Continue</button>
            </form>
            <div className={styles.resetLinks}>
                <p><Link to={'/login'}>- Sign in</Link></p>
                <p><Link to={'/register'}>- Register</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Reset