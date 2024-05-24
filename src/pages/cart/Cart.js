import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css';
import trashIcon from '../../assets/images/SVGIcon/trash-solid.svg'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart, removeSingleItems } from '../../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {

  //useSelector
  const { carts } = useSelector((state) => state.allCart);

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const handleIncreament = (e) => {
    dispatch(addToCart(e));
  }
  const removeFromCart = (e) => {
    toast.warning("Item removed from your cart!")
    dispatch(removeToCart(e));
  }
  const handleDicreament = (e) => {
    dispatch(removeSingleItems(e));
  }

  const totalPriceCalculate = () => {
    let totalPrice = 0;
    carts.map((el) => {
      return(
        totalPrice = el.qty * el.price + totalPrice
      )
    })
    setTotalPrice(totalPrice);
  }

  useEffect(() => {
    totalPriceCalculate();
  })
  return (
    <>
      <div className={styles.cartSection}>
        <h1>Cart</h1>
        <div className={styles.productContainer}>

          {
            carts.length > 0 ?
              <table>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Unit Price</th>
                </tr>
                {
                  carts.map((cartData) => (
                    <tr key={cartData.id}>
                      <td>
                        <img src={trashIcon} alt="" style={{ width: '20px', cursor: 'pointer' }} onClick={() => removeFromCart(cartData.id)} />
                        <img src={cartData.image} alt="" />
                        <div>
                          <p>{cartData.product_name}</p>
                          <div className={styles.qty}>
                            <div onClick={() => handleDicreament(cartData)}>-</div>
                            <div>{cartData.qty}</div>
                            <div onClick={() => handleIncreament(cartData)}>+</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        ${cartData.qty * cartData.price}
                      </td>
                      <td>${cartData.price}</td>
                    </tr>
                  ))
                }
              </table>
              : <center><h2 style={{ fontWeight: '400', margin: '2rem 0' }}>Cart Empty!</h2></center>
          }

        </div>

          
        {
          carts.length > 0 ?
            <div className={styles.totalBill}>
              <h2>Total Ammount to Checkout</h2>
              <table>
                <tr>
                  <td><h4>Subtotal:</h4></td>
                  <td><p>${totalPrice}</p></td>
                </tr>
                <tr>
                  <td><h4>Shipping Fee:</h4></td>
                  <td><p>$0</p></td>
                </tr>
                <tr>
                  <td><h4>Discount:</h4></td>
                  <td><p>$0</p></td>
                </tr>
                <tr>
                  <td><h2>Total:</h2></td>
                  <td><h2>${totalPrice}</h2></td>
                </tr>
              </table>
              <div>
                <Link to={'/cart'}>Checkout</Link>

              </div>
            </div>
            : ''
        }
      </div>
    </>
  )
}

export default Cart