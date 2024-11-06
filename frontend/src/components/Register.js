import React, {useState} from 'react';

export default function Register(){
    const [registerData, setRegisterData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        cnpassword: '',
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Submitting: ",registerData);


        //Note: Send async POST Call to server
        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Registration successful: ", data);
                alert("USer registered")
            } else {
                const errorData = await response.json();
                console.error("Registration failed: ", errorData);
                alert(errorData)
            }
        } catch (error) {
            console.error("Error occurred while registering: ", error);
            alert("Network error",error);
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