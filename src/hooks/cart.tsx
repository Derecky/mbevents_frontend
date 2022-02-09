import { Event } from '@src/_MOCK_/events';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { Alert } from 'react-native';

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
    const existAnEqual = cart.some((item) => item.event === event.event);

    if (!existAnEqual) {
      let newCart = [...cart];
      newCart.push(event);
      setCart(newCart);
      const newTotalPrice = totalPrice + event.price;
      setTotalPrice(newTotalPrice);
      Alert.alert('Sucesso!', 'Seu ingresso está no carrinho.');
    } else {
      Alert.alert('Erro!', 'Já existe esse produto no carrinho.')
    }
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