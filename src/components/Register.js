import React, {useState} from 'react';

export default function Register(){
    const [registerData, setRegisterData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        cnpassword: '',
    });

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Submit",registerData);
        //Note: Send async POST Call to server
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        })
        console.log("Update",registerData);
    }

    return (
        <div className='formContainer'>
            <h2>Register</h2>
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