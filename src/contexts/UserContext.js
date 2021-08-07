import { createContext, useEffect, useState } from "react";
import { UserApis } from "../apis/UserApis";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const [checkLogin, setCheckLogin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      UserApis.getUserInfo()
        .then((result) => {
          setUser(result.data.user);
          setCheckLogin(true);
        })
        .catch((err) => {
          setCheckLogin(false);
          console.log(err);
        });
    } else {
      setCheckLogin(false);
    }
  }, [checkLogin]);

  const addToCart = (product) => {
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  };

  const login = (data) => {
    // console.log(data);
    localStorage.setItem("token", data.token);
    setUser(data.user);
    setCheckLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
    setCheckLogin(false);
  };

  console.log(user);
  // const value = { user, cart, addToCart, login, logout, checkLogin };

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

  const value = {
    user,
    cart,
    addToCart,
    login,
    logout,
    checkLogin,
    changeSLCart,
    deleteCart,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
