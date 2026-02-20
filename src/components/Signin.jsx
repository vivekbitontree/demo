import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/axios';

const Signin = () => {
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        image: null
    });

    const handlechange = (e) => {
        const { name, value, files } = e.target;
        setFormdata((pre) => ({ ...pre, [name]: files ? files[0] : value }));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("dta", formData);
            await api().post('/register', formData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <h1>Create Account</h1>
            <p className="subtitle">Start your journey with our beautiful platform</p>

            <form onSubmit={handlesubmit}>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' id="name" placeholder="John Doe" required onChange={handlechange} />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name='email' placeholder="name@example.com" required onChange={handlechange} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' placeholder="••••••••" required onChange={handlechange} />
                </div>

                <div className="input-group">
                    <label htmlFor="image">Profile Image</label>
                    <input type="file" id="image" name='image' accept="image/*" required onChange={handlechange} />
                </div>

                <button type="submit" className="btn-primary">Get Started</button>
            </form>

            <div className="auth-footer">
                Already have an account? <Link to="/login">Sign In</Link>
            </div>
        </div>
    );
};

export default Signin;