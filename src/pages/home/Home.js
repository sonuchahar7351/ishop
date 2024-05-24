import React from 'react'
import { LatestProduct, Services, Slider } from '../../Components'
import Product from '../products/Product'


const Home = () => {
  return (
    <>
      <Slider/>
      <Product/>
      <LatestProduct/>
      <Services/>
    </>
  )
}

export default Home