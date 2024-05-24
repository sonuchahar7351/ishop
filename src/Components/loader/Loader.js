import LOADER_IMG from '../../assets/images/homePageImg/Loader.gif'
import styles from './Loader.module.css'
import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={LOADER_IMG} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader