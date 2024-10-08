import React, { useState } from 'react';

const Register = () => {

    const handleSubmit = (event) =>{

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }

    const [email, setEmail] = useState('');
    const handleEmailChange = (event) =>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) =>{
        // console.log(event.target.value);
    }
    return (
        <div>
            <h4>Please Register</h4>

            <form onSubmit={handleSubmit}>
            <input onChange={handleEmailChange} type="email" name="name" id="email" placeholder='Your E-mail' />
            <br />
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' />
            <br />
            <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;