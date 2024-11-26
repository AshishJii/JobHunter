import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../utils/AxiosClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    // Retrieve the token from localStorage on initial load
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            // If token exists, fetch the user information
            axiosClient.get('http://localhost:8080/users/me')
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Failed to fetch user data:', error);
                });
        }
    }, []); // Only run on mount

    const login = async (credentials) => {
        try {
            const response = await axiosClient.post('http://localhost:8080/auth/login', credentials);
            console.log('Login successful:', response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);

            // Fetch user data after login
            const r = await axiosClient.get('http://localhost:8080/users/me');
            console.log(r.data);

            setUser(r.data);
            setToken(token);

            return r.data;

        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing auth context
export const useAuth = () => useContext(AuthContext);
