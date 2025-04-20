import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from './productContext'
const ProductList = () => {
const {products,setSelectProduct,handelAddCart}=useContext(ProductContext)
const handleClickProduct=(product)=>{
  setSelectProduct(product)
}
const handleCartProduct=(product)=>{
  
  handelAddCart(product)

}
  return (
    <div>
      <h1>
        Product List
      </h1>
      <div>
        {products.map((product)=>(
<div key={product.id}>
  <Link to={`/products/${product.id}`} onClick={()=>handleClickProduct(product)}>more details</Link>
{product.title}
<button onClick={()=>handleCartProduct(product)}>Add To Cart</button>
</div>
        )

        )}
      </div>
    </div>
  )
}

export default ProductList
