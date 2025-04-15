"use client";
import { productsData } from "@/images/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const getDefaultCart = () => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : {};
  }
  return {}; // Return an empty object on the server
};

export const AppContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = async (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
        if (updatedCart[itemId] === 0) {
          delete updatedCart[itemId]; // Remove item if quantity becomes zero
        }
      }
      return updatedCart;
    });
  };

  const removeAll = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = productsData.find((product) => product._id === Number(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      totalItem += cartItems[itemId];
    }
    return totalItem;
  };

  const value = {
    addToCart,
    router,
    cartItems,
    getTotalCartItems,
    productsData,
    removeFromCart,
    getTotalCartAmount,
    removeAll,
    setCartItems,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};