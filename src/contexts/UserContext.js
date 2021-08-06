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

  const value = { user, cart, addToCart };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
