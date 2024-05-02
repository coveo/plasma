import axios from 'axios';
import {FunctionComponent, PropsWithChildren, useEffect, useState} from 'react';
import {AuthContext} from './AuthContext';
import {getToken} from './AuthHelpers';

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const authToken = getToken();

    const fetchLoggedInUser = async (token: any) => {
        setIsLoading(true);
        await axios
            .get(`${import.meta.env.VITE_ADMIN_API_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(({data}) => {
                setUserData(data);
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleUser = (user) => {
        setUserData(user);
    };

    useEffect(() => {
        if (authToken) {
            fetchLoggedInUser(authToken);
        }
    }, [authToken]);

    return (
        <AuthContext.Provider value={{user: userData, setUser: handleUser, isLoading}}>{children}</AuthContext.Provider>
    );
};
