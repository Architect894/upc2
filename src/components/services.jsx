"use client";
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.css'; // Adjust the path as necessary
import '../styles/global.css';

export default function Services() {
    const headerStyle = {
        backgroundColor: 'var(--bs-dark)', // Using Bootstrap's dark color for consistency
        color: 'white',
        padding: '10px', // Adjust padding as needed
        border: 'solid black 2px',
        borderRadius: '25px', // For rounded corners
        display: 'inline-block', // To center the background with the text
        textAlign: 'center', // Center text within the header
        width: '100%', // Ensure full width
        fontFamily: 'Arial'
    };

    const servicesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['visible']);
                } else {
                    entry.target.classList.remove(styles['visible']);
                }
            });
        }, { threshold: 0.1 }); // Adjust threshold as needed

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    const services = [
        { title: "Pest Control", description: "Comprehensive pest management solutions for homes and businesses." },
        { title: "Termite Treatment", description: "Specialized treatments to protect your property from termites." },
        { title: "Lawn Care", description: "Professional lawn services including mowing, fertilization, and pest control." },
        { title: "Wildlife Management", description: "Humane removal and control of wildlife intruding on your property." },
    ];

    return (
        <section id="our-services" className={`py-5 text-center ${styles['logo-container']}`}>
            <div className="container" ref={servicesRef}>
                <h2 style={headerStyle} className="mb-1 display-3">Our Services</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}