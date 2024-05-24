import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../assets/images/SVGIcon/iSHOP Logo.svg';
import fbLogo from '../../assets/images/SVGIcon/facebook.svg';
import twitterLogo from '../../assets/images/SVGIcon/twitter.svg';
import visaLogo from '../../assets/images/SVGIcon/visa.svg'
import wunionLogo from '../../assets/images/SVGIcon/Western_union.svg'
import mcardLogo from '../../assets/images/SVGIcon/master_card.svg'
import paypalLogo from '../../assets/images/SVGIcon/Paypal.svg'
import { Link } from 'react-router-dom';
const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <>
      <hr />
      <div className={styles.footer}>
        <div className={styles['footer-top']}>
          <div>
            <img src={Logo} alt="" style={{ width: '150px', filter: 'saturate(0)' }} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>
          <div>
            <h2>Follow us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            <div className={styles.followIcons}>
              <Link><img src={fbLogo} alt="" style={{ width: '15px' }} /></Link>
              <Link><img src={twitterLogo} alt="" /></Link>
            </div>
          </div>
          <div>
            <h2>Contact Us</h2>
            <div className={styles.contactAdd}>
              <p>iShop: address @building 124</p>
              <p>Call us now: 0123-456-789</p>
              <p>Email: support@whatever.com</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles['footer-down']}>
          <div>
            <div>
              <h2>Links</h2>
            </div>
            <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/iphone">iPhone</Link>
              <Link to="/store">Store</Link>
              <Link to="/ipad">iPad</Link>
              <Link to="/accessories">Accessories</Link>
            </div>
          </div>
          <div>
            <div>
              <h2>Services</h2>
            </div>
            <div className={styles.links}>
              <Link to="/about">About Us</Link>
              <Link to="/">Information</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
            </div>
          </div>
          <div>
            <div>
              <h2>Social</h2>
            </div>
            <div className={styles.links}>
              <Link to="https://www.facebook.com/amit.chahar.73113528">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="https://www.instagram.com/amit_chahar_18?igsh=MTJmZ3lxNWwyYjdtcQ==">Instagram</Link>
              <Link to="/">LinkedIn</Link>
            </div>
          </div>
          <div>
            <div>
              <h2>Help</h2>
            </div>
            <div className={styles.links}>
              <Link to="/">Payments</Link>
              <Link to="/">Shipping</Link>
              <Link to="/">Cancellation & Returns</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <p>&copy; {year} All rights reserved</p>
          <div className={styles.footerLogos}>
            <Link to={'/'}><img src={visaLogo} alt="" /></Link>
            <Link to={'/'}><img src={wunionLogo} alt="" /></Link>
            <Link to={'/'}><img src={mcardLogo} alt="" /></Link>
            <Link to={'/'}><img src={paypalLogo} alt="" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer