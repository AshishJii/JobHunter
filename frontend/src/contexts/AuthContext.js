// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../utils/AxiosClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const login = async (credentials) => {
        try {
            const response = await axiosClient.post('http://localhost:8080/auth/login', credentials)
            console.log('Login successful:', response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log(token)

            console.log(credentials.email)
            setUser(credentials.email);
            setToken(token);

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

    console.log('💥💥💥💥')
    console.log(user)
    return (
        <AuthContext.Provider value={{ user, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing auth context
export const useAuth = () => useContext(AuthContext);
