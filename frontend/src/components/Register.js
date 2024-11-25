import React, {useState} from 'react';
import axiosClient from '../utils/AxiosClient';

export default function Register(){
    const [registerData, setRegisterData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Submitting: ",registerData);

        //Note: Send async POST Call to server
        if (registerData.password !== registerData.cnpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axiosClient.post('http://localhost:8080/auth/signup', registerData);
            console.log("Registration successful: ", response.data);
            alert("User registered successfully");
        } catch (error) {
            console.error("Error occurred while registering: ", error.response?.data || error.message);
            alert(error.response?.data?.message || "An error occurred while registering");
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        })
        // console.log("Updated values: ",registerData);
    }

    return (
        <div className='formContainer'>
            <h2 className='formHeading'>Register</h2>
            <form onSubmit={handleRegister} >
                <div>
                    <label>Name:</label>
                    <input name='name' type='text' placeholder='Enter your name' onChange={handleChange}/>
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input name='mobile' type='number' placeholder='Enter your mobile no' onChange={handleChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input name='email' type='email' placeholder='Enter your email' onChange={handleChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input name='password' type='password' placeholder='**********' onChange={handleChange}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input name='cnpassword' type='password' placeholder='**********' onChange={handleChange}/>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}