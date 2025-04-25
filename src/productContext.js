import React,{createContext, useState,useEffect} from 'react'
 export const ProductContext=createContext();


 export const ProductProvider =({children})=>{
    const [products,setProduct]=useState([]);
    const [selectProduct,setSelectProduct]=useState(null)
    const [cart,setCart]=useState([])
    const handelAddCart=(product)=>{
        setCart(prevCart => {
            const existingProduct = prevCart.find(p => p.id === product.id);
            if (existingProduct) {
              return prevCart.map(p =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
              );
            } else {
              return [...prevCart, { ...product, quantity: 1 }];
            }
          });    }
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
       <ProductContext.Provider value={{products,selectProduct,setSelectProduct,cart,handelAddCart,setCart}}>
        {children}
       </ProductContext.Provider>
        </>
      

    )
 }

