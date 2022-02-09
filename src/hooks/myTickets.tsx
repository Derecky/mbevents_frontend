import React, {
  createContext,
  useContext,
  ReactNode,
} from 'react';

type MyTicketsContextData = {

}

type MyTicketsProviderProps = {
  children: ReactNode;
}

export const MyTicketsContext = createContext({} as MyTicketsContextData);

function MyTicketsProvider({ children }: MyTicketsProviderProps) {

  //Compartilhado por contexto
  const store = {

  }

  return (
    <MyTicketsContext.Provider value={store}>
      {children}
    </MyTicketsContext.Provider>
  );
}

function useMyTickets() {
  const context = useContext(MyTicketsContext);

  return context;
}

export { MyTicketsProvider, useMyTickets };