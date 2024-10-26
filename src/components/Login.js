import React, {useState} from 'react';

export default function Login(){
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Submitting: ",loginData);
        //Note: Send async POST Call to server
        // alert('Sending call to server:',JSON.stringify(loginData))
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
        // console.log("Updated values: ",loginData);
    }

    return (
        <div className='formContainer'>
            <h2 className='formHeading'>Login</h2>
            <form onSubmit={handleLogin} >
                <div>
                    <label>Email:</label>
                    <input name='email' type='email' placeholder='Enter your email' onChange={handleChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input name='password' type='password' placeholder='**********' onChange={handleChange}/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}