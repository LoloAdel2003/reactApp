import React, { useContext } from 'react'
import { ProductContext } from './productContext'
 
const ProductDtails = () => {
    const {selectProduct,handelAddCart}=useContext(ProductContext)
    const handleCartProduct=(product)=>{
        if(selectProduct)
       { handelAddCart(product)}
      }
    if(! selectProduct){
        return(
            <div>
                Loading

            </div>
        )
    }
  return (
   <>
   <div>
    <h1>{selectProduct.title}</h1>
    <img src={selectProduct.image} alt={selectProduct.title} />
    <p>{selectProduct.description}</p>
    <p>Price: {selectProduct.price}</p>
    <button onClick={()=>handleCartProduct(selectProduct)}>Add To Cart</button>

   </div>
   </>)
}

export default ProductDtails
