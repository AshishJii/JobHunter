// axiosClient.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log('Request:', config);
        return config;
    },
    (err) => {
        Promise.reject(err);
    }
);

// handle route to login page when token expires
axiosClient.interceptors.response.use(
    (response) => response,
    (err) => {
        const {response} = err;
        if(response && response.status === 401) {
            //token expired or invalid
            localStorage.removeItem('token');
            const navigate = useNavigate();
            navigate('/login');
        }
        return Promise.reject(err);
    }
)

export default axiosClient;
