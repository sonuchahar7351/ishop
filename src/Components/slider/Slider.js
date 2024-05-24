import React from 'react'
import styles from './Slider.module.css'
import slider_data from './slider-data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const Slider = () => {
  return (
    <>
        <Carousel autoPlay={true} showIndicators={false}  showThumbs={false} swipeable={true} infiniteLoop={true} emulateTouch={true} interval={4000} showStatus={false} showArrows={false}>
            {
                slider_data.map((slide)=>(
                    <div key={slide.id} className={styles.slide}>
                        <img src={slide.image} alt=""  className={styles.pcImage}/>
                        <img src={slide.imagemobile} alt=""  className={styles.mobileImage}/>

                        <div className={styles.content}>
                            <h2>upto {slide.discount} Off</h2>
                            <p>{slide.name}</p>
                            <Link to={'/'}>Shop Now</Link>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    </>
  )
}

export default Slider