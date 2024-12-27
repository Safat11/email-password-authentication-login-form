import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = (event) => {

        event.preventDefault();

        setError('');
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        // Validation
        if (!/[a-zA-Z0-9]{8,}/.test(password)) {
            setError('Password should contain at least 8 alphanumeric characters.');
            return;
        } else if (!/(?=.*[!#$%&? "])/.test(password)) {
            setError('Password must include at least one special character.');
            return;
        }

        // setSuccess('Login successful!');

        signInWithEmailAndPassword(auth, email, password)

        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            if(!loggedUser.emailVerified){
                alert('Email is not verified');
            }
            setSuccess('User Login Successful!');
            setError('');

        })
        .catch(error =>{
            setError(error.message);
        })
    };

    const handleResetPassword = event =>{
        const email = emailRef.current.value;
        alert('Please provide your email address to reset password');
        return;
    }
    sendPasswordResetEmail(auth, email)
    .then(() =>{
        alert('Please check your email')
    })
    .catch(error =>{
        console.log(error);
        setError(error.message)
    })
    return (
        <div>
            {/* <h3 className="w-25 mx-auto text-center mt-4">Please Login</h3> */}

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg" style={{ width: '24rem' }}>
                    <h3 className="text-center mb-4">Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                ref = {emailRef}
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                    </div>
                    <p><small>Forget Password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
                    <br />
                    <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>

                    <p className="text-danger mt-3" aria-live="polite">{error}</p>
                    <p className="text-success mt-3" aria-live="polite">{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
