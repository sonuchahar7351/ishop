import { NavLink } from 'react-router-dom';
import styles from './Store.module.css';
import product_data from '../products/Product_data';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';
const StoreCategoryCard = ({h2,span,page,link,category})=>{

    const hotTag = (
        <div className={styles.hotTag}>
            <span>HOT</span>
        </div>
    )

    const dispatch = useDispatch();

    //add to cart 
    const send = (e) => {
        toast.success("Item added to your cart!")
        dispatch(addToCart(e));
    }
    return(
        <>
        <div className={styles.product}>
            <h2>{h2} <span>{span}</span></h2>
            <div className={styles['products-container']}>
                    {
                        product_data.map((product) => (
                            [product.page === `${page}` && product.category === `${category}` ?
                                <div className={styles['products-container-box']} key={product.id}>
                                    <img src={product.image} alt="" />
                                    <h3>{product.product_name}</h3>
                                    <div className={styles.price}>
                                        <p>${product.price}</p>
                                        <span>${product.initialPrice}</span>
                                    </div>
                                    <div className={styles.stars}>
                                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-solid fa-star-half-alt" aria-hidden="true"></i>
                                    </div>
                                    <button onClick={() => send(product)}>Add To Cart</button>
                                    {
                                        product.hasOwnProperty('hot') ? product.hot ? [hotTag] : '' : ''
                                    }
                                </div>
                                : '']
                        ))
                    }
                </div>
                <NavLink to={link}>See More</NavLink>
        </div>
        </>
    );
}

export default StoreCategoryCard;