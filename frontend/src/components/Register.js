import React, { useState } from 'react';
import axiosClient from '../utils/AxiosClient';

export default function Register() {
    const [registerData, setRegisterData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        cnpassword: '',
        skills: '',
        resume: null,
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Submitting: ", registerData);

        if (registerData.password !== registerData.cnpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Use FormData to handle file upload
            const formData = new FormData();
            Object.keys(registerData).forEach((key) => {
                formData.append(key, registerData[key]);
            });

            const response = await axiosClient.post('http://localhost:8080/auth/signupUser', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Registration successful: ", response.data);
            alert("User registered successfully");
        } catch (error) {
            console.error("Error occurred while registering: ", error.response?.data || error.message);
            alert(error.response?.data?.message || "An error occurred while registering");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setRegisterData({
            ...registerData,
            resume: file, // Update the resume file
        });
    };

    return (
        <div className="formContainer">
            <h2 className="formHeading">Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input
                        name="mobile"
                        type="text"
                        placeholder="Enter your mobile no"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="**********"
                        pattern=".{8,12}" 
                        title="8 to 12 characters"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        name="cnpassword"
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Skills:</label>
                    <input
                        name="skills"
                        type="text"
                        placeholder="Enter your skills (comma separated)"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Resume:(in pdf)</label>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
