import React from 'react'
import styles from './Product.module.css'
import { NavLink } from 'react-router-dom'
import product_data from './Product_data'
import { addToCart } from '../../redux/slice/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
const Product = () => {

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

    return (
        <>
            <section className={`${styles.product} container`}>
                <h1>Explore the latest Products</h1>
                <div className={styles['products-container']}>
                    {
                        product_data.map((product) => (
                            [product.page === 'home' ?
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
                <NavLink to={'/store'}>See More</NavLink>
            </section>
        </>
    )
}

export default Product