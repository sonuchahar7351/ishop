import styles from './LatestProduct.module.css';
import latestProductImg from '../../assets/images/homePageImg/2_corousel.png'
import { Link } from 'react-router-dom';
const LatestProduct=()=>{
    return(
      <>
        <section className={styles.latestProductSection}>
          <div className={styles.content}>
            <h1>iPhone 13 Pro</h1>
            <p>Performance and Design. Taken <br/>right to the edge</p>
            <Link to={'/'}>Shop Now</Link>
          </div>
          <img src={latestProductImg} alt="" />
        </section>
      </>
    )
}

export default LatestProduct;