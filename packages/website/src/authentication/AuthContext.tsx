import {Dispatch, SetStateAction, createContext, useContext} from 'react';

interface AuthContextProps {
    user: any;
    isLoading: boolean;
    setUser: Dispatch<SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
export const useAuthContext = () => useContext(AuthContext);
