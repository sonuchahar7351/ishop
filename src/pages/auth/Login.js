import { useState } from 'react'
import styles from './auth.module.css'
import LOGO from '../../assets/images/SVGIcon/iSHOP Logo.svg'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signinUser = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Sign in to <img src={LOGO} alt="" /></h2>
        <form onSubmit={signinUser}>
          <input type="text" placeholder='Email or Phone Number' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <input type="password" placeholder='Password' required value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <button type='submit'>Sign in</button>
        </form>
        <div className={styles.links}>
          <Link to="/reset">Forgotten your Password?</Link>
          <p>Do not have an iShop ID? <Link to={'/register'}>Create <br />yours new account</Link></p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login