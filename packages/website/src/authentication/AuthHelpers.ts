export const getToken = () => localStorage.getItem(import.meta.env.VITE_BEARER_TOKEN);

export const setToken = (token) => {
    if (token) {
        localStorage.setItem(import.meta.env.VITE_BEARER_TOKEN, token);
    }
};

export const removeToken = () => {
    localStorage.removeItem(import.meta.env.VITE_BEARER_TOKEN);
};
