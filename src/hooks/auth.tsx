import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';
import { Alert } from 'react-native';

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>
  isLogging: boolean
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState(false);

  async function signIn(email: string, password: string) {

    /* Verifica se foi informado email e senha */
    if (!email || !password) {
      return Alert.alert('Login', 'Informe o e-mail e a senha')
    }

    setIsLogging(true);

    /*TODO: Criar Login */


    Alert.alert('Enviando', `Email: ${email}\nSenha: ${password}`);

    setIsLogging(false);
  }

  //Compartilhado por contexto
  const store = {
    signIn,
    isLogging
  }

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };