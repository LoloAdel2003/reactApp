import React,{createContext, useState,useEffect} from 'react'
 export const ProductContext=createContext();


 export const ProductProvider =({children})=>{
    const [products,setProduct]=useState([]);
    const [selectProduct,setSelectProduct]=useState(null)
    const [cart,setCart]=useState([])
    const handelAddCart=(product)=>{
setCart([...cart,product])
    }
    useEffect(()=>{
        const fetchProduct=async ()=>{
            try{
                const response =await fetch("https://fakestoreapi.com/products");
                    const data=await response.json();
                setProduct(data);
            }
            catch(error){
                console.error("error featching products :" +error)
            }
        }
        fetchProduct();
    },[])

    return (
        <>
       <ProductContext.Provider value={{products,selectProduct,setSelectProduct,cart,handelAddCart}}>
        {children}
       </ProductContext.Provider>
        </>
      

    )
 }

