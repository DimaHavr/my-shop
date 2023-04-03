import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  function onToggleFilter() {
    setShowFilter(!showFilter);
  }
  let foundProduct;
  let index;

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }

    const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    if (savedTotalPrice) {
      setTotalPrice(savedTotalPrice);
    }

    const savedTotalQuantities = JSON.parse(
      localStorage.getItem("totalQuantities")
    );
    if (savedTotalQuantities) {
      setTotalQuantities(savedTotalQuantities);
    }
    const savedQty = JSON.parse(localStorage.getItem("qty"));
    if (savedQty) {
      setQty(savedQty);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
    localStorage.setItem("qty", JSON.stringify(qty));
  }, [cartItems, totalPrice, totalQuantities, qty]);

  const onAdd = (product, quantity) => {
    const isAlreadyInCart = isProductInCart(product.id, cartItems);
    if (isAlreadyInCart) {
      toast.success("Продукт вже в корзині");
      setShowCart(true);
      return;
    }
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      console.log(checkProductInCart);
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${product.subtitle} додано до корзини.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    const index = cartItems.findIndex((product) => product.id === id);
    const updatedCartItems = [...cartItems];
    const itemToUpdate = updatedCartItems[index];

    if (value === "inc") {
      updatedCartItems[index] = {
        ...itemToUpdate,
        quantity: itemToUpdate.quantity + 1,
      };
      setCartItems(updatedCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + itemToUpdate.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (itemToUpdate.quantity > 1) {
        updatedCartItems[index] = {
          ...itemToUpdate,
          quantity: itemToUpdate.quantity - 1,
        };
        setCartItems(updatedCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - itemToUpdate.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const isProductInCart = (productId, cartItems) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        isProductInCart,
        onToggleFilter,
        setShowFilter,
        showFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
