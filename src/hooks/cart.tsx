import { Event } from '@src/_MOCK_/events';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';

type CartEvent = {
  event: Event,
  price: number,
  discount: string,
  sector: string
}

type CartContextData = {
  cart: CartEvent[];
  totalPrice: number;
  addToCart: (event: CartEvent) => void;
  removeToCart: (event: CartEvent) => void;
}

type CartProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartEvent[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(event: CartEvent) {
    let newCart = [...cart];
    newCart.push(event);
    setCart(newCart);
    const newTotalPrice = totalPrice + event.price;
    setTotalPrice(newTotalPrice);
  }

  function removeToCart(event: CartEvent) {
    let newCart = cart.filter((item) => event.event !== item.event);
    setCart(newCart);
    const newTotalPrice = totalPrice - event.price;
    setTotalPrice(newTotalPrice);
  }

  //Compartilhado por contexto
  const store = {
    cart,
    totalPrice,
    addToCart,
    removeToCart,
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