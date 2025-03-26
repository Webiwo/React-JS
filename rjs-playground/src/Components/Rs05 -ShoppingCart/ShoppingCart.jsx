import { useReducer, useState } from "react";

const product = {
  name: "wireless mouse",
  price: 32.5,
};

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

//reducer
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "setCartItems":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type of ${type}`);
  }
};

//----------------- LOGIC
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

//----------------- SHOPPING CART
const ShoppingCart = () => {
  //useReducer
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { cartItems } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );

    const newCartCount = newCartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );

    dispatch({
      type: "setCartItems",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = () => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <p>
        Product: {product.name.toUpperCase()}, Price: {product.price}
      </p>
      <button onClick={addItemToCart}>add to cart</button>
      <button onClick={removeItemFromCart}>remove item</button>
      <button onClick={clearItemFromCart}>clear item</button>
      <p>
        In Cart:{" "}
        {state.cartItems.length && state.cartItems[0].name.toUpperCase()},
        Count: {state.cartCount}, Total: {state.cartTotal}
      </p>
    </>
  );
};

export default ShoppingCart;
