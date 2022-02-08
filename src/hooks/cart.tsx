import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

type CartContextData = {

}

type CartProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {


  //Compartilhado por contexto
  const store = {

  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };