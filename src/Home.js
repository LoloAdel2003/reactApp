import React from 'react'
import Bannar from './Bannar'
import ProductList from './ProductList'
// import About from './About'
// import Deleviery from './Deleviery'
import Contact from './Contact'
import ProductCategories from './ProductCategories'
import Question from './Question'
const Home = () => {
  return (
    <>
    
    <Bannar />
   <ProductCategories />
    <ProductList />
    {/* <Deleviery /> */}
    <Contact />
    <Question />

    </>
  )
}

export default Home
