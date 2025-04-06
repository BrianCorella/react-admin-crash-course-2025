/* eslint-disable prettier/prettier */
import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    // Runs when user attempts to log in
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('username', username);
            return Promise.resolve();
        } else {
        return Promise.reject();   
        }
    },
    // Runs when user attempts to log out
    logout: () => {
        // Remove username from local storage
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // Runs when API returns error
    checkError: ({ status }: {status: number}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // Runs when user navigates to a new location to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },
    // Runs when user navigates to a new location to check for permissions or rules
    getPermissions: () => Promise.resolve(),
};