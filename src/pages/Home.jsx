import React from 'react'
import Stats from '../components/stats/Stats'
import Product from "../components/product/Product"
import Error from "../components/error/Error"
const Home = () => {
  return (
    <div>
        <Error/>
        <Product/>
        <Stats/>
    </div>
  )
}

export default Home