import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const addToCart = (product) => {
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  };

  const changeSLCart = (ind, sl) => {
    const newcart = [...cart];
    newcart[ind].quantity = sl;
    setCart(newcart);
  };
  const deleteCart = (ind) => {
    const newcart = [...cart];
    newcart.splice(ind, 1);
    setCart(newcart);
  };

  const value = { user, cart, addToCart, changeSLCart, deleteCart };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
