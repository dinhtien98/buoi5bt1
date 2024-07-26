import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const [cart, setCart] = useState([]);
  const url = "https://66a07bbb7053166bcabb8e6d.mockapi.io/Student";
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
  const addCart = (id) => {
    const res = products.find((item) => item.id === id);
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      let newCart = cart;
      newCart[index].quantity++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...res, quantity: 1 }]);
    }
  };
  const deleteCart=(id)=>{
    setCart(cart.filter(item=>item.id!==id))
  }
  const updateQuantity=(id,flag)=>{
    const index = cart.findIndex((item) => item.id === id);
    let newCart = cart;
    if(flag==0){
        if(newCart[index].quantity>1){
            newCart[index].quantity--;
        }
    }else{
        newCart[index].quantity++;
    }
    setCart([...newCart])
  }
  return (
    <AppContext.Provider value={{ cart, addCart ,deleteCart,updateQuantity}}>
      {children}
    </AppContext.Provider>
  );
};
