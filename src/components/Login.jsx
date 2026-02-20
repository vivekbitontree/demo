import { Link } from 'react-router-dom';
import { api } from '../api/axios';
import { useState } from 'react';

const Login = () => {
    const [formData, setFormdata] = useState({
        email: "",
        password: ""
    })
    const handlechange = (e) => {
        setFormdata((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        let res = await api().post('/login', formData)
        console.log(res)
    }

    return (
        <div className="auth-container">
            <h1>Welcome Back</h1>
            <p className="subtitle">Enter your credentials to access your account</p>

            <form onSubmit={handlesubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' id="email" placeholder="name@example.com" required onChange={handlechange} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id="password" placeholder="••••••••" required onChange={handlechange} />
                </div>

                <button type="submit" className="btn-primary">Sign In</button>
            </form>

            <div className="auth-footer">
                Don't have an account? <Link to="/signin">Create one</Link>
            </div>
        </div>
    );
};

export default Login;
