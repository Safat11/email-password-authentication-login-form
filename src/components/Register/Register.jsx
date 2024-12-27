import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) =>{
        // 1. prevent page refress
        event.preventDefault();

        setSuccess('');
        setError('');
        // 2. collect from data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError("Please add at least one upper case");
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least two number')
            return;
        }
        else if(password.length<6){
            setError('Please add at least 6 characters in your password')
            return;
        }

        // 3. create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully');
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message);
           
        })

    }

    const [email, setEmail] = useState('');
    const handleEmailChange = (event) =>{
        // console.log(event.target.value);
        // setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) =>{
        // console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>

            <form onSubmit={handleSubmit}>
            <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="name" id="email" placeholder='Your E-mail' required />
            <br />
            <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
            <br />
            <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-primary'>{success}</p>
        </div>
    );
};

export default Register;