import React from 'react'
import styles from './Store.module.css'
import phoneImg1 from '../../assets/images/Products/Products/iPhone 10 pro.png'
import phoneImg2 from '../../assets/images/Products/Products/iPhone 11.png'
import phoneImg3 from '../../assets/images/Products/Products/iPhone 8.png'
import phoneImg4 from '../../assets/images/Products/Products/iPhone 9.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { category_data } from './category_data'
import { latestCardData } from './latest_card_data'
import StoreCategoryCard from './StoreCategoryCard'

const Store = () => {
    return (
        <>
            <div className={`${styles.store}`}>
                <div className={styles.storeContainer}>

                    <h1>The best deals you love Right here at <span>iStore</span> </h1>
                    <div id={styles.images}>
                        <img src={phoneImg1} alt="" />
                        <img src={phoneImg2} alt="" />
                        <img src={phoneImg3} alt="" />
                        <img src={phoneImg4} alt="" />
                    </div>
                    <div id={styles.category}>

                        {
                            category_data.map((data) => (
                                <div key={data.id} className={`${styles.categoryData}`}>
                                    <img src={data.img} alt="category" />
                                    <p>{data.name}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className={styles.categoryContainer}>
                        <h2>The Latest. <span>Take a look at what’s new right now.</span></h2>
                        <div className={styles.categoryCardContainer}>
                            {
                                latestCardData.map((data) => (
                                    <div className={styles.categoryCard} key={data.id}>
                                        <img src={data.img} alt="" />
                                        <div className={styles.content}>
                                            <p>{data.title}</p>
                                            <h3>{data.name}</h3>
                                            <p>From {data.price}<sup>‡</sup></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <StoreCategoryCard h2="Loud and clear." span="best choices for rich, high-quality sound." category="sound" link="accessories" page="store"/>

                    <StoreCategoryCard h2="Accesories." span="Get the perfect gift for the person who gets you." category="accesories" link="accessories" page="store"/>
                </div>
            </div>
        </>
    )
}

export default Store