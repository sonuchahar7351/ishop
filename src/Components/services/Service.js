import React from 'react'
import styles from './Service.module.css'
import service1 from '../../assets/images/SVGIcon/shipping.svg';
import service2 from '../../assets/images/SVGIcon/refund.svg';
import service3 from '../../assets/images/SVGIcon/support.svg';
const Service = () => {
    return (
        <>
            <section className={`${styles.serviceSection} container`}>
                <h1>Services</h1>
                <div className={`${styles['services-container']}`}>
                    <div className={styles.service}>
                        <img src={service1} alt="service" />
                        <h3>Free Shipping</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veniam neque officia dicta! Fugiat voluptatibus dicta dignissimos quia quae dolore et ullam inventore. Tenetur, ducimus?</p>
                    </div>
                    <div className={styles.service}>
                        <img src={service2} alt="service" />
                        <h3>100% Refund</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veniam neque officia dicta! Fugiat voluptatibus dicta dignissimos quia quae dolore et ullam inventore. Tenetur, ducimus?</p>
                    </div>
                    <div className={styles.service}>
                        <img src={service3} alt="service" />
                        <h3>Support 24/7</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veniam neque officia dicta! Fugiat voluptatibus dicta dignissimos quia quae dolore et ullam inventore. Tenetur, ducimus?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service