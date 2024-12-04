"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import styles from '../styles/styles.module.css'; // Import your CSS module

const Commercial = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in with:', formData);
        } else {
            console.log('Registering with:', formData);
        }
    };

    return (
        <section
            id="commercial-portal"
            className={`container my-5 ${styles.customBg}`} // Add custom background class
            style={{
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '30px',
            }}
        >
            <h2 className="text-center mb-4">
                {isLogin ? 'Employee Login' : 'Employee Registration'}
            </h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="row">
                    {!isLogin && (
                        <>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    {/* Address Section */}
                    <div className="col-12 mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="123 Main St"
                            required
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="state" className="form-label">
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="zipCode" className="form-label">
                            Zip Code
                        </label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100 mt-3"
                    style={{ padding: '10px', fontSize: '16px' }}
                >
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <div className="text-center mt-4">
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="btn btn-link"
                    style={{ textDecoration: 'none', fontSize: '14px' }}
                >
                    {isLogin
                        ? "Don't have an account? Register here"
                        : 'Already have an account? Login here'}
                </button>
            </div>
            {/* Back to Home Page Button */}
            <div className="text-center mt-4">
                <Link
                    href="/"
                    className="btn btn-secondary"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                    }}
                >
                    Back to Home Page
                </Link>
            </div>
        </section>
    );
};

export default Commercial;
