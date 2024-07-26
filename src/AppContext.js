import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext=createContext({})
export const AppProvider=({children})=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetchProducts()
    },[])
    const [cart,setCart]=useState([])
    const url="https://66a07bbb7053166bcabb8e6d.mockapi.io/Student"
    const fetchProducts = () => {
        axios
          .get(url)
          .then(function (res) {
            setProducts(res.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      const addCart=(id)=>{
        const res=products.find(item=>item.id===id)
        setCart([...cart,res])
      }
    return <AppContext.Provider value={{cart,addCart}}>
        {children}
    </AppContext.Provider>
}