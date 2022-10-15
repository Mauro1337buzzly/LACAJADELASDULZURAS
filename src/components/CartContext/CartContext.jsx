import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.find((product) => product.id === id);
  };

  const addItem = (item, qty) => {
    if(isInCart(item.id)){
        setCartList(cartList.map(product=> product.id=== item.id?{...product,qty:product.qty+qty}: product))
    }else{
        item.qty = qty;
        setCartList([...cartList, item]);
    }
  };

  const end = () => {
    alert("Gracias por su compra");
  };

  const calcItemsCant = () => {
    let cant = cartList.map((item) => item.qty);
    return cant.reduce((previousValue, currentValue) => previousValue + currentValue,0);
  };

  const clear = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartList, clear, addItem, removeItem, calcItemsCant }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
